
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Tcards4 =props=> {
    const navigation=useNavigation();

  return (


    
    <>

 
<View style={styles.container}>



    <View style={styles.profile} >
    

    <Image style={{}}
            source={require('../../assets/teleprofile.png')}
      />

    <Image style={{position:"absolute", top:"80%", left:"20%"}}
            source={require('../../assets/edit.png')}
      />


    </View>
    <View style={{marginTop:"3%"}}>
        <Text style={{fontWeight:"bold", fontSize:18}}>John Doe</Text>
    </View>

    <View style={{marginTop:"2%", flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",width:"100%",marginLeft:"30%"}}>

        <Text style={{fontWeight:"bold", fontSize:18,color:"#9C9C9C"}}>+961 235321</Text>

        <TouchableOpacity     onPress={() => navigation.navigate('TelecomScreens3')}> 
        <Image style={{}}
            source={require('../../assets/edit.png')}
      />
        </TouchableOpacity>
    </View>

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
   
 
   
  },

  profile:{

    position:"relative",
   
  
  }
  


})


export default Tcards4;