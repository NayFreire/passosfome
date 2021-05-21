import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput } from 'react-native';
import Name from '../image/nameOrange.png'
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Tab = createMaterialTopTabNavigator();

const SignIn = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styleSignUp.mainView}>
                <View style={styleSignUp.form}>
                    <View style={styleSignUp.viewForm}>
                        <Text style={styleSignUp.txtForm}>Nome Completo</Text>
                        <TextInput style={styleSignUp.input}/>
                        <Text style={styleSignUp.txtForm}>Telefone</Text>
                        <TextInput style={styleSignUp.input}/>
                        <Text style={styleSignUp.txtForm}>Endereço</Text>
                        <TextInput style={styleSignUp.input}/>
                        <Text style={styleSignUp.txtForm}>E-mail</Text>
                        <TextInput style={styleSignUp.input}/>
                        <Text style={styleSignUp.txtForm}>Senha</Text>
                        <TextInput secureTextEntry={true} style={styleSignUp.input}/>
                        <Text style={styleSignUp.txtForm, {color: '#FA4A0C', fontWeight: 'bold', marginTop: 30}}>Esqueceu sua senha?</Text>
                    </View>
                    <TouchableOpacity style={styleSignUp.btnEnter} onPress={() => navigation.push('Home')}>
                        <Text style={{fontSize: 17, fontWeight: '700', color: '#FFF'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styleSignUp = StyleSheet.create({
    mainView:{
        backgroundColor: '#F2F2F2',
        // height: '100%',
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