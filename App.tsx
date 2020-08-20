import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator({
      Home: {
        screen: HomeScreen,
      },
    },

    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#48BBEC',
        },
      },
      headerTintColor: '#48BBEC',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
);

export default createAppContainer(RootStack);
