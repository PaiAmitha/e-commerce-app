import { View, Text,  } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../styles/styles'

export default function Loader() {
  return (
    <ActivityIndicator
        style={{
            top:"50%",
            position:'absolute',
            alignSelf:'center',
        }}
        size={50}
        color={colors.color1}/>
  )
}