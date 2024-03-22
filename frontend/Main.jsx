import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerShown:false,
        }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main