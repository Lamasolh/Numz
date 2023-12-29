import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Image,ActivityIndicator,  TouchableOpacity} from 'react-native';


const Contact =props=> {


 
 
  return (
 

    <View style={styles.container}>
     
    <View style={{padding:15,height:120,}}>

   <View><Text style={{fontSize:18, color:"#00A081"}}>{props.name}</Text></View> 
    
    <View style={styles.container2}>

    <View>
    <Text style={{fontSize:10,color:"#ADADAD"}}>Created Date</Text>
    <Text style={{fontSize:10, marginTop:10}}>12/12/2022</Text>
    </View>

    <View style={{marginLeft:18}}>
    <Text style={{fontSize:10,color:"#ADADAD"}}>By</Text>
    <Text style={{fontSize:10, marginTop:10}}>John Doe</Text>
    </View>

    <View  style={{marginLeft:18}}>
    <Text style={{fontSize:10,color:"#ADADAD"}}>To</Text>
    <Text style={{fontSize:10 , marginTop:10}}>John Doe</Text>
    </View>
    </View>

    </View>

    <View style={{ width:"25%", height:40}}>

    <TouchableOpacity style={styles.container3}
            onPress={() => navigation.navigate('')}>

  

    <Text style={{color:"white"}}>View</Text>



    </TouchableOpacity>
    </View>
    
    </View>
    

  );
};

const styles = StyleSheet.create({
    container: {
   
       
        height:120,
        width:"100%",   
        elevation:15,
        borderRadius:18,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        overflow:"hidden",
       
  },

  container2:{

    marginTop:10,
  
  

    flexDirection:"row",
   
    
  },
  container3:{
    backgroundColor:"#00A081",
    borderRadius:20,
    width:"100%",
    padding:8,

    justifyContent:"center",
    alignItems:"center"
  }

});


export default Contact
