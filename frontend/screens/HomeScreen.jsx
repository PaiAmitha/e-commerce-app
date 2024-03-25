import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultStyle, colors } from '../styles/styles'
import Header from '../components/Header'
import { Avatar } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View style={defaultStyle}>
        <Header/>
        <View style={{
            paddingTop: 50,
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
            {/*Heading*/}
        <View>
            <Text style={{ fontSize: 20, marginTop:10}}>Our</Text>
            <Text style={{ fontSize: 22, fontWeight: "900", color: colors.color1}}>Products</Text>
        </View>

         {/*Search Bar*/}
         <View>
            <TouchableOpacity>
                <Avatar.Icon icon={"magnify"} color={"gray"} size={40}
                    style ={{ backgroundColor:colors.color2, elevation: 12, marginTop:20}}/>
            </TouchableOpacity>
         </View>
        </View>

    </View>
  )
}