import React from 'react';
import { Text, View, Button, Alert, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Name from '../image/nameOrange.png'
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();

const SignIn = ({navigation}) => {
    console.log(navigation)
    return(
        <ScrollView>
            <View style={styleSign.mainView}>
                <View style={styleSign.form}>
                    <View style={styleSign.viewForm}>
                        <Text style={styleSign.txtForm}>Endereço de e-mail</Text>
                        <TextInput style={styleSign.input}/>
                        <Text style={styleSign.txtForm}>Senha</Text>
                        <TextInput secureTextEntry={true} style={styleSign.input}/>
                        <Text style={styleSign.txtForm, {color: '#FA4A0C', fontWeight: 'bold', marginTop: 30}}>Esqueceu sua senha?</Text>
                    </View>
                    <TouchableOpacity style={styleSign.btnEnter} onPress={() => navigation.push("Home")}>
                        <Text style={{fontSize: 17, fontWeight: '700', color: '#FFF'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styleSign = StyleSheet.create({
    mainView:{
        backgroundColor: '#F2F2F2',
        height: '100%',
        // paddingHorizontal: 10,
        // paddingVertical: 10
    },
    viewForm:{
        // backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    form:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        // backgroundColor: '#ff0000',
        paddingHorizontal: 70,
        paddingVertical: 100
    },
    txtForm:{
        fontSize: 15,
        color: '#c0c0c0',
        fontWeight: '700'
    },
    input:{
        height: 50,
        borderWidth: 1,
        // borderColor: '#000',
        fontSize: 17,
        padding: 0,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#a1a1a1'
    },
    btnEnter:{
        backgroundColor: '#FA4A0C',
        width: '100%',
        height: 70,
        paddingVertical: 25,
        borderRadius: 30,
        alignItems: 'center',
        // marginBottom: -90,
        // position: 'relative'
    }
})

export default SignIn