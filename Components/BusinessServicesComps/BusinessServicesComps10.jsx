import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import BlackTextArea from '../HomeComponents/GeneralComponents/Inputs/BlackTextArea';
const BusinessComp1 = props => {
 


  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:18, lineHeight:25}}>{props.title1} {'\n'}{props.title2} {'\n'}{props.title3}
          {'\n'}{props.title4}</Text>
        </View>

            <BlackTextArea/>
      
        <View style={{marginTop:50}}>
        <Blackbtn title="Save and continue"/>
        </View>
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