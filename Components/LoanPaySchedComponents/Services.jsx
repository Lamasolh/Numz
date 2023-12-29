import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Services = props => {
 
const navigation=useNavigation();
  return (
    <>
   
    
  <TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate(props.navigate)}>

    <View  style={{ width:"58%", height:82, position:"relative", justifyContent:"center",alignItems:"center" }}>

 
  <Image style={{ width:"100%", height:63 ,marginTop:8}}
                source={require('../../assets/bgicons.png')}

                    
     />
  

<Image style={{  position:"absolute", left:"33%", top:"40%" }}
        source={props.imageUri}

                    
     />
     </View> 

     <Text style={{color:"#007961", fontSize:12}}>{props.title}</Text>

    </TouchableOpacity>

  
  
    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    padding: 5,
    height:115,
    width:"18%",
    elevation:12,
    backgroundColor:"white",
     marginTop:15,
     borderRadius:20,
     alignItems:"center",
    flexDirection:"column",
   marginLeft:10
   
   

  },



})

export default Services;