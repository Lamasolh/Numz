import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import BankingCards from "../../Components/BankingComponents/BankingCards";
import Bankingpayments from "../../Components/BankingComponents/Bankingpayments";
import BankingCardsbody from "../../Components/BankingComponents/BankingCardsbody";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Searchbar from '../../Components/HomeComponents/CardsSearchbar';
import RealAsset from '../../Components/RealEstate/RealAsset';
import RealCards from '../../Components/RealEstate/RealCards';
const RealChart = props => {
  const navigation = useNavigation()
  return (
    <View>
      <ScrollView
      >

        <View style={styles.container}>

          <BankingComponentsHeader title="" navigate='RealEstate' />
          <Searchbar />
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{
              flexDirection: "column", padding: 15, shadowColor: '#E6E7E9', backgroundColor: 'white',
              shadowOffset: {
                width: 1,
                height: 2,
              },
              width: 170,
              borderColor: '#E6E7E9',
              shadowOpacity: 0.25,
              shadowRadius: 4,
              borderRadius: 5.43,
              borderWidth: 1,
              elevation: 5,
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ color: '#1818196B', fontSize: 8.15, fontWeight: 500 }}>ASSET VALUE</Text>
                  <Text style={{ color: '#181819E5', fontSize: 10.86, fontWeight: 500, top: 5 }}>$29.4k</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row', left: 30 }}>
                    <Image source={require('../../assets/up.png')} />
                    <Text style={{ color: '#1818196B', fontSize: 8.15, fontWeight: 500 }}>12.5%</Text>
                  </View>
                  <Image style={{ top: 4 }} source={require('../../assets/slide.png')} />

                </View>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
            </View>
            <View style={{
              flexDirection: "column", padding: 15, shadowColor: '#E6E7E9', backgroundColor: 'white',
              shadowOffset: {
                width: 1,
                height: 2,
              },
              width: 160,
              borderColor: '#E6E7E9',
              shadowOpacity: 0.25,
              shadowRadius: 4,
              borderRadius: 5.43,
              borderWidth: 1,
              elevation: 5,
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ color: '#1818196B', fontSize: 8.15, fontWeight: 500 }}>MONTHLY REVENUE</Text>
                  <Text style={{ color: '#181819E5', fontSize: 10.86, fontWeight: 500, top: 5 }}>$56.8k</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row', left: 10 }}>

                    <Image source={require('../../assets/up.png')} />
                    <Text style={{ color: '#1818196B', fontSize: 8.15, fontWeight: 500 }}>19.3%</Text>
                  </View>
                  <Image style={{ top: 4, right: 20 }} source={require('../../assets/slide.png')} />

                </View>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>

            </View>
          </View>
          <RealAsset />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: "bold", color: "black", marginTop: "5%", fontSize: 18 }}>On Sale</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontWeight: "bold", color: "black", marginTop: "5%", fontSize: 18 }}></Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 5 }}>
              <Text style={{ fontWeight: "bold", color: "#06A283", marginTop: "5%", fontSize: 12.15, textDecorationLine: 'underline' }}>View All</Text>
            </View>
          </View>
          
         <RealCards/>
         <SMENavbar />  
         </View>
     
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'white'
  },

  cards: {
    flexDirection: "row",
  },

  maincontainer: {
    flexDirection: "row",
  },
  containernew: {
    backgroundColor: "white",
    width: "33%",
    height: 130,
    borderRadius: 15,

    padding: 10,
    marginLeft: 7,

  },
  insidecard2: {
    width: "65%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    position: "relative",

  },

  cardinsidecard: {
    position: "absolute",
    top: "18%",
    left: "30%"
  },

  newcontainer: {
    padding: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#DFDFDF",
    elevation: 20,
    width: "31%",
    height: 115,
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 20,
    shadowColor: "#00A081",
    marginBottom: 10,
  },

  insidecard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  botomcard: {
    justifyContent: "center",
    alignItems: "center",
  }

})

export default RealChart;