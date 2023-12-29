import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';

const LP = props => {

  return (
    <>

      <View style={styles.container}>

        <View>
            <Text style={{fontSize:13, marginLeft:5}}>Frequency</Text>
        </View>

       
        <View style={{width:"30%"}}>
        <TouchableOpacity style={{width:"90%", height:35, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"
        ,marginLeft:15}}>

        <Text style={{color:"white", fontSize:12}}>Daily</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{width:"90%", height:35, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"
        ,marginLeft:15, marginTop:15}}>

        <Text style={{color:"white", fontSize:12}}>Monthly</Text>

        </TouchableOpacity>
        </View>
        <View style={{width:"50%"}}>
        <TouchableOpacity style={{width:"50%", height:35, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"
        ,marginLeft:15}}>

        <Text style={{color:"white", fontSize:12}}>Weekly</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{width:"50%", height:35, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"
        ,marginLeft:15,marginTop:15}}>

        <Text style={{color:"white", fontSize:12}}>Yearly</Text>

        </TouchableOpacity>
        </View>
       


      </View>

      <View style={styles.container2}>

      <View>
            <Text style={{fontSize:13, marginLeft:5}}>End Date</Text>
        </View>

        <View style={{width:"100%"}}>

        <Image style={{marginLeft:"5%", width:"57%",height:300}}
            source={require('../../assets/png.png')}
          />

        </View>

      </View>


      

    </>



  );
}


const styles = StyleSheet.create({

  container: {
    marginTop:15,
    flexDirection:"row",
  },

  container2:{

    marginTop:15,
    flexDirection:"row",
  }

  

})

export default LP;