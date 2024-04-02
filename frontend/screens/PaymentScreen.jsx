import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'

export default function PaymentScreen({ navigation, route }) {

    const [ paymentMethod, setPaymentMethod] = useState("COD");
    //console.log(paymentMethod);
    //const navigation = useNavigation();
    const isAuthenticated = false;

    const redirectToLogin = () => {
        navigation.navigate('Login');
    }

    const codHandler = () => {
        
    }

    const onlineHandler = () => {
        
    }


  return (
    <View style={defaultStyle}>
        <Header back={true}/>
        <Heading text1='Payment' text2='Method' />

        <View style={styles.container}>
            <RadioButton.Group
                onValueChange={setPaymentMethod}
                value={paymentMethod}>
                <View style={styles.radioStyle}>
                    <Text style={styles.radioStyleText}>Cash on Delivery</Text>
                    <RadioButton color={colors.color2} value={"COD"}/>
                </View>
                <View style={styles.radioStyle}>
                    <Text style={styles.radioStyleText}>Online</Text>
                    <RadioButton color={colors.color2} value={"Online"}/>
                </View>
            </RadioButton.Group>
        </View>

        <TouchableOpacity
            onPress={
                !isAuthenticated ? redirectToLogin : paymentMethod==="COD" ? codHandler : onlineHandler
            }>
            <Button style={styles.btn} textColor={colors.color2}
                icon={
                    paymentMethod === "COD" ? "check-circle" : "credit-card"
                } >
                {
                    paymentMethod === "COD"? "Place Order" : "Pay"
                }
            </Button>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.color1,
        padding:30,
        borderRadius:10,
        marginVertical:20,
        //flex:1,
        justifyContent:"center",
    },
    radioStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:5,
    },
    radioStyleText:{
        fontWeight:"600",
        fontSize:18,
        //textTransform:"uppercase",
        color: colors.color2,
    },
    btn:{
        backgroundColor: colors.color3,
        borderRadius:100,
        margin:10,
        padding:5,
    }
});