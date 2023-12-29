import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Searchbar =props=> {


  return (


    <>



 
<View style={styles.container}>

    <View style={styles.greytextinput} >
    
      <TextInput placeholder='Search'  style={{paddingLeft:35, paddingRight:35}} /> 
  
      <Image style={{ position:"absolute", left:10, top:10, tintColor:"#757575"}}
              source={require('../../assets/search.png')}
        />

        <Image style={{ position:"absolute", left:"90%", top:9}}
              source={require('../../assets/searchicon.png')}
        />

    </View>
    <Image style={{marginLeft:"3%" }}
              source={require('../../assets/profilesearch.png')}
        />
    </View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
   
  },

  

  greytextinput:{
    width:"75%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default Searchbar;