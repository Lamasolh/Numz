
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const InvestingComponents1 = props => {
 
    const navigation=useNavigation()
  return (
    <>

  
    <View style={{flexDirection:"row"}}>
        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/inscar.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11}}>Vehicle Insurance</Text>
       </View>

       <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/ins2.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11}}>Mobile Insurance </Text>
        </View>

        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/ins3.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11}}>Property Insurance</Text>
        </View>

     
    </View>


    <View style={{flexDirection:"row"}}>

        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/ins4.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11, textAlign:"center"}}>Professional Indemnity</Text>
       </View>

       <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/ins5.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11}}>Health Insurance </Text>
        </View>

        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/ins6.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11}}>Income Protection</Text>
        </View>

     
    </View>

    <View style={{flexDirection:"row"}}>
        <TouchableOpacity  style={styles.newcontainer}   onPress={() => 
            navigation.navigate('InsuranceScreens2')}>

        <Image style={{}} source={require('../../assets/ins7.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11, textAlign:"center"}}>Cyber Security Insurance</Text>
       </TouchableOpacity>

       <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/ins8.png')}/>
            <Text style={{color:"#007961",marginTop:5, fontSize:11}}>Life Insurance </Text>
        </View>

     

     
    </View>
   
    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

  

   justifyContent:"center",
   alignItems:"center",
    width:"30%",
    height:90,
    shadowColor:"black",
    elevation:10,
    marginTop:20,
    flexDirection:"column",
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    marginLeft:"3%"
  },


})

export default InvestingComponents1;