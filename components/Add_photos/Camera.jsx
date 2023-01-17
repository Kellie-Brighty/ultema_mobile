import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Close_Icon from "../../assets/close_icon.png";
import Take_Picture_Icon from "../../assets/take_picture.png";
import Flip_Icon from "../../assets/flip.png";
import Gallery_Picker from "../../assets/gallery.png";

export default function CameraScreen({ navigation }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.camera_header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Close_Icon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.cameraContainer}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        ) : (
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"1:1"}
          />
        )}
      </View>

      <View>
        {imageUri ? (
          <View style={styles.image_active_action} >
            <TouchableOpacity onPress={() => setImageUri(null)}>
              <Text style={{fontSize: 16, fontWeight: '500'}} >Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Photos")}>
              <Text style={{fontSize: 16, fontWeight: '500'}} >Use Image</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={Gallery_Picker} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <Image source={Take_Picture_Icon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Flip_Icon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 73,
    alignItems: "center",
    paddingHorizontal: 19,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    // aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    height: 121,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image_active_action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 121,
  }
});
