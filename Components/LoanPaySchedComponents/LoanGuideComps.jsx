import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const FirstLoanscomp = props => {
 
//const navigation=useNavigation();
  return (
    <>
  
  <View style={styles.maincontainer}>

      <View style={styles.container}>

       <View style={styles.containerinside}>
            <Text style={{color:"#000000", fontWeight:"bold"}}>{props.title}</Text>
       </View>

        <Text style={{padding:15, color:"#595959"}}>{props.txt}</Text>
      </View>

     
       

        </View>


    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent:"space-around",
   
  

  },

  container:{
  
    alignItems:"center",
    borderRadius:20,
    borderWidth:2,
    borderColor:"#F3F3F3",
    width:"100%",
    height:200,
  },

  containerinside:{

    width:"100%",
    height:50,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:"#F3F3F3",
    justifyContent:"center",
    padding:15,
  }


})

export default FirstLoanscomp;