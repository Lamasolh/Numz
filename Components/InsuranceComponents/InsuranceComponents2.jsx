import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';

const Inscomp2 = props => {
 

  return (
    <>


   

    <View style={{flexDirection:"row"}}>

        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/insl1.png')}/>
            <Text style={{color:"#72777A",marginTop:5, fontSize:11}}>New Package</Text>
       </View>

       <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/insl2.png')}/>
            <Text style={{color:"#72777A",marginTop:5, fontSize:11}}>New Package</Text>
        </View>

        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/insss.png')}/>
            <Text style={{color:"#72777A",marginTop:5, fontSize:11}}>New Package</Text>
        </View>

        <View style={styles.newcontainer}>

        <Image style={{}} source={require('../../assets/insl4.png')}/>
            <Text style={{color:"#72777A",marginTop:5, fontSize:11}}>New Package</Text>
        </View>

    
     
    </View>

    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

  

   justifyContent:"center",
   
    marginTop:20,
    flexDirection:"column",
    borderRadius:15,
    marginLeft:15,
   
  },


})

export default Inscomp2;