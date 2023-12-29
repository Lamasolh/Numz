import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Edu4 = props => {
 
const navigation=useNavigation();
  return (
    <>
  
  
  <View style={styles.maincontainer}>

      <View style={styles.container}>

        <View style={{width:"80%"}}>
            <Text style={{color:"#00A081", fontSize:13, fontWeight:"bold"}}>View all your courses in one place!</Text>
        </View>

        <TouchableOpacity  onPress={() =>
              navigation.navigate('')} style={{width:"25%", padding:10, borderRadius:20, backgroundColor:"#E3F5F1", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#00A081"}}>View</Text>
        </TouchableOpacity>



      </View>

        <View>
            <Text style={{ marginTop:10, color:"#7E7E7E", fontSize:13}}>Data Engineering Foundations {'\n'} Specialization</Text>
        </View>

        <View style={{width:"100%", height:20,backgroundColor:"#E3F5F1", marginTop:20,
        borderRadius:20, width:"80%"}}>


        <View style={{width:"50%", height:20,backgroundColor:"#00A081",
        borderRadius:20}}>
            <Text style={{color:"white",textAlign:"right",fontSize:14}}>30%</Text>
        </View>

        </View>
        <View style={{marginTop:"5%", marginLeft:"3%"}}>
        <Image style={{}} source={require('../../assets/dots.png')}/>
        </View>
</View>
    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    padding: 20,
    marginTop:25,
    backgroundColor:"white",
    elevation:12,
    borderRadius:20,
    shadowColor:"grey",

  },

  container:{
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",

  },

  

})

export default Edu4;