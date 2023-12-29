import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MCardsProfile =props=> {

  //const navigation=useNavigation();

  return (


    <>

<View style={styles.container}>



    <Image style={{ }} source={props.path}
             
            />

    <View style={{flexDirection:"column",marginLeft:"5%"
  
    }}>


   <Text style={{color:"#545454", fontSize:20, fontWeight:"bold"}}>Dr. Jame Gordone</Text> 
   <Text style={{color:"#00A081", fontSize:18}}>Cardiologist</Text> 
    </View>


</View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

 
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"row",
    marginTop:20,
    marginLeft:"3%"
   
  },

  
 


})


export default MCardsProfile;