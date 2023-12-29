import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Tdoctors =props=> {


    const navigation=useNavigation();
    
  return (


    <>
 
    <TouchableOpacity   style={styles.container} onPress={() => navigation.navigate(props.navigate)}>

        
      <Image style={{marginLeft:5}}
          source={props.path}
        />

        <View style={{marginLeft:20}}>

            <Text style={{fontWeight:"bold"}}>{props.dname}</Text>
            <Text style={{marginTop:5,fontSize:12,color:"#AAAAAA"}}>{props.hospitalname}</Text>

            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
            <Image style={{marginTop:5}}
              source={require('../../assets/mstars.png')}
            />
            <Text style={{fontSize:10,color:"#AAAAAA"}}>(1221)</Text>
            </View>

        </View>
  
    </TouchableOpacity>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    marginTop:20,
  },

  

  greytextinput:{
    width:"80%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default Tdoctors;