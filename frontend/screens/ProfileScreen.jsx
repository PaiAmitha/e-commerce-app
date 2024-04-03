import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'

export default function ProfileScreen({navigation}) {

    const [avatar, setAvatar] = useState(null);
  return (
    <View style={defaultStyle}>
        {/* Heading */}
        <View style={{
            marginBottom:20,
        }}>
            <Text style={styles.heading}>My Profile</Text>
        </View>

        {/* Loading */}
        <View style={styles.container}>
            <Avatar.Image 
                size={100} 
                style={{backgroundColor:colors.color2}}
                source={{
                    uri:avatar
                }} />
            <TouchableOpacity onPress={() => navigation.navigate("Camera",{updateProfile : true})}>
                <Button>Change Photo</Button>
            </TouchableOpacity>
        </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"500",
        textAlign:"center",
        backgroundColor:colors.color2,
        color:colors.color1,
        padding:5,
        borderRadius:10,
        top:10,
    },
    container : {
        elevation:7,
        backgroundColor:colors.color1,
        padding:30,
        borderRadius:10,
        alignItems:"center",
    }
}
)