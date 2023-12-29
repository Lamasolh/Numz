
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
const Soffer = props => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.profile} >

          <Image style={{}}
            source={require('../../assets/stdgrad.png')}
          />

          <Text style={{ marginTop: "2%", color: "#9DFFB3", fontSize: 25, fontWeight: "bold" }}>Student Offer</Text>

        </View>


        <View style={{ padding: 17, marginTop: "5%" }}>

          <Text style={{ color: "#000000", fontSize: 18, fontWeight: "bold" }}>Package Features</Text>

          <Text style={{ marginTop: "3%", fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
        </View>

        <View style={{ padding: 17, flexDirection: "row", alignItems: "center" }}>

          <Image style={{}}
            source={require('../../assets/sss1(1).png')}
          />

          <Text style={{ color: "#8D8D8D", fontWeight: "bold", fontSize: 18, marginLeft: "4%" }}>30GB</Text>

        </View>

        <View style={{ paddingLeft: "5%", flexDirection: "row", alignItems: "center" }}>

          <Image style={{}}
            source={require('../../assets/sss1(2).png')}
          />

          <Text style={{ color: "#8D8D8D", fontWeight: "bold", fontSize: 18, marginLeft: "4%" }}>500 SMS</Text>

        </View>

        <View style={{ paddingLeft: "5%", flexDirection: "row", alignItems: "center", marginTop: "6%" }}>

          <Image style={{}}
            source={require('../../assets/sss1(3).png')}
          />

          <Text style={{ color: "#8D8D8D", fontWeight: "bold", fontSize: 18, marginLeft: "4%" }}>200 Min.</Text>

        </View>

        <View style={{ flexDirection: "row", padding: 20, alignItems: "center", paddingLeft: "15%" }}>

          <View style={{ position: "relative" }}>
            <Text style={{ fontSize: 23, color: "#1AA37A", fontWeight: "bold" }}>$20</Text>
            <Image style={{ position: "absolute" }}
              source={require('../../assets/linetele.png')}
            />
          </View>

          <View style={{ marginLeft: "5%" }}>
            <Text style={{ fontSize: 33, color: "#1AA37A", fontWeight: "bold" }}>$12.60</Text>
          </View>
        </View>

        <View style={{ paddingLeft: 30, paddingRight: 30, marginTop: 30, marginBottom: 20 }}>
          <BigButton3 title="Buy" navigate='TelecomScreens5' />
        </View>

      </View>
    </>
  );

}


const styles = StyleSheet.create({

  container: {
    width: "100%",
    padding: 10,
    elevation: 10,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 25



  },

  profile: {

    alignItems: "center",
    justifyContent: "center"

  }



})


export default Soffer;