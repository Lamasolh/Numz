import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const HA =props=> {


  return (


    <>



 
<View style={styles.container}>

   <View style={{width:"50%",height:140,backgroundColor:"#E6F2F0",borderRadius:25,paddingTop:"5%"
    ,flexDirection:"column"}}>
    
    <View style={{flexDirection:"row",paddingLeft:"20%",alignItems:"center"}}>
   <Image style={{ marginRight:"5%"}}
                    source={require('../../assets/heart1.png')}
                  />

    <Text style={{color:"#007961",fontSize:17}}>Heart Rate</Text>
    </View>

    <View style={{marginTop:"15%",paddingLeft:"20%",alignItems:"center",flexDirection:"row"}}>

        <Text style={{fontSize:35,color:"#007961",fontWeight:"bold"}}>78</Text>
        <Text style={{color:"#007961"}}> bpm</Text>
    </View>

   </View>



   <View style={{width:"50%",height:140,backgroundColor:"#E6F2F0",borderRadius:25,paddingTop:"5%"
    ,flexDirection:"column",marginLeft:"5%"}}>
    
    <View style={{flexDirection:"row",paddingLeft:"20%",alignItems:"center"}}>
   <Image style={{ marginRight:"5%"}}
                    source={require('../../assets/exer2.png')}
                  />

    <Text style={{color:"#007961",fontSize:17}}>Exercise</Text>
    </View>

    <View style={{marginTop:"15%",paddingLeft:"20%",alignItems:"center",flexDirection:"row"}}>

        <Text style={{fontSize:35,color:"#007961",fontWeight:"bold"}}>24</Text>
        <Text style={{color:"#007961"}}> min</Text>
    </View>

   </View>
  
</View>


<View style={styles.container}>

   <View style={{width:"50%",height:140,backgroundColor:"#E6F2F0",borderRadius:25,paddingTop:"5%"
    ,flexDirection:"column"}}>
    
    <View style={{flexDirection:"row",paddingLeft:"20%",alignItems:"center"}}>
   <Image style={{ marginRight:"5%"}}
                    source={require('../../assets/walk3.png')}
                  />

    <Text style={{color:"#007961",fontSize:17}}>Walking</Text>
    </View>

    <View style={{marginTop:"15%",paddingLeft:"20%",alignItems:"center",flexDirection:"row"}}>

        <Text style={{fontSize:35,color:"#007961",fontWeight:"bold"}}>10</Text>
        <Text style={{color:"#007961"}}>  km</Text>
    </View>

   </View>



   <View style={{width:"50%",height:140,backgroundColor:"#E6F2F0",borderRadius:25,paddingTop:"5%"
    ,flexDirection:"column",marginLeft:"5%"}}>
    
    <View style={{flexDirection:"row",paddingLeft:"20%",alignItems:"center"}}>
   <Image style={{ marginRight:"5%"}}
                    source={require('../../assets/sleep4.png')}
                  />

    <Text style={{color:"#007961",fontSize:17}}>Sleep</Text>
    </View>

    <View style={{marginTop:"15%",paddingLeft:"20%",alignItems:"center",flexDirection:"row"}}>

        <Text style={{fontSize:35,color:"#007961",fontWeight:"bold"}}>8</Text>
        <Text style={{color:"#007961"}}> hrs</Text>
    </View>

   </View>
  
</View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
 
   
  },

  

  greytextinput:{
    width:"80%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default HA;