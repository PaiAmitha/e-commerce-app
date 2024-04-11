import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Loader from '../components/Loader';
import { Headline } from 'react-native-paper'

const orders = [{
    _id:'a',
    shippingInfo:{
        address:'73 easter',
        city:'Bangalore',
        country:'India',
        pinCode: 560066,
    },
    createdAt:'15-12-2023T444',
    orderStatus:'Processing',
    paymentMethod:'COD',
    totalAmount:'20000',
},
{
    _id:'b',
    shippingInfo:{
        address:'73 easter',
        city:'Bangalore',
        country:'India',
        pinCode: 560066,
    },
    createdAt:'15-12-2023T444',
    orderStatus:'Processing',
    paymentMethod:'ONLINE',
    totalAmount:'10000',
}
]

export default function OrdersScreen() {

    const loading = false;
  return (
    <View style={{
        ...defaultStyle,
        backgroundColor: colors.color2,
    }}>
        <Header back={true} />
        {/* Heading */}
        <View style={{
            marginBottom:20,
            //marginTop:50,
        }}>
            <Text style={styles.heading}>Orders</Text>
        </View>
        {
            loading? <Loader/> : (
                <View style={{
                    padding:10,
                    flex:1,
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            orders.length > 0 ? (null) : <Headline style={{textAlign:'center'}}>No Orders Yet..</Headline>
                        }
                    </ScrollView>
                </View>
            )
        }
      
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"500",
        textAlign:"center",
        backgroundColor:colors.color2,
        color:colors.color1,
        padding:5,
        borderRadius:10,
        top:10,
    },
});