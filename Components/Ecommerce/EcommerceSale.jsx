import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
const EcommerceSale = props => {

  return (
    <View style={{
      marginTop:20,
      backgroundColor: "#FFF",
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      width: 100,
      height: 150,
      elevation: 6, position: 'relative'
    }}>
      <Image style={{ position: 'absolute', left: 10, top: -20 }} source={require('../../assets/backcircle.png')} />
      <Image style={{ position: 'absolute', left: 3, top: -15 }} source={props.nameOfImage} />
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 7.7, fontWeight: 700, paddingLeft: 21,marginTop:30 }}>{props.text}</Text>
        <Text style={{ fontSize: 6.98, fontWeight: 600, color: '#868686', textAlign: 'center', marginTop: 10 }}>{props.color}</Text>
        <Text style={{ fontSize: 11.9, fontWeight: 700, textAlign: 'center', marginTop: 10, color: '#06A283' }}>{props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default EcommerceSale;
