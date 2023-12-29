
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Tcards3 =props=> {


  return (


    
    <>

    <View style={{width:"100%"}}>
<ScrollView horizontal={true}>
<View style={styles.container}>



    <View style={styles.cards} >
    

    <Image style={{}}
            source={require('../../assets/timg1.png')}
      />

    </View>

    <View style={styles.cards} >
    

    <Image style={{}}
            source={require('../../assets/timg2.png')}
      />

    </View>


    <View style={styles.cards} >
    

    <Image style={{}}
            source={require('../../assets/timg1.png')}
      />

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
 
   
  },

  


  cards:{
  
    padding:10,

    justifyContent:"center",
    alignItems:"center",
    marginLeft:10,
  
  }
  


})


export default Tcards3;