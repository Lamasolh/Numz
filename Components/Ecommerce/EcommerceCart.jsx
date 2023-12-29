import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
const EcommerceCart = props => {

  return (
    <View style={{
      backgroundColor: "#FFF",
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      }, padding: 20,
      shadowOpacity: 0.2,
      shadowRadius: 6, flexDirection: 'row',
      
    }}>
      <View style={{ flexDirection: 'column' }}>
        <Image style={{ left: -20 }}
          source={require('../../assets/circleimage2.png')} />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ fontSize: 16, left: -30, fontWeight: 600 }}> Latitude 3520 - Silver -</Text>
        <Text style={{ fontSize: 16, left: -30, fontWeight: 600 }}> 2019</Text>
        <Text style={{ fontSize: 16, left: -30, top: 7, fontWeight: 600, color: '#00A081' }}> $579.00</Text>
        <Text style={{ fontSize: 13, lineHeight: 15.26, left: -30, top: 20, fontWeight: 400 }}> Quantity

        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>

            <View style={{ backgroundColor: '#DAECE8', borderRadius: 4, width: 30, height: 30, left: 30 }}>
              <Image style={{ left: 12, top: 12 }}
                source={require('../../assets/negative.png')} />
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 13, lineHeight: 15.26, left: 33, top: 5, fontWeight: 400 }}> 1</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>

            <View style={{ backgroundColor: '#DAECE8', borderRadius: 4, width: 30, height: 30, left: 40 }}>
              <Image style={{ left: 12, top: 12 }}
                source={require('../../assets/positive.png')} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default EcommerceCart;
