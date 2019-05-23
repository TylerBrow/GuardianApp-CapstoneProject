import React from 'react'
import { getUserLocation, getNotifications, sendCheckpoint, getGeofence, geoFencing } from '../actions/actions'

import { ListItem, Header, Icon, Button } from 'react-native-elements'

import { Notifications } from 'expo';

import { BackgroundFetch, Font } from 'expo';

import { Constants, Location, Permissions, TaskManager, LinearGradient } from 'expo';

import { connect } from 'react-redux'

import moment from 'moment'

import {
  AsyncStorage,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList
} from 'react-native';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    userLocation: null,
    timestamp: null,
    geoLat: null,
    geoLng: null,
  }
 
    setUserLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
          },
          timestamp: position.timestamp
        })
        sendCheckpoint(this.state.timestamp, this.props.userId)
      })
    }

    componentDidMount() {
      this._getLocationAsync()
      this.load()
      this.gettingUser()
      // this.geo()
    }

    componentWillMount(){
      getGeofence()
    }

    componentWillReceiveProps(){
      this.geo()
    }
    
    geo = async () => {
      await Location.geocodeAsync(this.props.address).then(position => {
        position.map(item => {
          this.setState({
            latitude: item.latitude,
            longitude: item.longitude
          })
        })
        console.log('lat', this.state.latitude, 'lng', this.state.longitude)
        console.log(this.props.radius)
      })
    }

    load = async () => {
      let user = ''
      try {
        user = await AsyncStorage.getItem('user')
      } catch (e) {
        console.error('Failed to load name.')
      }
      return user;
    }

    gettingUser = () => {
      const user = this.props.userId
    const _storeData = async user => {
      try {
        await AsyncStorage.setItem('user', this.props.userId);
      } catch (error) {
        // Error saving data
      }
    }
    _storeData()
  }

    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
      await Location.startLocationUpdatesAsync('currentLoc', {accuracy : Location.Accuracy.Highest, timeInterval: 10000, distanceInterval: 0, showsBackgroundLocationIndicator: true})

      await Location.startGeofencingAsync('geofence', [{latitude: this.state.latitude, longitude: this.state.longitude, radius: this.props.radius, notifyOnExit: true}])

      const { status: existingStatus } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
      
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          return;
        }
    }

    handleLogout = () => {
      const user = AsyncStorage.removeItem('user')
      this.props.navigation.navigate('Login')
      this.setState({
        latitude: '',
        longitude: ''
      })
    }

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.viewContainer}>
          <Header
            leftComponent={{text: 'Guardian', style:{color: 'rgb(115, 57, 244)', fontSize: 30, marginLeft: 10, fontFamily:'Merienda-bold'}}}
            leftContainerStyle={{flex: 3}}
            backgroundColor={ '#fff'}
            containerStyle={{ borderBottomColor: '#fff'}}
            rightComponent={<Button
              title= 'LOGOUT'
              type='solid'
              raised= {true}
              buttonStyle={{width: 125, height: 40, backgroundColor: 'rgb(115, 57, 244)', shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.6,
              shadowRadius: 2,
              elevation: 5}}
              titleStyle={{color: 'white', fontSize: 20}}
              containerStyle={{width: 125, height: 40, marginRight: '15%'}}
              onPress={this.handleLogout}
            />}
          />
          <LinearGradient colors={['rgb(2, 2, 85)', 'rgb(2, 2, 85)']} style={{margin: 15, height: 150, borderWidth: 1,
            borderColor: 'transparent',
            borderRadius: 10,
            height: 130,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 10,
            paddingTop: 0}}>
          <Header 
            leftComponent={{text: `${this.props.userId}`, style:{color: '#fff', fontSize: 50, marginTop: 0, paddingTop: 0, fontWeight: '900', textTransform: 'capitalize'}}}
            leftContainerStyle={{flex: 4}}
            backgroundColor={ 'transparent'}
            containerStyle={{ marginTop: -10, paddingTop: 0, paddingRight: 20, backgroundColor: 'transparent', height: 150, paddingTop: 0}}
            rightComponent={{icon: 'place', color: '#fff', size: 60, underlayColor:'rgb(2, 2, 85)', onPress: this.setUserLocation, style:{marginRight: 20, marginTop: 0, paddingTop: 0}}}
            rightContainerStyle={{flex: 2}}
          />
          </LinearGradient>
          <View style={styles.itemListContainer}>
            <ListItem
            style={[styles.listItem]}
              key="item-1"
              leftIcon={
              <Icon 
                name="stethoscope"
                type="font-awesome"
                color="#fc7b9b"
                size= {55}
                />
              }
              containerStyle={{backgroundColor: 'transparent'}}
              title="Dentist Appointment"
              titleStyle={{fontSize: 28, fontWeight: '900', color:"#fc7b9b"}}
              subtitle="May 11, 2019 10:00 AM"
              subtitleStyle={{fontSize: 20}}
            />  
              {
                this.props.notifications.map((item, i) => (
            <ListItem 
              key = {"key-"+ i}
              style={styles.listItem}
              leftIcon={
                item.category == 'Health'?
              <Icon 
                name="stethoscope"
                type="font-awesome"
                color="#fc7b9b"
                size= {55}
                /> 
              : item.category == 'Social'?
              <Icon 
                name="group"
                type="material-icon"
                color="#4f8ff7"
                size= {55}
                /> 
                : item.category == 'Tasks'?
                <Icon 
                name="event-note"
                type="material-icon"
                color="#86e884"
                size= {55}
                /> :
                item.category == 'Custom'?
                <Icon 
                name="favorite-border"
                type="material-icon"
                color="rgb(255, 174, 68)"
                size= {55}
                /> : ''
              }
              title= {item.message}
              titleStyle={[{fontSize: 27, fontWeight: '900'}, styles[item.category]]}
              subtitle= {moment(Number(item.time)).format('LLL')}
              subtitleStyle={{fontSize: 20}}
            /> 
            ))
            }
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

function mapStateToProps(appState) {
  return {
    notifications: appState.notifications,
    userId: appState.user,
    address: appState.address,
    radius: appState.radius
  }
}

export default connect(mapStateToProps)(HomeScreen)

TaskManager.defineTask('currentLoc', ({ data, error }) => {
  if (error) {
    console.log("Error!", error.message)
    return;
  }
  if (data){
    const { locations } = data;

    const load = async () => {
      let user = ''
      try {
        user = await AsyncStorage.getItem('user')
        getNotifications(user)
        getUserLocation(locations, user)
        getGeofence(user)
        console.log(user)
      } catch (e) {
        console.error('Failed to load name.')
      }
      return user;
    }

    load()
  }
})

TaskManager.defineTask('geofence', ({ data: { eventType, region }, error }) => {
  if (error) {
    return;
  }
  if(region){
    // console.log(region)
  }
  if (eventType === Location.GeofencingEventType.Exit) {
    const load = async () => {
      let user = ''
      try {
        user = await AsyncStorage.getItem('user')
        geoFencing(user)
      } catch (e) {
        console.error('Failed to load name.')
      }
      return user;
    }

    load()

    console.log("You've left region:", region);
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContainer: {
    marginTop: 0,
  },
  itemListContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    paddingRight: 20,
    paddingLeft: 20
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5
  },
  Health: {
    color: '#fc7b9b'
  },
  Social: {
    color: '#4f8ff7'
  },
  Tasks: {
    color: '#86e884'
  },
  Custom: {
    color: 'rgb(255, 174, 68)'
  }
})