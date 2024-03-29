import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'

export default function Heading({ text1="Our", text2="Products", containerStyle}) {
  return (
<View style={{
        paddingTop:60,
        marginLeft:25,
    }}>
        <Text style={{ fontSize : 25}}>{text1}</Text>
        <Text style={{ fontSize : 25, fontWeight : "900", color:colors.color1}}>{text2}</Text>

    </View>
  )
}