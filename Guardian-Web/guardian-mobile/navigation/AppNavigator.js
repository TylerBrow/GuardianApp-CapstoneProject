import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/LoginScreen'

export default createAppContainer(createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabNavigator,
}));