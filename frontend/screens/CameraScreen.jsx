import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';
import * as ImagePicker from 'expo-image-picker'

export default function CameraScreen() {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back)
    const [camera, setCamera] = useState(null)

    const openImagePicker = async() => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    };

    const clickPicture = () => {};

  return (
    <View style={{
        flex:1,
    }}>
      <Camera 
        type={type}
        style={{
            flex:1,
            aspectRatio:1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}/>

        <View 
            style={{
                flexDirection:"row",
                bottom:10,
                width:"100%",
                justifyContent:"space-evenly",
                position:'absolute',
            }}>
                <MyIcon icon="image" handler={openImagePicker}/>
                <MyIcon icon="camera" handler={clickPicture}/>
                <MyIcon icon="camera-flip" handler={() => {
                    setType(prevType => 
                        prevType === CameraType.back ? CameraType.front : CameraType.back )
                }}/>

        </View>
    </View>
  )
}

const MyIcon = ({icon, handler}) => (
    <TouchableOpacity onPress={handler}>
        <Avatar.Icon 
            icon={icon} 
            size={40}
            color={colors.color2}
            style={{
                backgroundColor:colors.color1,
            }}/>
    </TouchableOpacity>

)