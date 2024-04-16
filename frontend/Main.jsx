import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import Toast from 'react-native-toast-message'
import CartScreen from './screens/CartScreen'
import ConfirmOrderScreen from './screens/ConfirmOrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import LoginScreen from './screens/LoginScreen'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import VerifyScreen from './screens/VerifyScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProfileScreen from './screens/ProfileScreen'
import UpdateProfileScreen from './screens/UpdateProfileScreen'
import ChangePasswordScreen from './screens/ChangePasswordScreen'
import OrdersScreen from './screens/OrdersScreen'
import AdminPanel from './screens/Admin/AdminPanel'
import Categories from './screens/Admin/Categories'
import AdminOrders from './screens/Admin/AdminOrders'
import UpdateProduct from './screens/Admin/UpdateProduct'
import NewProduct from './screens/Admin/NewProduct'
import ProductImages from './screens/Admin/ProductImages'

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
                <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
                <Stack.Screen name="Orders" component={OrdersScreen} />
                
                {/* Password Resetting Route */}
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Verify" component={VerifyScreen} />

                {/* Admin Routes */}
                <Stack.Screen name="AdminPanel" component={AdminPanel} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="AdminOrders" component={AdminOrders} />
                <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
                <Stack.Screen name="NewProduct" component={NewProduct} />
                <Stack.Screen name="ProductImages" component={ProductImages} />
                
            </Stack.Group>
        </Stack.Navigator>
        <Toast position='bottom' bottomOffset={50}/>
    </NavigationContainer>
  )
}

export default Main