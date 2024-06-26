import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function CartItem({
    name, price, stock, qty, imgSrc, index, id, decrementHandler, incrementHandler, navigation
}) {

    //const navigation = useNavigation();
  return (
    <View
        style={{
            flexDirection:'row',
            height:100,
            marginVertical:20,
        }}>
            <View style={{
                width:"40%",
                backgroundColor: index % 2 === 0? colors.color1 : colors.color3,
                borderTopRightRadius:100,
                borderBottomRightRadius:100,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails',{id})}>
                <Image 
                    source = {{
                        uri:imgSrc,
                    }}
                    style={styles.imgstyle}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                width:"40%",
                paddingHorizontal:25,
            }}>
                <Text numberOfLines={1}
                    style={{
                        fontSize:17,
                    }}>
                        {name}
                </Text>
                <Text numberOfLines={1}
                    style={{
                        fontSize:17,
                        fontWeight:"900",
                    }}>
                        ₹{price}
                </Text>
            </View>
            <View style={styles.qtycontainer}>
                <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
                    <Avatar.Icon 
                        icon={'minus'}
                        size={20}
                        style={styles.qtyicon} />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{qty}</Text>
                <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
                    <Avatar.Icon 
                        icon={'plus'}
                        size={20}
                        style={styles.qtyicon} />
                </TouchableOpacity>

            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    qtyicon:{
        borderRadius:5,
        backgroundColor:colors.color5,
        height:25,
        width:25,
    },
    qtyText:{
        backgroundColor: colors.color4,
        height:25,
        width:25,
        textAlignVertical:'center',
        textAlign:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:colors.color5,
    },
    qtycontainer:{
        alignItems:'center',
        width:"20%",
        height:80,
        justifyContent:"space-between",
        alignSelf:'center',
    },
    imgstyle:{
        width:200,
        height:"100%",
        resizeMode:'contain',
        top:"-20%",
        left:"10%",
    },
})