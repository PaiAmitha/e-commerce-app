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
    //console.log("Route Name:", route.name);
  return (
    <>
      { back && (
        <TouchableOpacity
        style={{
          position:"absolute",
          left:-2,
          top:40,
          zIndex:10,
        }}
          onPress={() => navigation.goBack() }
        >
          <Avatar.Icon style={{
              backgroundColor: colors.color4,
          }}
          size={50}
          icon={'arrow-left'} color={ route.name==='ProductDetails'? colors.color2 : 'black'}/>
        </TouchableOpacity>
      )}

<TouchableOpacity
        style={{
          position:"absolute",
          right:15,
          top:40,
          zIndex:10,
        }}
          onPress={emptyCart ? emptyCartHandler : () => navigation.navigate("cart") }
        >
          <Avatar.Icon style={{
              backgroundColor: colors.color4,
              marginTop:10,
          }}
          icon={ emptyCart? "delete-outline" : 'cart-outline'} color={ route.name==='ProductDetails'? colors.color2 : 'black'} size={50}/>
        </TouchableOpacity>
    </>
  )
}