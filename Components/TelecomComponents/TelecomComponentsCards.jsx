
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Tcards =props=> {
  const navigation=useNavigation();

  return (

    <>

    <View style={{width:"100%"}}>
<ScrollView horizontal={true}>
<View style={styles.container}>



<TouchableOpacity   onPress={() => navigation.navigate('TelecomScreens6')} style={styles.cards} >
    
  
      <Image style={{}}
              source={require('../../assets/ticon1.png')}
        />
   
        <Text style={{color:"#007961", fontSize:10, marginTop:5}}>Domain Names</Text>

    </TouchableOpacity>

    <View style={styles.cards} >
    
  
      <Image style={{}}
              source={require('../../assets/ticon2.png')}
        />

        <Text style={{color:"#007961", fontSize:10, marginTop:5}}>My Plan</Text>

    </View>

    <TouchableOpacity   onPress={() => navigation.navigate('TelecomScreens3')} style={styles.cards} >
    
  
    <Image style={{}}
            source={require('../../assets/ticon3.png')}
      />

      <Text style={{color:"#007961", fontSize:10, marginTop:5}}>Add/Replace Sim</Text>

  </TouchableOpacity>

  <View style={styles.cards} >
    
  
    <Image style={{}}
            source={require('../../assets/ticon3.png')}
      />

      <Text style={{color:"#007961", fontSize:10, marginTop:5}}>Add/Replace Sim</Text>

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
    paddingLeft:40,
   
  },

  


  cards:{
    width:"26%",
    height:90,
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


export default Tcards;