import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import InputFreelanguages from '../FreelencerComponents/InputFreelanguages';
const AddLang = props => {
 
    const Input = () => {
      
        return <InputFreelanguages/>
        
 
  };
  
  const [inputList, setInputList] = useState([]);


  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <>
       

        <View style={{width:"100%", flexDirection:"row",padding:10,
       justifyContent:"space-between", alignItems:"center", marginTop:"5%"}}>

        <Text style={{fontWeight:"bold", fontSize:12}}>Languages</Text>
        <Text style={{fontWeight:"bold", paddingRight:"20%", fontSize:12}}>Proficiency</Text>
        </View>


        <View style={{justifyContent:"space-between", alignItems:"center", marginTop:10,
       }}>
         
         
        {inputList}
         
        </View>


        <View style={{justifyContent:"center", alignItems:"center"}}>

      <TouchableOpacity  onPress={onAddBtnClick} style={{marginTop:"10%"}}>  
      <Image style={{}} source={require('../../assets/plus.png')}/>
      </TouchableOpacity>
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

export default AddLang;