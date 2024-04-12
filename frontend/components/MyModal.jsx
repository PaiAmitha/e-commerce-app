import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'


export default function MyModal({
    id,
    deleteHandler,
    navigate,
    setOpenModal,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{
            position:'absolute',
            top:10,
            right:10,
        }}
        onPress={() => setOpenModal(false)}>
        <Avatar.Icon
            icon={'close'}
            size={20}
            style={{
                backgroundColor: colors.color1,
            }} />
      </TouchableOpacity>
      <Text 
        style={styles.text}
        onPress={() => navigate.navigate('UpdateProduct', {id})} >Edit
    </Text>
    <Button 
        textColor={colors.color1}
        onPress={() => deleteHandler(id)} >Delete</Button>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        elevation:10,
        width:200,
        height:100,
        alignSelf:"center",
        justifyContent:"center",
        zIndex:100,
        backgroundColor:colors.color2,
        padding:20,
        borderRadius:10,
    },
    text :{
        fontWeight:"900",
        textAlign:"center",
        textTransform:"uppercase",
    }
})