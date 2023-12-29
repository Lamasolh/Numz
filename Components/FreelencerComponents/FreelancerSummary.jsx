import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';

import InputFreelanguages from '../FreelencerComponents/InputFreelanguages';
const FSumm = props => {
 
   

  return (
    <>
       

     
    <View style={{ alignItems: 'center', justifyContent: "flex-start", marginTop:30, alignItems:"center", flexDirection:"row",}}>

<View style={{position:"relative"}}>



 
  <Image style={{}}source={require('../../assets/face.png')}/>   
  <Image style={{position:"absolute", left:"60%", top:"70%"}}source={require('../../assets/edit.png')}/>   
     
</View>

      <View style={{flexDirection:"column", justifyContent:"center", alignItems:"flex-start", marginLeft:"5%"}}>

    <View style={{}}>
      <Text style={{color:"black", fontWeight:"bold" }}>John Doe</Text>
    </View>

    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",marginTop:"2%"}}>

    <Image style={{}}source={require('../../assets/location.png')}/> 

    <Text style={{color:"#9C9C9C", marginLeft:"5%"}}>Lebanon</Text>
 
  </View>
  </View>



  </View>
    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

   
   
  },


})

export default FSumm;