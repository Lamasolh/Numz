import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import LandingImg from "../../assets/landing.png";
import { useNavigation } from "@react-navigation/native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types'

const Landing = props =>{
  const navigation = useNavigation()

  const redirect = () => {
    navigation.navigate("Screen1");
  };

  useEffect(() => {
    setTimeout(() => redirect(), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerInside}>
        <ImageBackground
          source={LandingImg}
          resizeMode="cover"
          style={styles.image}
        >
        </ImageBackground></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A081'
  },
  img: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: width > 650 ? "30%" : "90%",
    // height: width > 650 ? "18%" : "20%",
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 300,
    padding: 100,
    // height: width > 650 ? hp("0%") : "100%",
    // width: width > 650 ? wp("100%") : "100%",
  },
  containerInside:{
    paddingHorizontal:20
  }
});
export default Landing;