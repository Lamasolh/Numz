import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const E1 =props=> {

  const navigation=useNavigation();

  return (


    <>

<View style={styles.container}>

    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"35%",height:110,backgroundColor:"white",elevation:10,
    borderRadius:15,justifyContent:"center",alignItems:"center",paddingTop:5}}>

        <Image style={{}}
              source={require('../../assets/carenter.png')}
        />

        <Text style={{color:"#007961",fontSize:12}}>Book Car</Text>

    </TouchableOpacity>


    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"35%",height:110,backgroundColor:"white",elevation:10,
    borderRadius:15,justifyContent:"center",alignItems:"center",paddingTop:5,marginLeft:"2%"
    ,marginRight:"2%"}}>

        <Image style={{}}
              source={require('../../assets/ship.png')}
        />

        <Text style={{color:"#007961",fontSize:12}}>Book Cruise</Text>

    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"35%",height:110,backgroundColor:"white",elevation:10,
    borderRadius:15,justifyContent:"center",alignItems:"center",paddingTop:5}}>

        <Image style={{}}
              source={require('../../assets/enthouse.png')}
        />

        <Text style={{color:"#007961",fontSize:12}}>Book Restaurant</Text>

    </TouchableOpacity>

</View>


<View style={styles.container}>

    <TouchableOpacity onPress={() => navigation.navigate('EntertainmentScreeen2')} style={{width:"35%",height:110,backgroundColor:"white",elevation:10,
    borderRadius:15,justifyContent:"center",alignItems:"center",paddingTop:5}}>

        <Image style={{}}
              source={require('../../assets/ap1.png')}
        />

        <Text style={{color:"#007961",fontSize:12}}>Book Flight</Text>

    </TouchableOpacity>


    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"35%",height:110,backgroundColor:"white",elevation:10,
    borderRadius:15,justifyContent:"center",alignItems:"center",paddingTop:5,marginLeft:"2%"
    ,marginRight:"2%"}}>

        <Image style={{}}
              source={require('../../assets/ap2.png')}
        />

        <Text style={{color:"#007961",fontSize:12}}>Travel Deals</Text>

    </TouchableOpacity>

    <TouchableOpacity  style={{width:"35%",height:110}}>

     

    </TouchableOpacity>

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
    
   
  },

  


})


export default E1;