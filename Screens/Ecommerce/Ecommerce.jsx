import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import EcommerceHeader from '../../Components/Ecommerce/EcommerceHeader';
import EcommercePop from '../../Components/Ecommerce/EcommercePop';
import EcommerceScroll from '../../Components/Ecommerce/EcommerceScroll';
import EcommerceSale from '../../Components/Ecommerce/EcommerceSale';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Ecommerce = props => {
  const navigation = useNavigation()

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <EcommerceHeader title="" navigate='Home' />

        <View style={styles.container}>
          <EcommercePop />

          <EcommerceScroll />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: "bold", color: "black", marginTop: "5%", fontSize: 18 }}>On Sale</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: "bold", color: "black", marginTop: "5%", fontSize: 18 }}></Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 5 }}>
              <Text style={{ fontWeight: "bold", color: "#06A283", marginTop: "5%", fontSize: 9.7, textDecorationLine: 'underline' }}>View All</Text>
            </View>
          </View>
          {/* <ScrollView horizantal={true}> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <TouchableOpacity onPress={() =>
              navigation.navigate('EcommerceDetials')} >
              <View style={{ flexDirection: 'column' }}>
                <EcommerceSale nameOfImage={require('../../assets/circleimage1.png')} text="Dell Inspiron 15 Series 3000"
                  color="Grey" price='$ 359' />
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
              <EcommerceSale nameOfImage={require('../../assets/circleimage2.png')} text="Dell Inspiron 15 Series 3000"
                color="Grey" price='$ 359' />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <EcommerceSale nameOfImage={require('../../assets/circleimage3.png')} text="Dell Inspiron 15 Series 3000"
                color="Grey" price='$ 359' />
            </View>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: "bold", color: "black", marginTop: "5%", fontSize: 18 }}>Recommended Items</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: "bold", color: "black", marginTop: "5%", fontSize: 18 }}></Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 5 }}>
              <Text style={{ fontWeight: "bold", color: "#06A283", marginTop: "50%", fontSize: 9.7, textDecorationLine: 'underline' }}>View All</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              <EcommerceSale nameOfImage={require('../../assets/circle1image1.png')} text=""
                color="Grey" price='$ 359' />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <EcommerceSale nameOfImage={require('../../assets/circle2image2.png')} text=""
                color="Grey" price='$ 359' />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <EcommerceSale nameOfImage={require('../../assets/circle3image3.png')} text=""
                color="Grey" price='$ 359' />
            </View>
          </View>
          {/* </ScrollView> */}
        </View>

        <SMENavbar />
      </ScrollView>
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

export default Ecommerce;