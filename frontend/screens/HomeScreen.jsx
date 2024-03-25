import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { defaultStyle, colors } from '../styles/styles'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const categories = [
    { category: "Nice", _id: '01' },
    { category: "Football", _id: '02' },
    { category: "Men", _id: '03' },
    { category: "Women", _id: '04' },
    { category: "Helicopter", _id: '05' },
    { category: "Dummy", _id: '06' },
    { category: "Dummy2", _id: '07' }
];

const products = [{
    price: 2300,
    stock: 10,
    name: "Product1",
    _id: 'a',
    images: [
        {
            url: "https://th.bing.com/th/id/OIP.aNgg50SxpZ_0Mum8V_rBewHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
        }
    ],
},
{
    price: 2300,
    stock: 10,
    name: "Product2",
    _id: 'b',
    images: [
        {
            url: "https://th.bing.com/th/id/OIP.aNgg50SxpZ_0Mum8V_rBewHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
        }
    ],
},
{
    price: 2300,
    stock: 10,
    name: "Product1",
    _id: 'c',
    images: [
        {
            url: "https://th.bing.com/th/id/OIP.aNgg50SxpZ_0Mum8V_rBewHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
        }
    ],
},
{
    price: 2300,
    stock: 10,
    name: "Product1",
    _id: 'c',
    images: [
        {
            url: "https://th.bing.com/th/id/OIP.aNgg50SxpZ_0Mum8V_rBewHaE8?w=1200&h=800&rs=1&pid=ImgDetMain",
        }
    ],
}
];

export default function HomeScreen() {
    const [category, setCategory] = useState("");
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigation = useNavigation();

    const categoryButtonHandler = (id) => {
        setCategory(id);
    }

    const addToCartHandler = (id) => {
        console.log("Add to Cart", id);
    }

    return (
        <>
            {activeSearch && (
                <SearchModal searchQuery={searchQuery} setSearchQuery={setSearchQuery}
                    setActiveSearch={setActiveSearch} products={products} />
            )}
            <View style={defaultStyle}>
                <Header />
                <View style={{
                    paddingTop: 50,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    {/*Heading*/}
                    <View>
                        <Text style={{ fontSize: 20, marginTop: 10 }}>Our</Text>
                        <Text style={{ fontSize: 22, fontWeight: "900", color: colors.color1 }}>Products</Text>
                    </View>

                    {/*Search Bar*/}
                    <View>
                        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
                            <Avatar.Icon
                                icon={"magnify"}
                                color={"gray"} size={40}
                                style={{ backgroundColor: colors.color2, elevation: 12, marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Categories */}
                <View
                    style={{
                        flexDirection: "row",
                        height: 80,
                    }}>
                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: "center",
                        }}>
                        {categories.map((item, index) => (
                            <Button
                                key={item._id}
                                style={{
                                    backgroundColor: category === item._id ? colors.color1 : colors.color5,
                                    borderRadius: 100,
                                    margin: 5,
                                }}
                                onPress={() => categoryButtonHandler(item._id)}>
                                <Text style={{
                                    fontSize: 12,
                                    color: category === item._id ? colors.color2 : 'gray'
                                }}>{item.category}</Text>
                            </Button>
                        ))}
                    </ScrollView>
                </View>

                {/* Products */}
                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <ProductCard
                            stock={item.stock}
                            name={item.name}
                            price={item.price}
                            image={item.images[0]?.url}
                            addToCartHandler={addToCartHandler}
                            id={item._id}
                            navigate={navigation} />
                    )}
                />
            </View>
        </>
    )
}
