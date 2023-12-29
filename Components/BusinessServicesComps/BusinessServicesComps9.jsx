import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import Blackbtn from '../HomeComponents/GeneralComponents/Inputs/Button/Blackbtn';
import Inputandselectlanguages from '../BusinessServicesComps/Inputandselectlanguages';
const BusinessComp9 = props => {
 
    const Input = () => {
      
        return <Inputandselectlanguages/>
        
 
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

          <Text style={{fontWeight:"bold", fontSize:23}}>{props.title1} {'\n'}{props.title2} {'\n'}{props.title3}</Text>
        </View>

        <View style={{width:"100%", backgroundColor:"grey", flexDirection:"row",padding:10,
        marginTop:30,height:90,borderColor:"black", borderWidth:2, justifyContent:"space-between", alignItems:"center"}}>

        <Text style={{fontWeight:"bold"}}>Languages</Text>
        <Text style={{fontWeight:"bold"}}>Proficiency</Text>
        </View>


        <View style={{justifyContent:"space-between", alignItems:"center", marginTop:50,
       }}>
         
         
        {inputList}
         
        </View>


        <View style={{justifyContent:"center", alignItems:"center"}}>
    <TouchableOpacity onPress={onAddBtnClick} style={{width:"80%",borderWidth:2, borderColor:"lightgrey", height:55
    ,marginTop:70, justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
        <Text >+  </Text>
        <Text >Add Language</Text>
    </TouchableOpacity>
    </View>

        <Blackbtn title="Continue"/>
    
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

export default BusinessComp9;