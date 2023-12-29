import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent
,TextInput,Switch} from 'react-native';
import Smallselect from '../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Smallselect';
import SmallInput from '../../Components/HomeComponents/GeneralComponents/Inputs/SmallInput';
const ATA = props => {


  return (
    <>

  

  <View  style={styles.newcontainer}>
  
    <SmallInput  label="Amount"/>
    <View>
    <Image style={{ marginTop:"100%" }}
              source={require('../../assets/convert.png')}
            />
    </View>

    <Smallselect title="Currency"/>

</View>
   </>
    
  );
}


const styles = StyleSheet.create({



  newcontainer:{

 
    width:"100%",
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },
  



})

export default ATA;