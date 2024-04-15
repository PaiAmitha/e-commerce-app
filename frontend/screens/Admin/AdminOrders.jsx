import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { orders } from '../OrdersScreen'
import OrderItem from '../../components/OrderItem'

export default function AdminOrders() {

    const loading = false;
    const processOrderLoading = false;

    const updateHandler = () => {};
  return (
    <View style={{
        ...defaultStyle,
    }}>
        <Header back={true} />

       {/* Heading */}
    <View style={{
        marginBottom:20,
    }}>
        <Text style={styles.heading}>All Orders</Text>
    </View>

    {
            loading? <Loader/> : (
                <View style={{
                    padding:10,
                    flex:1,
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            orders.length > 0 ? orders.map((item,index) =>(
                                <OrderItem 
                                    key={item._id} 
                                    id={item._id}
                                    i={index}
                                    price={item.totalAmount}
                                    status={item.orderStatus}
                                    paymentMethod={item.paymentMethod}
                                    orderedOn={item.createdAt.split("T")[0]}
                                    address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                                    admin={true}
                                    updateHandler={updateHandler} 
                                    loading={processOrderLoading}/>
                            )) : <Headline style={{textAlign:'center'}}>No Orders Yet..</Headline>
                        }
                    </ScrollView>
                </View>
            )
        }
    </View>
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
});