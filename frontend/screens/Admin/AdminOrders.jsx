import { View, Text } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../styles/styles'

export default function AdminOrders() {
  return (
    <View style={{
        ...defaultStyle,
        backgroundColor :colors.color5,
    }}>
      <Text>AdminOrders</Text>
    </View>
  )
}