import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Searchbar =props=> {


  return (


    <>



 
<View style={styles.container}>

    <View style={styles.greytextinput} >
    
      <TextInput placeholder='Search'  style={{paddingLeft:35, paddingRight:35}} /> 
  
      <Image style={{ position:"absolute", left:10, top:5, tintColor:"#757575"}}
              source={require('../../assets/search.png')}
        />

        <Image style={{ position:"absolute", left:235, top:4}}
              source={require('../../assets/searchicon.png')}
        />

    </View>
    </View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"center",
    alignItems:"center"
   
  },

  

  greytextinput:{
    width:"85%",
    backgroundColor:"#F3F3F3",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default Searchbar;