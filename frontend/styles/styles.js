import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
    color1 : "#000080",
    color_light : "#0000cc",
    color_light2 : "#6666ff",
    color2:'white',
    color3: "#2D2D2D",
    color4: "transparent",
    color5: "#F2F2F2",
    color6: "#F7F7F7",
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