import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Services = props => {
 
//const navigation=useNavigation();
  return (
    <>
   





    
    
  <TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate(props.navigate)}>
<View style={{  backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,width:100}}>
    <View  style={{ width:"100%", height:70, position:"relative", justifyContent:"center",alignItems:"center" }}>

 
  <Image style={{ width:"56%", height:55 ,marginTop:8}}
                source={require('../../assets/back.png')}

                    
     />
  

<Image style={{  position:"absolute", left:"40%", top:"40%",width:20 }}
        source={props.imageUri}

                    
     />
     </View> 

     <Text style={{color:"#007961", fontSize:12,textAlign:'center',padding:5}}>{props.title}</Text>
     </View>
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