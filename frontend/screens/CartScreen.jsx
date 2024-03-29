import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'

const cartItems = [{
  name:"Gojo T-Shirt",
  image:"https://th.bing.com/th/id/OIP.CXUrNZzKJrN1C4yYe95keQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  product:"a",
  stock:10,
  price:2000,
  quantity:2,
},
{
  name:"HeadPhones",
  image:"https://th.bing.com/th/id/OIP.3Lwp2zMqdI-R7LbkXaXxrwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  product:"b",
  stock:10,
  price:4000,
  quantity:2,
},
]

export default function CartScreen() {

  const incrementHandler = () => {

  }

  const decrementHandler = () => {

  }


  return (
    <View style={{
        ...defaultStyle,
        padding:0,
    }}>
        {/* Header */}
        <Header emptyCart={true} back={true}/>

        {/* Heading */}
        <Heading text1="Shopping" text2="Cart"/>

        <View style={{
          paddingVertical:20,
          flex:1,
        }}>

          <ScrollView>
            {
              cartItems.map((i, index) => (
                <CartItem 
                  key ={i.product} 
                  id={i.product} 
                  name={i.name} 
                  stock={i.stock} 
                  price={i.price}
                  imgSrc={i.image}
                  index={index}
                  qty={i.quantity}
                  incrementHandler={incrementHandler}
                  decrementHandler={decrementHandler} />
              ))
            }
          </ScrollView>

         </View>

          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:35,
          }}>

            <Text>5 Items</Text>
            <Text>₹500</Text>
          </View>

          <TouchableOpacity>
            <Button
              style={{
                backgroundColor: colors.color3,
                borderRadius : 100,
                padding:5,
                margin:30,
              }}
              icon={"cart"}
              textColor='white'>Checkout</Button>
          </TouchableOpacity>
       
    </View>
  )
}
