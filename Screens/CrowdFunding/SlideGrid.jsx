import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const SlideGrid= props => {
 
//const navigation=useNavigation();
  return (
    <>
  <TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate(props.navigate)}>
<View style={{
    borderRadius: 12,width:100}}>
    <View  style={{ width:"100%", height:70, justifyContent:"center",alignItems:"center" }}>

 
  
  

<Image style={{  position:"absolute", left:"0%", top:"0%",width:'90%',height:90 }}
        source={props.imageUri}

                    
     />
     </View> 
     </View>
    </TouchableOpacity>

  
  
    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    height:115,
    width:"18%",
     borderRadius:20,
     alignItems:"center",
    flexDirection:"column",
   marginLeft:20
   
   

  },



})

export default SlideGrid;