import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const EcommerceScroll = props => {

  const navigation = useNavigation();
  
  return (
    <>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "5%" }}>
          <View style={{ flexDirection: "column", padding: 5 }}>
            <View style={styles.newcontainer}>
              <Image style={{}} source={require('../../assets/Office.png')} />
              <Text style={{ color: "#007961", fontSize: 8, marginTop: 10 }}>Office Supplies</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", padding: 5 }}>
            <View style={styles.newcontainer}>
              <Image style={{}} source={require('../../assets/Electronics.png')} />
              <Text style={{ color: "#007961", fontSize: 8, marginTop: 10 }}>Electronics</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", padding: 5 }}>
            <View style={styles.newcontainer}>
              <Image style={{}} source={require('../../assets/Library.png')} />
              <Text style={{ color: "#007961", fontSize: 8, marginTop: 10 }}>Library</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", padding: 5 }}>
            <View style={styles.newcontainer}>
              <Image style={{}} source={require('../../assets/Library.png')} />
              <Text style={{ color: "#007961", fontSize: 8, marginTop: 10 }}>Library</Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", padding: 5 }}>
            <View style={styles.newcontainer}>
              <Image style={{}} source={require('../../assets/Library.png')} />
              <Text style={{ color: "#007961", fontSize: 8, marginTop: 10 }}>Library</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  newcontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 90,
    elevation: 10,
    borderRadius: 15,
    backgroundColor: "white"
    , borderWidth: 2,
    borderColor: "#00534217",
    flexDirection: "column",
    padding: 10
  },
})

export default EcommerceScroll;