import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/LoginScreen'

import HomeScreen from '../screens/HomeScreen';

export default createAppContainer(createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
}));