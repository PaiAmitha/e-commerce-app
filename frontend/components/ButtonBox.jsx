import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

export default function ButtonBox({icon, text, handler,reverse=false, loading=false}) {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      style={{
        backgroundColor: reverse? colors.color3 : colors.color1,
        height:80,
        width:80,
        borderRadius:20,
        alignItems:'center',
      }}
      onPress={() => handler(text)}
      disabled={loading}>

        <Avatar.Icon 
          size={50}
          color={colors.color2}
          style={{backgroundColor:reverse ? colors.color3 : colors.color1}}
          icon={icon}/>

          <Text style={{
            color: colors.color2,
          }}>{text}</Text>
    </TouchableOpacity>
  )
}