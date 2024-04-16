import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import ImageCard from '../../components/ImageCard';
import { Avatar, Button } from 'react-native-paper';

export default function ProductImages({route, navigation}) {

    const [images] = useState(route.params.images);
    const [productId] = useState(route.params.id);
    const [image,setImage] = useState(null);
    const [imageChanged, setImageChanged] = useState(false);

    const loading = false;

    const deleteHandler = (id) => {
        console.log("Image Id :", id);
        console.log("Product Id: ", productId);
    }

    const submitHandler = () => {};


    //const image = null;

   // console.log(route.params);
  return (
    <View style={{
        ...defaultStyle,
        //backgroundColor:colors.color5,
    }}>
        <Header back={true}/>
        <View style={{
            marginBottom:20,
        }}>
            <Text style={styles.heading}>Images</Text>
        </View>
        <ScrollView style={{
            marginBottom:20,
        }}>
            <View style={{
                backgroundColor:colors.color2,
                padding:40,
                minHeight:400,
            }}>
                {
                    images.map(i =>(
                        <ImageCard
                            key={i._id}
                            src={i.url}
                            id={i._id}
                            deleteHandler={deleteHandler}/>
                    ))
                }

            </View>

        </ScrollView>
        <View style={{
            padding:20,
            borderRadius:10,
            backgroundColor:colors.color3,
        }}>
            <Image style={{
                backgroundColor: colors.color2,
                width:100,
                height:100,
                alignSelf:'center',
                resizeMode:'contain',
            }}
            source={{ uri: image}}
            />

            <View style={{
                flexDirection:'row',
                justifyContent:'center',
            }}>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Camera", {updateProduct : true})}>
                    <Avatar.Icon
                        icon={'camera'}
                        size={30}
                        color={colors.color3}
                        style={{
                            backgroundColor:colors.color2,
                            margin:10,
                        }} />
                </TouchableOpacity>

            </View>
            <Button
                style={{
                    backgroundColor: colors.color1,
                    padding:3,
                }}
                textColor={colors.color2}
                loading={loading}
                onPress={submitHandler}
                disabled={!imageChanged}>
                    Add</Button>

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
})