import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputOptions={
        style:inputStyling,
        mode:"outline",
        activeOutlineColor:colors.color1,
    };

    const loading = false;
    const submitHandler = () => {
        alert("Yaayy!!");
    }
  return (
    <>
    <View style={defaultStyle}>

        {/* Heading */}
        <View style={{
            marginBottom:20,
        }}>
            <Text style={styles.heading}>Login</Text>
        </View>

        <View style={styles.container}>
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
                value={password}
                onChangeText={setPassword} />

            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgetpwd}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button 
                loading={loading}
                textColor={colors.color2} 
                style={styles.btn}
                disabled={email === "" || password === ""}
                onPress={submitHandler}>
                    Log In
            </Button>

            <Text style={styles.or}>OR</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
        </View>
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

    }
})