import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import { TouchableOpacity } from 'react-native';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';

import { useNavigation } from '@react-navigation/native';
import EcommerceHeaderCart from '../../Components/Ecommerce/EcommerceHeaderCart';
import EcommerceCart1 from '../../Components/Ecommerce/EcommerceCart';

const EcommerceCart = props => {
  const navigation = useNavigation()

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <EcommerceHeaderCart title="" navigate='Ecommerce' />
        <View style={{ padding: 30 }}>
          <View style={{ bottom: 20 }}>
            <EcommerceCart1 />
          </View>
          <EcommerceCart1 />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 170 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#AEAEB3', fontSize: 17.68, lineHeight: 26.52, top: 10 }}>Total </Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#00A081', fontSize: 26.4, lineHeight: 39.52 }}>$ 1,701.59 </Text>

            </View>
          </View>
          <View style={{ top: 90 }}>
            <Buttons title='Confirm Order' navigate='TotalBalanceScreen' />
          </View>
        </View>


      </ScrollView>
      <SMENavbar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
  }
})

export default EcommerceCart;