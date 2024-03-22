import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyle } from '../styles/styles'

export default function HomeScreen() {
  return (
    <View style={defaultStyle}>

        <View>
            <Text style={{ fontSize: 25}}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900"}}>Products</Text>
        </View>
    </View>
  )
}