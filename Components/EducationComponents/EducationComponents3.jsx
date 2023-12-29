import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';

const Educ3 = props => {
 
  const navigation=useNavigation();
  return (
    <>

  
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>


        <View style={styles.newcontainer}>


            
         
            <Image style={{}} source={require('../../assets/eduicon1.png')}/>
         
          
            <Text style={{color:"#007961", fontSize:8, marginTop:10}}>Business</Text> 
      
        </View>

        <View style={styles.newcontainer}>


            
         
        <Image style={{}} source={require('../../assets/edpc.png')}/>


        <Text style={{color:"#007961", fontSize:8, marginTop:10}}>Computer Science</Text> 

        </View>

        <View style={styles.newcontainer}>


            
         
<Image style={{}} source={require('../../assets/healthpc.png')}/>


<Text style={{color:"#007961", fontSize:8, marginTop:10}}>Health</Text> 

</View>


<View style={styles.newcontainer}>


            
         
<Image style={{}} source={require('../../assets/eduicon1.png')}/>


<Text style={{color:"#007961", fontSize:8, marginTop:10}}>Business</Text> 

</View>
           
       </View>

      




      





    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{
  
    justifyContent:"center",
    alignItems:"center",
    width:"24%",
    height:90,
    elevation:10,
    borderRadius:15,
    backgroundColor:"white"
    , borderWidth:2, 
    borderColor:"#00534217",
    flexDirection:"column",
  
   
  },


})

export default Educ3;