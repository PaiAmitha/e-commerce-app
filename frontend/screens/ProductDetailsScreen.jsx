import { View, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

export default function ProductDetailsScreen({route : {params}}) {
  console.log(params.id);

  const name = "Gojo T-Shirt";
  const price = "1000";
  const stock = 10;
  const description = `
- Material: High-quality, 100% cotton for a soft feel.
- Size Options: Available in sizes from Small to XXL.
- Color: Vibrant design with bold graphics of Gojo Satoru.
- Design: Striking graphic print of Gojo Satoru from "Jujutsu Kaisen."
- Care Instructions: Machine wash cold with like colors. Avoid bleach or ironing decorations.
`;

  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      id :"img1",
      url : "https://th.bing.com/th/id/OIP.CXUrNZzKJrN1C4yYe95keQHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id :"img2",
      url : "https://th.bing.com/th/id/OIP.2wjhQpRkR_uBkY6yJl2obwHaLH?w=125&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id :"img2",
      url : "https://th.bing.com/th/id/OIP.0AbP3WPQ5ACuEx9WwpdYTQHaKp?w=119&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  const incrementQty = () => {
    if(stock <= quantity) return
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if(quantity<=1) return
    setQuantity((prev) => prev - 1);
  }

  const addToCartHandler = () => {
    if(stock===0) return Toast.show({
      type :"error",
      text1:"Oops! Out of stock for now.",
      text2:"But don't worry, we're working on restocking!"
    }) ;
    Toast.show({
      type:"success",
      text1:"Added to Cart!",
    })
  }
  
  return (
    <View style={{
      ...defaultStyle,
      padding:0,
      backgroundColor:colors.color1,
    }}>
      <Header back={true}/>
      {/* Carousel */}
      <Carousel 
        layout='default' 
        sliderWidth={SLIDER_WIDTH} 
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem} />

<ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{
        backgroundColor: colors.color2,
        padding: 40,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        
      }}>
      <Text
        numberOfLines={2}
        style={{
          fontSize: 25,
        }}>{name}</Text>
        { stock === 0 && 
        <View style={{
            position: 'absolute',
            top: 25,
            right: 5,
            transform: [{ rotate: '35deg' }],
            backgroundColor: 'red',
            paddingHorizontal: 10,
            paddingVertical: 5,
            height:27,
            borderRadius:10,
        }}>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>Out of Stock</Text> 
  </View> }
      <Text
        style={{
          fontSize: 18,
          fontWeight: "900",
        }}>₹{price}</Text>

      <Text
        style={{
          letterSpacing: 1,
          lineHeight: 20,
          marginVertical: 15,
          marginTop:-10,
          //fontFamily:"Poppins",
        }}
        numberOfLines={8}>
          {description}</Text>

          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:5,
          }}>
            <Text style={{
              color:colors.color3,
              fontWeight:"100",
            }}>Quantity</Text>
            
            <View style={{
              width:80,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
            }}>
              <TouchableOpacity onPress={decrementQty}>
                <Avatar.Icon icon={"minus"} size={20}
                  style={styles.qtyicon}/>
              </TouchableOpacity>
              <Text style={styles.qty}>{quantity}</Text>

              <TouchableOpacity onPress={incrementQty}>
                <Avatar.Icon icon={"plus"} size={20}
                  style={styles.qtyicon}/>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={addToCartHandler}>
            <Button icon={"cart"} style={styles.btn} textColor={colors.color2}>Add to Cart</Button>
          </TouchableOpacity>

    </ScrollView>

    </View>
  )
}

const CarouselCardItem = ({item, index}) => (
  <View style={styles.container} key={index}>
    <Image source={{uri:item.url}} style={styles.image} />
  </View>
)

const styles = StyleSheet.create({
  container :{
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical:65,
    height:380,

  },
  image : {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height:250,
    //marginTop:80,
  },
  qtyicon:{
    borderRadius:5,
    backgroundColor:colors.color5,
    height:25,
    width:25,
  },
  qty:{
    backgroundColor:colors.color4,
    height:25,
    width:25,
    textAlignVertical:'center',
    textAlign:'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:colors.color5,
  },
  btn :{
    backgroundColor: colors.color3,
    borderRadius:100,
    padding: 5,
    marginVertical: 35,
  },
})