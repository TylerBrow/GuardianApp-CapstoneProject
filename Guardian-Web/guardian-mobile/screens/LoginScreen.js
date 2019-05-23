import React from 'react'
import store from '../store';
import { getNotifications, getGeofence } from '../actions/actions'

import { Button, Input, Header } from 'react-native-elements'

import axios from 'axios'

import {  Font } from 'expo';

import { Constants, Location, Permissions, TaskManager, LinearGradient } from 'expo';

import { connect } from 'react-redux'

import {
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

class LoginScreen extends React.Component{
  state = {
    username: '',
    wrongUserClass: 'white',
    labelWrong: ''
  }

  handleButtonPress = () => {
    axios.get('http://10.68.0.175:3001/api/getuser/' + this.state.username).then(resp => {
      if(resp.data != ''){
        getNotifications(this.state.username)
        store.dispatch({
          type: 'SEND_USER',
          payload: this.state.username
        })
        this.props.navigation.navigate('Home')
      }
      else{
        this.setState({
          wrongUserClass: 'red',
          username: '',
          labelWrong: 'WRONG USERNAME'
        })
      }
    })
  }

  componentWillUnmount(){
    this.setState({
      username: ''
    })
  }
  render(){
    return(
      <View style={styles.loginContainer}>
      <Header
            leftComponent={{text: 'Guardian', style:{color: 'rgb(115, 57, 244)', fontSize: 30, marginLeft: 10, fontFamily:'Merienda-bold'}}}
            leftContainerStyle={{flex: 4}}
            backgroundColor={ 'rgb(2, 2, 85)'}
            containerStyle={{ borderBottomColor: 'transparent', height: 100}}
          />
        <Input
          placeholder='ENTER USERNAME'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          label={this.state.labelWrong}
          labelStyle={{color: `${this.state.wrongUserClass}`}}
          inputStyle={{ paddingLeft: 20, borderRadius: 3, borderBottomWidth: -3, borderBottomColor: 'transparent', height: 60, fontSize: 25, backgroundColor: `${this.state.wrongUserClass}`}}
          containerStyle={{width: '78%', marginLeft: '12%', marginTop: 250, marginBottom: 30, height: 60}}
        />
        <Button
          title= 'Sign in'
          type='solid'
          raised= {true}
          buttonStyle={{width: 300, height: 65, backgroundColor: 'white'}}
          titleStyle={{color: 'black', fontSize: 30, fontFamily:'Merienda-bold', textAlign: 'center'}}
          containerStyle={{width: '74%', height: 65, marginLeft: '14%'}}
          onPress={this.handleButtonPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'rgb(2, 2, 85)',
    paddingTop: 10,
    width: '100%',
    height: '100%'
  }
})

export default LoginScreen