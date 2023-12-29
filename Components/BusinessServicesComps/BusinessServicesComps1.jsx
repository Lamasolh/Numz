import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';

const BusinessComp1 = props => {
 

  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1} {'\n'}{props.title2} {'\n'}{props.title3}</Text>
        </View>


        <View style={{marginTop:30, flexDirection:"row", alignItems:"center"}}>

        <Image source={require('../../assets/cal.png')}/>

        <Text style={{marginLeft:15}}>{props.txt1} {'\n'}{props.txt2}</Text>
        </View>



        <View style={{marginTop:30, flexDirection:"row", alignItems:"center"}}>

        <Image source={require('../../assets/cal.png')}/>

        <Text style={{marginLeft:15}}>{props.txt3} {'\n'}{props.txt4}</Text>
        </View>


        <View style={{marginTop:30, flexDirection:"row", alignItems:"center"}}>

        <Image source={require('../../assets/cal.png')}/>

        <Text style={{marginLeft:15}}>{props.txt5}{'\n'}{props.txt6}</Text>
        </View>



        <View style={{marginTop:100, alignItems:"center"}}>

     

        <Text style={{textAlign:"center", fontSize:13}}>{props.txtbottom1}{'\n'}{props.txtbottom2}</Text>
        </View>

        <Blackbtn title="Get Started"/>
    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding:5,
    backgroundColor:"lightgrey",
    borderWidth:3,
    borderColor:"grey",
   justifyContent:"center",
   alignItems:"center",
    width:"15%",
    height:53,
    borderRadius:30,
    marginTop:20,
   
  },


})

export default BusinessComp1;