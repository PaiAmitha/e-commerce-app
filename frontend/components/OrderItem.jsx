import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

export default function OrderItem({
    id, 
    price, 
    address, 
    orderedOn, 
    status, 
    paymentMethod, 
    updateHandler,
    admin = false,
    loading,
    i=0,
}) {
  return (
    <View style={{
        ...styles.container,
        //backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
        backgroundColor : colors.color2,
    }}>
      <Text style={{
        ...styles.txt,
        backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
        }}>ID - #{id}</Text>
      <TextBox title={"Address"} value={address} i={i}/>
      <TextBox title={"Ordered On"} value={orderedOn} i={i}/>
      <TextBox title={"Price"} value={price} i={i}/>
      <TextBox title={"Status"} value={status} i={i}/>
      <TextBox title={"Payment Method"} value={paymentMethod} i={i}/>

      {
        admin && (
          <Button 
            icon={'update'}
            mode='outlined'
            textColor={i % 2 ===0? colors.color3 : colors.color1}
            style={{
              width:120,
              alignSelf:'center',
              marginTop:10,
              
            }}
            onPress={() => updateHandler(id)}
            loading={loading}
            disabled={loading} >Update</Button>
        )
      }
    </View>
  )
}

const TextBox = ({title,value, i}) => (
  <Text style={{
    marginVertical:6,
    color: i % 2 === 0? colors.color1 : colors.color3,
  }}>
    <Text style={{
      fontWeight:"900",
    }}>
      {title} - 
    </Text>
    {title === 'Price' ? "₹" : ""}
    {value}
  </Text>

)

const styles = StyleSheet.create({
    container:{
        padding:20,
        borderRadius:10,
        marginVertical:10,
        elevation:5,
    },
    txt:{
        color: colors.color2,
        fontSize:16,
        fontWeight:"900",
        marginHorizontal:-20,
        marginTop: -20,
        marginBottom: 10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    }
})