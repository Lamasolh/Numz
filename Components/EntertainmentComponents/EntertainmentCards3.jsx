import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const E2 =props=> {



  return (


    <>
 
<View style={styles.container}>

    <ScrollView horizontal={true} style={{width:"100%",height:228}}>
    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"32%",height:220,backgroundColor:"white",elevation:10,
    borderRadius:20,alignItems:"center"}}>

        <Image style={{width:"100%", borderRadius:15,height:140}}
              source={require('../../assets/paris.png')}
        />

        <Text style={{color:"#868686",fontSize:9,marginTop:10,lineHeight:15}}>· 2 days · Room for 2 · Free Breakfast{'\n'}· 4-star hotel</Text>
        <Text style={{color:"#06A283",fontSize:16,marginTop:5}}>$ 359</Text>

    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"32%",height:220,backgroundColor:"white",elevation:10,
    borderRadius:20,alignItems:"center",marginLeft:10}}>

        <Image style={{width:"100%", borderRadius:15,height:140}}
              source={require('../../assets/bali.png')}
        />

        <Text style={{color:"#868686",fontSize:9,marginTop:10,lineHeight:15}}>· 2 days · Room for 2 · Free Breakfast{'\n'}· 4-star hotel     · Free dinner</Text>
        <Text style={{color:"#06A283",fontSize:16,marginTop:5}}>$ 359</Text>
      

    </TouchableOpacity>
 

    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"32%",height:220,backgroundColor:"white",elevation:10,
    borderRadius:20,alignItems:"center",marginLeft:10}}>

        <Image style={{width:"100%", borderRadius:15,height:140}}
              source={require('../../assets/paris.png')}
        />

        <Text style={{color:"#868686",fontSize:9,marginTop:10,lineHeight:15}}>· 2 days · Room for 2 · Free Breakfast{'\n'}· 4-star hotel</Text>
        <Text style={{color:"#06A283",fontSize:16,marginTop:5}}>$ 359</Text>

    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"38%",height:208,backgroundColor:"white",elevation:10,
    borderRadius:20,alignItems:"center",marginLeft:10}}>

        <Image style={{width:"100%", borderRadius:15,height:130}}
              source={require('../../assets/malta.png')}
        />

        <Text style={{color:"black",fontSize:12,fontWeight:"bold",marginTop:5}}>Malta Cruise</Text>
       
        <Text style={{color:"#868686",fontSize:9,marginTop:5}}>· 2 days · Room for 2 · Free Breakfast</Text>
        <Text style={{color:"#06A283",fontSize:16,marginTop:5}}>$ 359</Text>

    </TouchableOpacity>

    </ScrollView>
</View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    width:"100%",
  
   
  },

  


})


export default E2;