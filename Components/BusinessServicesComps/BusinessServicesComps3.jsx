import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent,TextInput} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';

const BusinessComp3 = props => {
 
    const [isFocused, setFocused] = useState(false);
    const [isFocused2, setFocused2] = useState(false);
    const [isFocused3, setFocused3] = useState(false);
  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1} {'\n'}{props.title2} {'\n'}{props.title3}</Text>
        </View>



        <View style={{marginTop:30}}>
      <TextInput
        placeholder="To earn more income"
        style={{
          borderColor: isFocused ? '#3545A7' : 'lightgrey',
          borderWidth: 2,
          padding:8,
          borderRadius:5
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>


    <View style={{marginTop:30}}>
      <TextInput
        placeholder="To get more experience and find a full time job"
        style={{
          borderColor: isFocused2 ? '#3545A7' : 'lightgrey',
          borderWidth: 2,
          padding:8,
          borderRadius:5
        }}
        onFocus={() => setFocused2(true)}
        onBlur={() => setFocused2(false)}
      />
    </View>


    <View style={{marginTop:30}}>
      <TextInput
        placeholder="I'm exploring my talents"
        style={{
          borderColor: isFocused3 ? '#3545A7' : 'lightgrey',
          borderWidth: 2,
          padding:8,
          borderRadius:5
        }}
        onFocus={() => setFocused3(true)}
        onBlur={() => setFocused3(false)}
      />
    </View>

    <View style={{marginTop:100, justifyContent:"flex-end", width:"100%",alignItems:"flex-end"}}>

    <Image style={{}}source={require('../../assets/cal.png')}/>

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

export default BusinessComp3;