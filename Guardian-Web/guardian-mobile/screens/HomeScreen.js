import React from 'react'
import { getUserLocation, getNotifications, getNotificationsBack } from '../actions/actions'

import { ListItem, Header, Icon } from 'react-native-elements'

import { Notifications } from 'expo';

import { BackgroundFetch, Font } from 'expo';

import { Constants, Location, Permissions, TaskManager, LinearGradient } from 'expo';

import { connect } from 'react-redux'

import moment from 'moment'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
  SectionList
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    userLocation: null
  }
 
    //this is the function that will be in onGetLocation
    setUserLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }
        })
      })
    }

    componentDidMount() {
      this._getLocationAsync()

      // this.sendNotification()

      // getNotifications()

      // getNotificationsBack()
      
    }

    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
      await Location.startLocationUpdatesAsync('currentLoc', {accuracy : Location.Accuracy.Highest, timeInterval: 8000, distanceInterval: 0, showsBackgroundLocationIndicator: true})
      console.log('enabled')

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

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.viewContainer}>
      {/* you add the className as a prop example above */}
          <Header
            leftComponent={{text: 'Guardian', style:{color: 'rgba(115, 57, 244, .7)', fontSize: 30, marginLeft: 10, fontFamily:'Merienda-bold'}}}
            leftContainerStyle={{flex: 3}}
            backgroundColor={ '#fff'}
            containerStyle={{ borderBottomColor: '#fff'}}
          />
          <LinearGradient colors={['rgba(115,57,244,1)', 'rgba(115,57,204,1)']} style={{margin: 15, height: 150, borderWidth: 1,
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
            leftComponent={{text: 'CRUZ', style:{color: '#fff', fontSize: 50, marginTop: 0, paddingTop: 0, fontWeight: '900'}}}
            leftContainerStyle={{flex: 4}}
            backgroundColor={ 'transparent'}
            containerStyle={{ marginTop: -10, paddingTop: 0, paddingRight: 20, backgroundColor: 'transparent', height: 150, paddingTop: 0}}
            rightComponent={{icon: 'place', color: '#fff', size: 60, style:{marginRight: 20, marginTop: 0, paddingTop: 0}}}
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
              // key="item-2"
              leftIcon={
              <Icon 
                name="stethoscope"
                type="font-awesome"
                color="#fc7b9b"
                size= {55}
                />}
              title= {item.message}
              titleStyle={{fontSize: 27, fontWeight: '900', color:"#fc7b9b"}}
              subtitle={`${item.date} ${item.day}`}
              subtitleStyle={{fontSize: 20}}
            /> 
            ))
            }
            <ListItem 
              style={styles.listItem}
              key="item-3"
              leftIcon={
              <Icon 
                name="group"
                type="material-icon"
                color="#4f8ff7"
                size= {55}
                /> 
              }
              title="Meeting"
              titleStyle={{fontSize: 28, fontWeight: '900', color:"#4f8ff7"}}
              subtitle="May 28, 2019 2:30 PM"
              subtitleStyle={{fontSize: 20}}
            /> 
            <ListItem 
              style={styles.listItem}
              key="item-4"
              leftIcon={
              <Icon 
                name="event-note"
                type="material-icon"
                color="#86e884"
                size= {55}
                /> 
              }
              title="Clean Kitchen"
              titleStyle={{fontSize: 28, fontWeight: '900', color: '#86e884'}}
              subtitle="May 30, 2019 10:30 AM"
              subtitleStyle={{fontSize: 20}}
            />
            <ListItem 
              style={styles.listItem}
              key="item-5"
              leftIcon={
              <Icon 
                name="address-book"
                type="font-awesome"
                size= {55}
                /> 
              }
              title="Meeting"
              titleStyle={{fontSize: 28, fontWeight: '900'}}
              subtitle="May 28, 2019 2:30 PM"
              subtitleStyle={{fontSize: 20}}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  }
}

function mapStateToProps(appState) {
  return {
    notifications: appState.notifications
  }
}

export default connect(mapStateToProps)(HomeScreen)

TaskManager.defineTask('currentLoc', ({ data, error }) => {
  if (error) {
    console.log("Error!", error.message)
    // check `error.message` for more details.
    return;
  }
  if (data){
    const { locations } = data;
    getNotifications()

    // getNotificationsBack()

    getUserLocation(locations)
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
    height: 130,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5
  }
});

// rgb(246,247,249)

// borderBottomWidth: 3,
// borderBottomLeftRadius: 29,
// borderBottomRightRadius: 29, borderBottomColor: 'lightblue', borderWidth: 0.5, borderRightColor: 'transparent', borderLeftColor: 'transparent', borderTopColor: 'transparent'