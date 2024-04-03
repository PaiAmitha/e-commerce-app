import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, inputStyling } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

export default function VerifyScreen({navigation}) {

    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");

    const inputOptions={
        style:inputStyling,
        mode:"outline",
        activeOutlineColor:colors.color1,
    };

    const loading = false;
    const submitHandler = () => {
        //alert("Yaayy!!");
        //will remove this in future
        navigation.navigate('Verify');
    }
  return (
    <>
    <View style={defaultStyle}>

        {/* Heading */}
        <View style={{
            marginBottom:20,
        }}>
            <Text style={styles.heading}>Reset Password</Text>
        </View>

        <View style={styles.container}>
            <TextInput 
                {...inputOptions} 
                placeholder='OTP'
                keyboardType='number-pad'
                value={otp}
                onChangeText={setOtp} />

                <TextInput 
                {...inputOptions} 
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword} />


            <Button 
                loading={loading}
                textColor={colors.color2} 
                style={styles.btn}
                disabled={otp === "" || password === ""}
                onPress={submitHandler}>
                    Reset
            </Button>

            <Text style={styles.or}>OR</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.link}>Resend OTP</Text>
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