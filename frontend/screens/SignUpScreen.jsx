import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';
import { defaultImg } from '../styles/styles';

export default function SignUpScreen({navigation}) {

    const [avatar,setAvatar] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmP, setConfirmP] = useState("");
    const [confirmPError, setConfirmPError] = useState("");
    const [gender, setGender] = useState("");

    const inputOptions={
        style:inputStyling,
        mode:"outline",
        activeOutlineColor:colors.color1,
    };

    const loading = false;

    const disableBtn = !name || !email || !password || !confirmP || password !== confirmP;


    const handleConfirmPChange = (text) => {
        setConfirmP(text);
        if (password !== text) {
            setConfirmPError("Passwords do not match");
        } else {
            setConfirmPError("");
        }
    };

    const submitHandler = () => {
        if (disableBtn) {
            alert("Please fill in all fields correctly");
            return;
        }
        navigation.navigate('Verify');
    };


  return (
    <>
    <View style={defaultStyle}>

        {/* Heading */}
        <View style={{
            marginBottom:20,
        }}>
            <Text style={styles.heading}>Sign Up</Text>
        </View>

        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{
                padding:20,
                elevation:10,
                borderRadius:10,
                backgroundColor:colors.color2,
            }}>
        <View style={{justifyContent:'center'}}>
            <Avatar.Image 
                style={{
                    alignSelf:'center',
                    backgroundColor:colors.color2,
                }}
                size={80}
                source={{
                    uri: avatar? avatar: defaultImg,
                }}/>
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>
            <TextInput 
                {...inputOptions} 
                placeholder='Name'
                value={name}
                onChangeText={setName} />

            <TextInput 
                {...inputOptions} 
                placeholder='Email ID'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail} />

            <TextInput
                {...inputOptions}
                placeholder='Password'
                secureTextEntry={true}
                value={password} />

            <TextInput
                {...inputOptions}
                placeholder='Confirm Password'
                secureTextEntry={true}
                value={confirmP}
                onChangeText={handleConfirmPChange} />
            {/* {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null} */}
            {confirmPError ? <Text style={styles.error}>{confirmPError}</Text> : null}


            <Button 
                loading={loading}
                textColor={colors.color2} 
                style={styles.btn}
                disabled={disableBtn}
                onPress={submitHandler}>
                    Sign Up
            </Button>

            <Text style={styles.or}>OR</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    <Footer activeRoute='Profile' />
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
    container:{
        flex:1,
        padding:20,
        backgroundColor:colors.color2,
        borderRadius:10,
        justifyContent:'center',
        elevation:10,
    },
    forgetpwd:{
        color:colors.color1,
        marginHorizontal:20,
        marginVertical:10,
        alignSelf:'flex-end',
        fontWeight:"200",
    },
    btn:{
        backgroundColor:colors.color1,
        margin:20,
        padding:6,
    },
    or:{
        alignSelf:"center",
        fontSize:20,
        fontWeight:"100",
        color: colors.color3,
    },
    link:{
        alignSelf:"center",
        color: colors.color1,
        fontSize:18,
        //textTransform:"uppercase",
        marginVertical:10,
        marginHorizontal:20,

    },
    error: {
        color: 'red',
        marginTop: 5,
        marginLeft: 5,
    },
})