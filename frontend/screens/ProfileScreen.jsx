import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const user={
    name: 'Amitha Pai',
    email: 'amithapai2001@gmail.com',
};

const loading = false;

export default function ProfileScreen({navigation}) {

    const [avatar, setAvatar] = useState(null);

    const logoutHandler = () => {
        console.log('Signing Out..');
    }
    const navigateHandler = (text) => {
        switch(text) {
            case 'Admin' : 
                navigation.navigate('AdminPanel');
                break;
            case 'Orders' : 
                navigation.navigate('Orders');
                break;
            case 'Profile' : 
                navigation.navigate('UpdateProfile');
                break;
            case 'Password' : 
                navigation.navigate('ChangePassword');
                break;
            case 'Logout' : 
                //navigation.navigate('Logout');
                logoutHandler();
                break;
            default: 
                navigation.navigate('Home');
                break;

            
        }

    }
  return (
    <>
    <View style={defaultStyle}>
        {/* Heading */}
        <View style={{
            marginBottom:20,
        }}>
            <Text style={styles.heading}>My Profile</Text>
        </View>

        {/* Loading */}

        {
            loading? (<Loader /> ) : (
        <>
        <View style={styles.container}>
            <Avatar.Image 
                size={100} 
                style={{backgroundColor:colors.color2}}
                source={{
                    uri:avatar
                }} />
            <TouchableOpacity onPress={() => navigation.navigate("Camera",{updateProfile : true})}>
                <Button textColor={colors.color2}>Change Photo</Button>
            </TouchableOpacity>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={{
                fontWeight:'300',
                color:colors.color2,
            }}>{user?.email}</Text>
        </View>

        <View>
            <View 
                style={{
                    flexDirection:'row',
                    margin:10,
                    justifyContent:'space-between',
                }}>
                    <ButtonBox handler={navigateHandler} text={'Orders'} icon={"format-list-bulleted-square"}/>
                    <ButtonBox handler={navigateHandler} text={'Admin'} icon={'view-dashboard'} reverse={true}/>
                    <ButtonBox handler={navigateHandler} text={"Profile"} icon={"pencil"}/>
            </View>
        </View>
        <View 
            style={{
                flexDirection:'row',
                margin:10,
                justifyContent:'space-evenly',
                }}>
            <ButtonBox handler={navigateHandler} text={'Password'} icon={"pencil"} />
            <ButtonBox handler={navigateHandler} text={"Logout"} icon={"exit-to-app"} />
        </View>
        </>
            )}
    </View>
    <Footer />
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
    container : {
        elevation:7,
        backgroundColor:colors.color1,
        padding:30,
        borderRadius:10,
        alignItems:"center",
    },
    name:{
        fontSize:20,
        fontWeight:"500",
        marginTop:10,
        color: colors.color2,
    }
}
)