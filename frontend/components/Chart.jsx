import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { colors } from '../styles/styles';

const screenWidth = Dimensions.get('screen').width- 60 - 75;

export default function Chart({inStock=0, outOfStock=0}) {
    const data=[
        {
            name:"Out of Stock",
            population :outOfStock,
            color: colors.color_light,
            legendFontColor:colors.color1,
        },
        {
            name:"In Stock",
            population :inStock,
            color: colors.color_light2,
            legendFontColor:colors.color1,
        }
    ];

    const chartConfig = {
        color : (opacity=1) =>`rgba(26,255,146,${opacity})`,
    }
  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={150}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={colors.color2}
        //paddingLeft={"15"}
        //marginRight={"10"}
        center={[5, 2]}
        absolute/>
    </View>
  )
}