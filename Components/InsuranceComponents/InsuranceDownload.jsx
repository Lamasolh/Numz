import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';

const InsDownload = props => {
 

  return (

    <>

   

        <View style={{justifyContent:"center", alignItems:"center"}}>
        <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center",marginTop:"5%"
    ,  height:80,elevation:20,backgroundColor:"white", borderRadius:20, width:"90%"}}>

            <Text style={{fontWeight:"bold"}}>Certificate of  currency</Text>

            <TouchableOpacity style={{backgroundColor:"#00A081",
            width:"40%", height:55, borderRadius:35, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
            <Image style={{ }}
             source={require('../../assets/downicon.png')}/>
            <Text style={{color:"white"}}>Download</Text>
            </TouchableOpacity>
        </View>

        </View>

        <View style={{justifyContent:"center", alignItems:"center"}}>
        <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center",marginTop:"5%"
    ,  height:80,elevation:20,backgroundColor:"white", borderRadius:20, width:"90%"}}>

            <Text style={{fontWeight:"bold"}}>Product  disclosure {'\n'}statement</Text>

            <TouchableOpacity style={{backgroundColor:"#00A081",
            width:"40%", height:55, borderRadius:35, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
            <Image style={{ }}
             source={require('../../assets/downicon.png')}/>
            <Text style={{color:"white"}}>Download</Text>
            </TouchableOpacity>
        </View>

        </View>



    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

   
   
  },


})

export default InsDownload;