import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const InvestingTotalBalance = props => {
 
const navigation=useNavigation();
  return (
    <>
  

      <View style={styles.container}>


      

        <View>
            <Text  style={{fontSize:20, color:"#AEAEB3", fontWeight:"bold"}}>
                Total Balance
            </Text>
        </View>

        <View>
            <Text style={{fontSize:30, color:"#00A081", fontWeight:"bold"}}>
                {props.totalbal}
            </Text>
        </View>

        </View>

        <View style={styles.container2}>

            <View>
                <Text style={{color:"#00A081", fontWeight:"bold", fontSize:20}}>Select & pay</Text>
            </View>

            <View>
                <Text style={{color:"#00A081", fontWeight:"bold", fontSize:20}}>OR</Text>
            </View>

            <TouchableOpacity    onPress={() =>
                navigation.navigate('InsuranceScreens6')} style={{width:"30%", height:45, backgroundColor:"#00A08133", justifyContent:"center",
        alignItems:"center", borderRadius:15}}>
                <Text style={{color:"#00A081"}}>Convert</Text>
            </TouchableOpacity>

        </View>

    </>



  );
}


const styles = StyleSheet.create({

  container: {
    padding: 20,
    flexDirection: "column",
 
   justifyContent:"center",
   alignItems:"center"

  },

  container2:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  }

})

export default InvestingTotalBalance;