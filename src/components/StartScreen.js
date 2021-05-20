import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StartScreen = ({navigation}) => {
    return(
        <View>
            <View>
                <Text>PF</Text>
                <Text>Passos Fome</Text>
            </View>
            <Button title='Começar Agora' onPress={() => navigation.push('Sign')}></Button>
            <StatusBar style="auto" />
        </View>
    )
}

export default StartScreen