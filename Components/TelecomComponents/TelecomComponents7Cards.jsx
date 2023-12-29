import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import BigButtongrey from "../HomeComponents/GeneralComponents/Inputs/Button/BigButtongrey";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
const Cards6 =props=> {



  return (


    <>



 
    <View style={styles.container}>

        <View>
            <Text style={{fontWeight:"bold", fontSize:15}}>Cypher.com</Text>
        </View>

        <View>
            <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
        </View>

        <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        <Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$197</Text>
     

        </View>

    </View>



    <View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>Lazner.io</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$452</Text>


</View>

</View>


<View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>paga.com</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$900</Text>


</View>

</View>


<View style={{justifyContent:"space-between",alignItems:"center",marginTop:"25%",flexDirection:"row",
    padding:18}}>

    <View>
        <Text style={{color:"#AEAEB3",fontSize:15, fontWeight:"bold"}}>Total </Text>
    </View>

    <View>
        <Text style={{color:"#00A081",fontSize:20, fontWeight:"bold"}}>$ 1,701.59 </Text>
    </View>

</View>
<BigButton3 title="Confirm Order" navigate='TelecomScreens5'/>




    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    elevation:15,
    backgroundColor:"white",
    padding:20,
    marginTop:20,
    borderRadius:15
   
  },

  

  greytextinput:{
    width:"80%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default Cards6;