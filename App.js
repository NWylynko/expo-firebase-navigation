import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Database from './Screens/Database';
import Storage from './Screens/Storage';

import './firebase' // this is just to initialise the firebase app

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Database" component={Database} />
        <Tab.Screen name="Storage" component={Storage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}