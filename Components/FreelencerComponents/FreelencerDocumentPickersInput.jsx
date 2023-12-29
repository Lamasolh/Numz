import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FreelencerDocumentPickersInput = (props) => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "application/msword"] //choose pdf files and word


    });
    console.log(result.uri);
    console.log(result);
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
      <TouchableOpacity onPress={pickDocument} >
        <Image style={{top:56,left:195,zIndex:5}} source={require('../../assets/file.png')} />
        <View style={styles.Textinputcontainer}>
                <View style={{backgroundColor:'#F6F6F6'}}>

                <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)'}} keyboardType={props.type}>{props.label}</Text>

                <TextInput style={{color:'rgba(0, 160, 129, 1)',height:28,paddingLeft:10}} placeholder={props.placeholder} />
                </View>
            </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // background: {
  //   backgroundColor:
  //     "#E3E5E5",
  // },
  // file: {
  //   color: "black",
  //   marginHorizontal: 145,
  // },
  // button: {
  //   marginHorizontal: 60,
  // },
  // container: {
  //   marginTop: 10,
  //   // padding: 20
  // },
  Textinputcontainer: {
    borderWidth: 2,
    marginTop: 15,
    width:300,
    borderColor: "#E3E5E5",
    borderRadius: 8,
    paddingTop: 0,
    paddingLeft: 0, height: 45,
  },
  text: {
    fontSize: 11,

  }
});
export default FreelencerDocumentPickersInput;
/*



import {View, Text, Button,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

export default function App2() {
    
    const openDocument = async () => {
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf,DocumentPicker.types.docx],
            })
            console.log(
              res.uri,
              res.type, 
              res.name,
              res.size,
            )
          } catch (err) {
            if(DocumentPicker.isCancel(err)) {
                console.log("user cancelled");
            }
        }
      }

  return (
    <View style={{alignItems:"center", justifyContent:"center", width:"100%"}}>
    <TouchableOpacity  onPress={openDocument} style={{width:"80%", height:50, backgroundColor:"white"
   ,borderWidth:2, borderColor:"lightgrey", marginTop:50, borderRadius:5,
   alignItems:"center", justifyContent:"space-around",flexDirection:"row"
   }}>

     <Text>Upload Your Resume</Text>

     <Image style={{}}source={require('../../assets/cal.png')}/>

    </TouchableOpacity>
    </View>
  );
}





*/