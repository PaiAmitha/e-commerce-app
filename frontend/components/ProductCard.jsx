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
      <View style={[styles.cardContainer, { backgroundColor: colors.color1 }]}>
      <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={2} style={[styles.name, { color: colors.color2  }]}>
            {name}
          </Text>
          <Text style={[styles.price, { color: colors.color2 }]}>
            ₹{price}
          </Text>
          
        </View>
        <TouchableOpacity style={[{backgroundColor:colors.color2 }, styles.addToCartButton]} onPress={() => addToCartHandler(id, stock)}>
        <Button 
            style={{backgroundColor: colors.color2 }} 
            mode="contained" 
            onPress={() => addToCartHandler(id, stock)} 
            textColor={colors.color1}>
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
    width: windowWidth / 2 - 15, // Adjusted width
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5, // Adjusted margin
    marginBottom: 5, // Adjusted margin
    borderRadius: 10,
    height: 280, // Adjusted height
  },
  image: {
    width: "100%",
    height: "100%", // Adjusted height
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
