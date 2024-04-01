import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { cartItems } from './CartScreen'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

export default function ConfirmOrderScreen() {

    const itemsPrice = 4500;
    const shippingCharges  = 200;
    const tax = 0.18 * itemsPrice;
    const totalAmount = itemsPrice + shippingCharges + tax ;

    const navigation = useNavigation();

  return (
    <View style={defaultStyle}>
        <Header back={true}/>
        <Heading containerStyle={{
            //marginTop:-20,
        }} text1='Confirm' text2='Order' />

        <View style={{
            paddingVertical:20,
            flex:1,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    cartItems.map(i => (
                        <ConfirmOrderItem 
                            key={i.product}
                            image={i.image}
                            name={i.name}
                            quantity={i.quantity}
                            price={i.price}/>
                    ))
                }
            </ScrollView>
        </View>
        <PriceTag heading={'Subtotal'} value={itemsPrice}/>
        <PriceTag heading={'Shipping Charges'} value={shippingCharges}/>
        <PriceTag heading={'Tax'} value={tax}/>
        <PriceTag heading={'Total Amount'} value={totalAmount}/>

        <TouchableOpacity onPress={() => navigation.navigate('Payment',{
            itemsPrice, shippingCharges, tax, totalAmount
        })}>
            <Button style={{
                backgroundColor: colors.color1,
                borderRadius:100,
                padding: 5,
                margin:10,
            }}
                textColor={colors.color2}
                >Place Order and Pay</Button>
        </TouchableOpacity>
    </View>
  )
}

const PriceTag = ({heading, value}) => (
    <View style={{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginVertical:5,
    }}> 
        <Text style={{ 
            fontWeight: "800", 
            color: heading === 'Total Amount' ? 'maroon' : 'black', 
            fontSize: heading === 'Total Amount' ? 18 : 14  }}>
      {heading}
    </Text>
    <Text style={{
        fontWeight: heading === 'Total Amount' ? "bold" : "normal",
        color: heading === 'Total Amount' ? 'maroon' : 'black',
        fontSize: heading === 'Total Amount' ? 18 : 14 // Adjust font size as needed
    }}>
      ₹{value}
    </Text>

    </View>
)