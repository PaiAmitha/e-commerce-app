import { View, Text , StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader';
import { Avatar, Button, TextInput } from 'react-native-paper';
import { inputOptions } from './Categories';
import SelectComponent from '../../components/SelectComponent';

export default function NewProduct({navigation, route}) {

    const loading = false;
    //const loadingOther = false;

    console.log(route.params);

    //const [id] = useState(route.params.id);

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Laptop");
    const [categoryID, setCategoryID] = useState("");
    const [categories, setCategories] = useState([
        {_id:"aa", category:"Laptop"},
        {_id:"bb", category:"Jeans"},
        {_id:"cc", category:"Tops"},]);
    const [visible, setVisible] = useState(false);

    const submitHandler = () => {
        console.log(name,description, price, stock, categoryID )
    };

  return (
    <>
    <View style={{
        ...defaultStyle,
    }}>
        <Header back={true} />

       {/* Heading */}
    <View style={{
        marginBottom:20,
    }}>
        <Text style={styles.heading}>New Product</Text>
    </View>

    {
        loading? <Loader/> : (
            <ScrollView style={{
                padding:20,
                elevation:10,
                borderRadius:10,
                backgroundColor: colors.color3,
            }}>
                <View style={{
                    justifyContent:'center',
                    height:650,
                }}>
                    <View
                        style={{
                            width:80,
                            height:80,
                            alignSelf:'center',
                            marginBottom:20,
                        }}>
                            <Avatar.Image
                                size={80}
                                style={{
                                    backgroundColor: colors.color1,
                                }}
                                source={{
                                    uri: image ? image : null ,
                                }}/>
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Camera", { newProduct : true })}>
                            
                            <Avatar.Icon
                                icon={'camera'}
                                size={25}
                                color={colors.color3}
                                style={{
                                    backgroundColor: colors.color2,
                                    position:'absolute',
                                    bottom:0,
                                    right:0,
                                }} />

                        </TouchableOpacity>

                    </View>
                   

                        <TextInput
                        {...inputOptions}
                        placeholder='Name'
                        value={name}
                        onChangeText={setName}/>

                        <TextInput
                        {...inputOptions}
                        placeholder='Description'
                        value={description}
                        onChangeText={setDescription}/>

                        <TextInput
                        {...inputOptions}
                        placeholder='Price'
                        keyboardType='number-pad'
                        value={price}
                        onChangeText={setPrice}/>

                        <TextInput
                        {...inputOptions}
                        placeholder='Stock'
                        value={stock}
                        onChangeText={setStock}/>

                        <Text style={{
                            ...inputStyling,
                            textAlign:'center',
                            textAlignVertical:'center',
                            borderRadius:3,
                        }}
                        onPress={() => setVisible(true)}>{category}</Text>

                    <Button style={{
                        backgroundColor: colors.color1,
                        margin:10,
                        padding:6,
                    }}
                    onPress={submitHandler}
                    loading={loading}
                    disabled={loading}
                    textColor={colors.color2}>Create</Button>
                </View>
            </ScrollView>
        )
    }
    </View>
    <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}/>
    </>
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
});