import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';


const categories = [ { category:"Nice", _id:'01' },
{ category:"Football", _id:'02' },
{ category:"Men", _id:'03' },
{ category:"Women", _id:'04' },
{ category:"Helicopter", _id:'05' },
{ category:"Dummy", _id:'06' },
{ category:"Dummy2", _id:'07' } ];

const products = [{
    price:2300,
    name:"Product1",
    _id:'a',
    images:[
        {
            url:"https://th.bing.com/th/id/OIP.aNgg50SxpZ_0Mum8V_rBewHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
        }
    ],
    //imgSrc:"https://www.bing.com/ck/a?!&&p=90410d402ea35fc6JmltdHM9MTcxMTIzODQwMCZpZ3VpZD0zMmNlZjNlYy04NzQyLTZiYTItMDJmNS1lN2NmODZlZjZhYTQmaW5zaWQ9NTU5OQ&ptn=3&ver=2&hsh=3&fclid=32cef3ec-8742-6ba2-02f5-e7cf86ef6aa4&u=a1L2ltYWdlcy9zZWFyY2g_cT1jdXRlJTIwaW1hZ2VzJkZPUk09SVFGUkJBJmlkPUEwMzdFREM5MTIxRTkzOEQ1REZCRERDREM4QzJBOEJEMDIwOEZENUM&ntb=1",
}];

export default function HomeScreen() {

const [category, setCategory] = useState("");
const [activeSearch, setActiveSearch] = useState(false);
const [searchQuery, setSearchQuery] = useState("");

const categoryButtonHandler = (id) => {
    setCategory(id);
}
  return (
    <>
    {
        activeSearch && (
            <SearchModal searchQuery = {searchQuery} setSearchQuery={setSearchQuery} 
        setActiveSearch={setActiveSearch} products={products}/>
        )
    }
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
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
                <Avatar.Icon 
                    icon={"magnify"} 
                    color={"gray"} size={40}
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
    </>
  ) }
