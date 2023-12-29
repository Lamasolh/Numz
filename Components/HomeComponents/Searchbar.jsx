import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Search =props=> {


  return (
    <>

      <View style={styles.container}>

       <View style={{justifyContent:"center", alignItems:"center"}}> 
      <Image style={{ marginTop: 10 }}
              source={require('../../assets/homelogo.png')}
            />

        </View>


  <View style={styles.container2}> 


    <View style={{position:"absolute", top:10, left:-30}}>

    <Image style={{ }}
              source={require('../../assets/profile.png')}
        />
    </View>


    <View style={styles.greytextinput}>

      <TextInput style={{paddingLeft:35}}> </TextInput>
      
      <Image style={{ position:"absolute", left:10, top:10}}
              source={require('../../assets/search.png')}
        />

    </View>


    <View style={styles.circlebill}>

    <Image style={{ }}
              source={require('../../assets/Vector.png')}
        />
    </View>

    </View>

      </View>

    </>
  );
}


const styles = StyleSheet.create({

  container: {

    padding:40,
    backgroundColor:"#00A081",
    marginBottom:50,
   
  },

  container2:{

    justifyContent:"space-between", 
    alignItems:"center", 
    flexDirection:"row",
   position:"relative"
  },


  greytextinput:{
    width:"85%",
    backgroundColor:"lightgrey",
    padding:8,
    borderRadius:20,
    position:"absolute", 
    top:15,
    left:30,
    
  },

  circlebill:{

    backgroundColor:"#FFFFFF",
    padding:5,
    borderRadius:15,
    position:"absolute", 
    top:20,
    left:325,
  }
 


})


export default Search;