import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const SearchbarM =props=> {



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
    <Image style={{marginLeft:"5%" }}
              source={require('../../assets/profile.png')}
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
    width:"80%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default SearchbarM;