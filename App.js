import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from './src/components/StartScreen'
import SignInUp from './src/components/SignInUp'

let Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} /> 
        <Stack.Screen name="Sign" component={SignInUp} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA4A0C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    backgroundColor: '#c1c1c1',
    // color: '#fff'
  }
});
