import * as React from 'react';
import { Text, View, Button, Alert, Image, StyleSheet } from 'react-native';
import Name from '../image/nameOrange.png'
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignInTab from './SignIn'
import SignUpTab from './SignUp'

const Tab = createMaterialTopTabNavigator();

const navigationRef = React.createRef();

function navigate(name, params) {
    navigationRef.current && navigationRef.current.navigate(name, params);
}

const SignIn = () => {
    return (
        <SignInTab />
    );
}

const SignUp = () =>{
    return (
        <SignUpTab />
    );
}

const SignScreen = ({...navigation}) => {
    return (
        <NavigationContainer independent={true}>
            <View style={styleSign.viewName}>
                <Image source={Name} />
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Entrar" component={SignIn} />
                <Tab.Screen name="Cadastrar" component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>                       
    );
}

const styleSign = StyleSheet.create({
    mainView:{
        backgroundColor: '#F2F2F2',
        height: '100%',
        // paddingHorizontal: 10,
        paddingVertical: 10
    },
    viewName:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 414,
        height: 260,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30
    },    
    viewTabs: {
        backgroundColor: '#f1f1f1',
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        width: '100%', 
        alignSelf: 'flex-end'
    }
})

export default SignScreen