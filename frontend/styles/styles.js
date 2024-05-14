import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
    color1 : "#000066",
    color_light : "#809fff",
    color_light2 : "#0033cc",
    color2:'white',
    color3: "#e68a00",
    color4: "transparent",
    color5: "#F2F2F2",
    color6: "#F7F7F7",
    black:'black',
};

export const defaultStyle = StyleSheet.create({
    padding:35,
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
    height: 50,
    backgroundColor: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20,
});

export const defaultImg = "https://th.bing.com/th?id=OIP.rBroxJeka0Jj81uw9g2PwAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";