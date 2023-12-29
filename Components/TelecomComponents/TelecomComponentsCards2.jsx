
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Tcards2 =props=> {

  const navigation=useNavigation();

  return (



    
    <>

    <View style={{width:"100%"}}>
<ScrollView horizontal={true}>
<View style={styles.container}>



    <View style={styles.cards} >
    

   
        <Text style={{color:"#9DFFB3", fontSize:20, marginTop:5, fontWeight:"bold"}}>30GB</Text>
        <Text style={{color:"black", fontSize:9, marginTop:5}}>For 30 days</Text>

    </View>

    <TouchableOpacity  onPress={() => navigation.navigate('TelecomScreens4')} style={styles.cards} >
    

    <Text style={{color:"black", fontSize:9, marginTop:5}}>Student Offer</Text>
    <Text style={{color:"#9DFFB3", fontSize:20, marginTop:5, fontWeight:"bold", textAlign:"center"}}>30GB {'\n'}& more</Text>
   
    
    </TouchableOpacity>

    <View style={styles.cards} >
    

   
  
    <Text style={{color:"#9DFFB3", fontSize:20, marginTop:5, fontWeight:"bold"}}>30GB</Text>
        <Text style={{color:"black", fontSize:9, marginTop:5}}>For 30 days</Text>
    
    </View>

    <View style={styles.cards} >
    

   
   
    <Text style={{color:"#9DFFB3", fontSize:20, marginTop:5, fontWeight:"bold"}}>30GB</Text>
        <Text style={{color:"black", fontSize:9, marginTop:5}}>For 30 days</Text>
    
    </View>


    </View>
    </ScrollView>
    </View>
    </>
  );
    
}


const styles = StyleSheet.create({

  container: {
    width:"100%",
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    paddingLeft:60,
   
  },

  


  cards:{
    width:"30%",
    height:100,
    backgroundColor:"white",
    padding:10,
    borderRadius:15,
    shadowColor:"black",
    elevation:10,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:10,
  
  }
  


})


export default Tcards2;