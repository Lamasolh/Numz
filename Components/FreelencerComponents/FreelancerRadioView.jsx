import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import { RadioButton } from 'react-native-paper';
const RadioV = props => {
 
    const [checked, setChecked] = React.useState('unchecked');
    const [color, setcolor] = React.useState('#D1D1D1');
  return (
    <>

  

   
    
        <View style={{  justifyContent:"flex-start",
             alignItems:"center",
            width:"100%",
            marginTop:20,
            borderWidth:3,
            borderColor:color,
            borderRadius:25,
            height:60,
            flexDirection:"row",}}>

               
                
            <RadioButton 
            marginLeft={"2%"}
            value="first"
            color='#00A081'
            
            uncheckedColor={"#00A081"}
            status={ checked === 'first'? 'checked' : 'unchecked' }
            onPress={() => {setChecked('first'), setcolor('#00A081')}}
            />

            <Text style={{color:"#72777A", marginLeft:"2%"}}>{props.title}</Text>
            </View>
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

  

 
  

   
  },


})

export default RadioV;