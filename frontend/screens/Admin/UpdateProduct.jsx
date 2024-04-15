import { View, Text , StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors, inputStyling } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader';
import { Button, TextInput } from 'react-native-paper';
import { inputOptions } from './Categories';
import SelectComponent from '../../components/SelectComponent';

export default function UpdateProduct({navigation, route}) {

    const loading = false;
    const loadingOther = false;

    console.log(route.params);

    const [id] = useState(route.params.id);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Laptop");
    const [categoryID, setCategoryID] = useState("");
    const [categories, setCategories] = useState([]);
    const [visible, setVisible] = useState(false);

    const submitHandler = () => {};

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
        <Text style={styles.heading}>Update Product</Text>
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
                    <Button 
                    textColor={colors.color1}
                    onPress={() => navigation.navigate("ProductImages",{
                        id,
                        images:[],
                        })}>Manage Images</Button>

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
                    loading={loadingOther}
                    disabled={loadingOther}
                    textColor={colors.color2}>Update</Button>
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