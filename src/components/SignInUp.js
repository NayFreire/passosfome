import React from 'react';
import { Text, View, Button, Alert, Image, StyleSheet } from 'react-native';
import Name from '../image/nameOrange.png'
import { StatusBar } from 'expo-status-bar';

const StartScreen = ({navigation}) => {
    return(
        <View style={styleSign.mainView}>
            <View style={styleSign.viewName}>
                <Image source={Name} />
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', alignSelf: 'flex-end'}}>
                    <Text>Entrar</Text>
                    <Text>Cadastrar</Text>
                </View>
            </View>
        </View>
    )
}

const styleSign = StyleSheet.create({
    viewName:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 414,
        height: 287,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30
    },
    mainView:{
        backgroundColor: '#F2F2F2',
        height: '100%',
        // paddingHorizontal: 10,
        paddingVertical: 10
    },
})

export default StartScreen