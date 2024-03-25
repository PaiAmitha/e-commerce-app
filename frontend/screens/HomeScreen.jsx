import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'

export default function HomeScreen() {

const categories = [ { category:"Nice", _id:'01' },
{ category:"Football", _id:'02' },
{ category:"Men", _id:'03' },
{ category:"Women", _id:'04' },
{ category:"Helicopter", _id:'05' },
{ category:"Dummy", _id:'06' },
{ category:"Dummy2", _id:'07' } ];

const [category, setCategory] = useState("");

const categoryButtonHandler = (id) => {
    setCategory(id);
}
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
        {/* Categories */}
        <View 
        style={{
            flexDirection:"row",
            height:80,
            
        }}>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                alignItems:"center",
            }}>
            {
                categories.map((item, index ) => (
                    <Button 
                    key={item._id}
                    style={{
                        backgroundColor: category === item._id? colors.color1 : colors.color5,
                        borderRadius : 100,
                        margin : 5,
                    }}
                    onPress={() => categoryButtonHandler(item._id)}>
                        <Text style={{
                            fontSize:12,
                            color: category === item._id? colors.color2 :'gray'
                        }}>{item.category}</Text>
                    </Button>
                ))
            }
            </ScrollView>
        </View>
        {/* Products */}
        
    </View>
  ) }
