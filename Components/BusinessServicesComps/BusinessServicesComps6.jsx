import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent,TextInput
} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import CheckBox from 'expo-checkbox';

const BusinessComp6 = props => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);


  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1}</Text>
        </View>

        <View style={{marginTop:40}}>

        <Text style={{}}>Select the field that You are expert at to {'\n'}make sure we filter the projects that best
        {'\n'}matches your resume</Text>
        </View>

        <View style={{flexDirection:"row", marginTop:20}}>
        <CheckBox
         value={isSelected}
         onValueChange={setSelection}
        
       
    />
     <Text style={{marginLeft:"5%"}}>Project Manager</Text>
     </View>


     <View style={{flexDirection:"row", marginTop:20}}>
        <CheckBox
    
    value={isSelected2}
    onValueChange={setSelection2}
        
       
    />
     <Text style={{marginLeft:"5%"}}>Senior Business Analysis</Text>
     </View>



     <View style={{flexDirection:"row", marginTop:20}}>
        <CheckBox
    
    
    value={isSelected3}
    onValueChange={setSelection3}
   
        
       
    />
     <Text style={{marginLeft:"5%"}}>Junior Business Analysis</Text>
     </View>



     <View style={{flexDirection:"row", marginTop:20}}>
        <CheckBox
    
      
    value={isSelected4}
    onValueChange={setSelection4}
   
        
       
    />
     <Text style={{marginLeft:"5%"}}>Customer service</Text>
     </View>


     <View style={{flexDirection:"row", marginTop:20}}>
        <CheckBox
    
    value={isSelected5}
    onValueChange={setSelection5}
   
       
    />
     <Text style={{marginLeft:"5%"}}>Adminstrative Assistant</Text>
     </View>
    
    <View style={{justifyContent:"center", alignItems:"center"}}>
    <TouchableOpacity style={{width:"80%",borderWidth:2, borderColor:"lightgrey", height:55
    ,marginTop:70, justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
        <Text >+  </Text>
        <Text >Add Experience</Text>
    </TouchableOpacity>
    </View>

    <View style={{marginTop:10}}>
    <Blackbtn title="Continue"/>
     
    </View>

    

   
    </>



  );
}


const styles = StyleSheet.create({

    Textinputcontainer: {
        borderWidth: 2,
        marginTop: 15,
        borderColor:"lightgrey",
        borderRadius:5,
        paddingTop: 5,
        paddingLeft: 5,  height: 120,
        backgroundColor:"white"
 
    },
    text: {
        fontSize: 11,

    },

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

export default BusinessComp6;