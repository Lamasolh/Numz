import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Loanscomp = props => {
 
const navigation=useNavigation();
  return (
    <>
  
  <View style={styles.maincontainer}>

      <View style={styles.container}>

        <View style={{width:"70%"}}>
            <Text style={{color:"#00A081", fontSize:25, fontWeight:"bold"}}>All your loans in one place</Text>
        </View>

        <TouchableOpacity  onPress={() =>
              navigation.navigate('YourLoans')} style={{width:"25%", padding:10, borderRadius:20, backgroundColor:"#E3F5F1", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#00A081"}}>View</Text>
        </TouchableOpacity>


      </View>

        <View>
            <Text style={{textAlign:"center", marginTop:20, color:"#7E7E7E"}}>Total loans paid</Text>
        </View>

        <View style={{width:"100%", height:25,backgroundColor:"#E3F5F1", marginTop:20,
        borderRadius:20}}>


        <View style={{width:"50%", height:25,backgroundColor:"#00A081",
        borderRadius:20}}>
            <Text style={{color:"white",textAlign:"right",fontSize:14}}>30%</Text>
        </View>

        </View>

</View>
    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    padding: 20,
   
    backgroundColor:"white",
    elevation:12,
    borderRadius:20,
    shadowColor:"grey",

  },

  container:{
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",

  },


})

export default Loanscomp;