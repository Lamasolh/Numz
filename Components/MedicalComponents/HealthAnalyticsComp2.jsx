import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const HA2 =props=> {

  return (


    <>



 
<View style={styles.container}>

<Image style={{ marginRight:"5%"}}
                    source={require('../../assets/julian.png')}
                  />

<View style={{flexDirection:"column"}}>

<View style={{flexDirection:"row",alignItems:"center"}}>

<Text style={{fontSize:20,fontWeight:"bold"}}>{props.title}</Text>
<Text  style={{marginLeft:"5%",color:"#A3A3A3"}}>{props.time}</Text>
</View>

<Text style={{fontSize:15}}>{props.test}</Text>
</View>
  
</View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    marginTop:"2%",
    alignItems:"center",
    flexDirection:"row",
 
   
  },

  

  greytextinput:{
    width:"80%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default HA2;