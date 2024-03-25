import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper'; // Assuming you're using Paper for Button

import { colors } from '../styles/styles';

const windowWidth = Dimensions.get('window').width;

export default function ProductCard({
  stock,
  price,
  name,
  image,
  id,
  addToCartHandler,
  i,
  navigate
}) {
  return (
    <TouchableOpacity 
        activeOpacity={1}
        onPress={() => navigate.navigate('ProductDetails', { id })}>
      <View style={[styles.cardContainer, { backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2 }]}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={2} style={[styles.name, { color: i % 2 === 0 ? colors.color2 : colors.color3 }]}>
            {name}
          </Text>
          <Text style={[styles.price, { color: i % 2 === 0 ? colors.color2 : colors.color3 }]}>
            ₹{price}
          </Text>
        </View>
        <TouchableOpacity style={[{backgroundColor:i % 2 === 0 ? colors.color2 : colors.color3}, styles.addToCartButton]} onPress={() => addToCartHandler(id, stock)}>
        <Button 
            style={{backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3}} 
            mode="contained" 
            onPress={() => addToCartHandler(id, stock)} 
            textColor={i % 2 === 0 ? colors.color2 : colors.color3}>
            Add to Cart
        </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 5,
    width: windowWidth / 2 - 55, // Adjusted width
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10, // Adjusted margin
    marginBottom: 20, // Adjusted margin
    borderRadius: 20,
    height: 280, // Adjusted height
  },
  image: {
    width: "100%",
    height: 180, // Adjusted height
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  detailsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center', // Adjusted alignment
  },
  name: {
    fontSize: 16, // Adjusted font size
    fontWeight: "bold", // Adjusted font weight
    flex: 1,
    textAlign: 'center', // Adjusted alignment
  },
  price: {
    fontSize: 14, // Adjusted font size
    fontWeight: "bold", // Adjusted font weight
    textAlign: 'center', // Adjusted alignment
  },
  addToCartButton: {
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
