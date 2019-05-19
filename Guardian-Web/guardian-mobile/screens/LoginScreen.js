import React from 'react'
import { getUserLocation, getNotifications, getNotificationsBack } from '../actions/actions'

import { ListItem, Header, Icon } from 'react-native-elements'


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
  Button,
  SafeAreaView,
  SectionList
} from 'react-native';

import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

class LoginScreen extends React.Component{
  render(){
    return(
      <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <Button
          title= 'Sign'
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
      </SafeAreaView>
    )
  }
}

export default LoginScreen