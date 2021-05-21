import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from './src/components/StartScreen'
import SignScreen from './src/components/SignScreen'
import HomeScreen from './src/components/HomeScreen'
import SignIn from './src/components/SignIn'
import SignUp from './src/components/SignUp'
const navigationRef = React.createRef();

let Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} /> 
        <Stack.Screen name="Sign" component={SignScreen} /> 
        <Stack.Screen name="Home" component={HomeScreen} />        
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
