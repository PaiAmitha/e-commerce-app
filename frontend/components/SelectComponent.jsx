import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'

export default function SelectComponent({
    visible, 
    setVisible, 
    setCategoryID, 
    setCategory,
    categories = [],
}) {
  return (
    visible && ( 
    <View style={StyleSheet.container}>
        
        <TouchableOpacity>
            <Avatar.Icon
                icon={"close"}
                size={28}
                style={{
                    alignSelf:'flex-end',
                    backgroundColor:colors.color1,
                }} />
        </TouchableOpacity>
      </View>)
  )
}

const styles = StyleSheet.create({
    container:{

    }
})