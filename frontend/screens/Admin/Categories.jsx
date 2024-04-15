import { View, Text, StyleSheet, ScrollView, TouchableNativeFeedbackBase, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import { Avatar, Button, TextInput } from 'react-native-paper';

const categories = [{
    name:"Laptop",
    _id:"a",
},
{
    name:"Laptop",
    _id:"b",
},
{
    name:"Laptop",
    _id:"c",
},
{
    name:"Laptop",
    _id:"d",
},
];

export const inputOptions={
    style:inputStyling,
    mode:"outline",
    activeOutlineColor:colors.color1,
};
export default function Categories() {
    const deleteHandler = (id) => {
        console.log("Deleting Category : ", id)
    }

    const [category, setCategory] = useState("");

    const submitHandler = () => {};

    const loading = false;

  return (
    <View style={defaultStyle}>
    <Header back={true}/>
    {/* Heading */}
    <View style={{
        marginBottom:20,
    }}>
        <Text style={styles.heading}>Categories</Text>
    </View>
    <ScrollView style={{
        marginBottom:20,
    }}>
        <View style={{
            backgroundColor: colors.color2,
            padding:20,
            minHeight:400,
        }}>
            {
                categories.map(i=> (
                    <CategoryCard name={i.name} id={i._id} key={i._id} deleteHandler={deleteHandler} />
                ))
            }
        </View>

    </ScrollView>
    <View style={styles.container}>
        <TextInput
            {...inputOptions}
            placeholder='Category'
            value={category}
            onChangeText={setCategory}/>
        <Button 
            textColor={colors.color2}
            style={{
                backgroundColor: colors.color1,
                margin:15,
                padding:4,
            }}
            loading={loading}
            disabled={!category}
            onPress={submitHandler}>Add</Button>
    </View>
    </View>
  )
}

const CategoryCard = ({name,id, deleteHandler}) => <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity
        onPress={() => deleteHandler(id)}>
        <Avatar.Icon 
            icon={"delete"} 
            size={30}
            style={{
                backgroundColor:colors.color1,
            }} />
    </TouchableOpacity>
</View>;

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
    cardContainer : {
        backgroundColor:colors.color2,
        elevation:5,
        margin:10,
        padding:15,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,

    },
    cardText:{
        fontWeight:'600',
        textTransform:"uppercase",
        letterSpacing:1,
    },
    container:{
        padding:20,
        elevation:10,
        borderRadius:10,
        backgroundColor:colors.color2,
    }
}
)