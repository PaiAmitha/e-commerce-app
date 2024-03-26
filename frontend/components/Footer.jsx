import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles';
import { Avatar } from 'react-native-paper';

export default function Footer({ activeRoute = "Home"}) {

    const navigation = useNavigation();

    const loading = false;
    const isAuthenticated = false;

    const navigationHandler = (key) => {

        switch(key) {
            case 0:
                navigation.navigate('Home');
                break;
            case 1:
                navigation.navigate('Cart');
                break;
            case 2:
                if (isAuthenticated) navigation.navigate('Profile');
                else
                navigation.navigate('Login');
                break;
            default: 
            navigation.navigate('Home');

        }

    };

    const avatarOptions = {
        color:colors.color2,
        size:45,
        style:{
            backgroundColor:colors.color1,
    }
        
    }

  return (
    loading === false && (
    <View style={styles.container}>
      <View style={{
        flexDirection:'row',
        justifyContent:"space-evenly",
      }}>
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={() => navigationHandler(1)}>
                <Avatar.Icon 
                    {
                        ...avatarOptions
                    }
                    icon={activeRoute==="Cart"? "shopping" : "shopping-outline"}/>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={() => navigationHandler(2)}>
                <Avatar.Icon 
                    {
                        ...avatarOptions
                    }
                    icon={activeRoute==="Profile"? "account" : "account-outline"}/>
        </TouchableOpacity>
      </View>
      <View style={{
        position:'absolute',
        width:80,
        height:80,
        backgroundColor:colors.color2,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        top:-50,
        alignSelf:'center',
      }}>
        <View style={{
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={() => navigationHandler(0)}>
                <Avatar.Icon 
                {
                    ...avatarOptions
                }
                    icon={activeRoute==="Home"? "home" : "home-outline"}/>
        </TouchableOpacity>

        </View>
        
      </View>
    </View>
  ))
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.color1,
        borderTopRightRadius:120,
        borderTopLeftRadius: 120,
    }
})