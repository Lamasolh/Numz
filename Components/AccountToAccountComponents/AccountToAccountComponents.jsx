import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent
,TextInput,Switch} from 'react-native';

const ATA = props => {


  return (
    <>

  

  <View  style={styles.newcontainer}>
  
  <View>
  <Text style={{color:"white"}}>Available Balance:</Text> 
</View>

<View>
  <Text style={{color:"white"}}>$14,000</Text> 
</View>

</View>
   </>
    
  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 10,
    width:"100%",
    marginTop:10,
    backgroundColor:"#00A081",
    justifyContent:"space-around",
    alignItems:"center",
   borderRadius:20,
   flexDirection:"row",
  },
  



})

export default ATA;