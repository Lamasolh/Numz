import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MedicalComponentsProfile from "./MedicalComponentsProfile";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
const Btns =props=> {


    const navigation=useNavigation();
    

  return (


    <>




<>
<View style={{marginLeft:"5%",paddingLeft:30}}>
<MedicalComponentsProfile  path={require("../../assets/dprofile.png")}/>
</View>

<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"7%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/cal2.png')}
/>

<Text style={{marginLeft:20}}>September 10</Text>
</View>


<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"6%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/clock.png')}
/>

<Text style={{marginLeft:20}}>11:00 AM </Text>
</View>

<View style={styles.btnlogin}>

<TouchableOpacity 
  style={{
    height: 45,
    backgroundColor: '#00A081',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }}
  onPress={() => navigation.navigate('MedicalScreens8')}
>
  <Text style={{ color: 'white' }}>pay</Text>
</TouchableOpacity>


</View>

<View style={{width:"100%",marginTop:30}}>
        <Image style={{width:"100%" }}
        source={require('../../assets/Linecall.png')}
        />
        </View>




        <View style={{marginLeft:"5%",paddingLeft:30}}>
<MedicalComponentsProfile  path={require("../../assets/dprofile.png")}/>
</View>

<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"7%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/cal2.png')}
/>

<Text style={{marginLeft:20}}>September 10</Text>
</View>


<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"6%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/clock.png')}
/>

<Text style={{marginLeft:20}}>11:00 AM </Text>
</View>

<View style={{marginTop:"10%", justifyContent:"space-around", alignItems:"center"
,flexDirection:"row",paddingLeft:30,paddingRight:30}}>

<TouchableOpacity onPress={() => navigation.navigate('MedicalScreens4')} style={{width:"40%",height:50,backgroundColor:"white", borderWidth:2,
borderColor:"#00A081",borderRadius:25,justifyContent:"center",alignItems:"center"}}>

    <Text style={{color:"#00A081"}}>Rechedule</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('MedicalScreens6')} style={{width:"50%",height:50,backgroundColor:"#00A081", borderWidth:2,
borderColor:"#00A081",borderRadius:25,justifyContent:"center",alignItems:"center"}}>

    <Text style={{color:"white"}}>Start Video Call</Text>
</TouchableOpacity>

</View>

</>





    </>
  );
    
}


const styles = StyleSheet.create({

    newcontainer: {

        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation:30,
        padding:30
       
      

    },
    btnlogin: {

        marginTop:"10%",
        width: "100%",
  
        justifyContent: "center",
        
        paddingLeft:45,
        paddingRight:45
    
      },
  


})


export default Btns;