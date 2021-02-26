import * as React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native';
import default_profile_picture from "../../assets/default_profile_picture.jpg";
const ProfileScreen = () => (
    <View style={styles.container}>
    <Image source={default_profile_picture} style={styles.tinyLogo}></Image>
    <Text>"BingBong"</Text>
    </View>);



const styles = StyleSheet.create({
    container: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
    },
    tinyLogo: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

export default ProfileScreen;