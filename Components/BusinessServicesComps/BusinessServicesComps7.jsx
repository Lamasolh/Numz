import { useNavigation } from '@react-navigation/native';
import React, { useState ,useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent,TextInput} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';


const BusinessComp7 = props => {

    const Input = () => {
      
            return <View style={{ width:"100%", borderWidth:3,borderColor:"black", height:100, marginTop:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:15}}><Text style={{fontSize:13}}>Project Managment {'\n'} company x</Text><Text style={{fontSize:13}}>1 year and half</Text><Text> <Image style={{}}source={require('../../assets/cal.png')}/></Text><Text > <Image  style={{}}source={require('../../assets/cal.png')}/></Text></View>
             
     
      };
      
      const [inputList, setInputList] = useState([]);


      const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
      };

    

  return (
    <>

  

        <View style={styles.newcontainer}>
        

        <Text style={{color:"black", fontWeight:"bold"}}>As</Text>
            
        
        </View>

        <View style={{marginTop:20}}>

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1} </Text>
        </View>

        <View style={{marginTop:40}}>

        <Text style={{}}>Make sure that the below experiences are {'\n'}added correctly</Text>
        </View>

       
        <View style={{justifyContent:"center", alignItems:"center", marginTop:50,
       }}>
         
         
        {inputList}
         
        </View>
       
     
        <View style={{justifyContent:"center", alignItems:"center"}}>
    <TouchableOpacity onPress={onAddBtnClick} style={{width:"80%",borderWidth:2, borderColor:"lightgrey", height:55
    ,marginTop:70, justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
        <Text >+  </Text>
        <Text >Add Experience</Text>
    </TouchableOpacity>
    </View>

    <View style={{marginTop:60}}>
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

export default BusinessComp7;

















   // const [visible, setVisible] = useState(true);
   
   /*
    const removeElement = () => {
      setVisible((prev) => !prev);
    };

    */  