import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import Toast from 'react-native-toast-message'
import CartScreen from './screens/CartScreen'

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
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Group>
        </Stack.Navigator>
        <Toast position='bottom' bottomOffset={50}/>
    </NavigationContainer>
  )
}

export default Main