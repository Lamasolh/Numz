import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Inputs from '../HomeComponents/GeneralComponents/Inputs/Inputs';

const InvestingHeaderComponent = props => {

  const navigation = useNavigation();
  return (
    <>

      <View style={styles.container}>


        <View style={styles.arrowcontainer}>

          <TouchableOpacity
            onPress={() => navigation.navigate(props.navigate)}>


            <Image style={{ marginTop: 5, paddingTop: 10 }}
              source={require('../../assets/smearrow.png')}
            />

          </TouchableOpacity>
        </View>


        <View style={{ width: "100%" }}>
          <Text style={{
            textAlign: "center", color: "black", fontSize: 20, fontWeight: "bold",

          }}>{props.title}</Text>

        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BitcoinBuy')}
        >

          <View style={{ backgroundColor: '#DA000012', fontSize: 5, borderRadius: 48, width: 100 }}>
            
          <Text style={{padding:10,fontSize:12,textAlign:'center',color:'#DA0000',fontWeight:700}}>SELL BTC</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>


  );
}


const styles = StyleSheet.create({

  container: {
    padding: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center"

  },
  arrowcontainer: {

    width: "20%"

  }

})

export default InvestingHeaderComponent;