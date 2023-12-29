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

const UploadFile = () => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf","application/msword"] //choose pdf files and word
    
   
    });
    console.log(result.uri);
    console.log(result);
  };

  return (
    <View style={{alignItems:"center", justifyContent:"center", width:"100%"}}>
    <TouchableOpacity  onPress={pickDocument} style={{width:"80%", height:130, backgroundColor:"#00A0810F"
   ,borderWidth:2, borderStyle:"dotted", borderColor:"#00A081", marginTop:20, borderRadius:55,
   alignItems:"center", justifyContent:"center",flexDirection:"row"
   }}>
      <Image style={{}}source={require('../../assets/attach.png')}/>
     <Text style={{marginLeft:"2%", color:"#00A081"}}>Attach File</Text>

    

    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor:
      "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
  },
  file: {
    color: "black",
    marginHorizontal: 145,
  },
  button: {
    marginHorizontal: 60,
  },
});
export default UploadFile;
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