import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MCards =props=> {

  const navigation=useNavigation();

  return (


    <>

<View style={styles.container}>

    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity onPress={() => navigation.navigate('MedicalScreens2')} style={styles.cards}>

    <Image style={{ }}
              source={require('../../assets/micon1.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10}}>Cardiology</Text> 
   
    </View>



    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards}>

    <Image style={{ }}
              source={require('../../assets/micon2.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10}}>Neurology</Text> 
   
    </View>



    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards}>

    <Image style={{ }}
              source={require('../../assets/micon3.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10}}>Dermatology</Text> 
   
    </View>



    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards}>

    <Image style={{ }}
              source={require('../../assets/micon4.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10}}>Gynecology</Text> 
   
    </View>

 


</View>




<View style={styles.container}>

    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards2}>

    <Image style={{ }}
              source={require('../../assets/micon5.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10,textAlign:"center"}}>General{"\n"}Health</Text> 
   
    </View>



    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards2}>

    <Image style={{ }}
              source={require('../../assets/micon6.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10,textAlign:"center",}}>Clinical{"\n"}psychology</Text> 
   
    </View>



    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards}>

    <Image style={{ }}
              source={require('../../assets/micon2.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10}}>Dermatology</Text> 
   
    </View>



    <View style={{flexDirection:"column", justifyContent:"center",alignItems:"center",
    width:"100%",
    height:65,}}>

    <TouchableOpacity style={styles.cards}>

    <Image style={{ }}
              source={require('../../assets/micon3.png')}
        />
    </TouchableOpacity>

   <Text style={{marginTop:5,color:"#545454", fontSize:10}}>Gynecology</Text> 
   
    </View>

 


</View>


    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
    marginTop:20,
   
  },

  
  cards:{

    width:"20%",
    backgroundColor:"white",
    height:65,
    borderRadius:50,
    elevation:15,
    justifyContent:"center",
    alignItems:"center"
  },

  cards2:{

    width:"20%",
    backgroundColor:"white",
    height:65,
    borderRadius:50,
    elevation:15,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  }


})


export default MCards;