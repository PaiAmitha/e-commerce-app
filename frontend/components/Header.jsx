import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Header({back, emptyCart = false}) {

    const navigation = useNavigation();
    const route = useRoute();

    const emptyCartHandler = () => {
        console.log("Empty Cart");
    }
  return (
    <>
      { back && (
        <TouchableOpacity
        style={{
          position:"absolute",
          left:20,
          top:40,
          zIndex:10,
        }}
          onPress={() => navigation.goBack() }
        >
          <Avatar.Icon style={{
              backgroundColor: colors.color4,
          }}
          icon={'arrow-left'} color={ route.name==='productdetails'? colors.color2 : colors.color3}/>
        </TouchableOpacity>
      )}

<TouchableOpacity
        style={{
          position:"absolute",
          right:20,
          top:40,
          zIndex:10,
        }}
          onPress={emptyCart ? emptyCartHandler : () => navigation.navigate("cart") }
        >
          <Avatar.Icon style={{
              backgroundColor: colors.color4,
              marginTop:10,
          }}
          icon={ emptyCart? "delete-outline" : 'cart-outline'} color={ route.name==='productdetails'? colors.color2 : colors.color3} size={50}/>
        </TouchableOpacity>
    </>
  )
}