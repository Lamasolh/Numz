import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const FirstLoanscomp = props => {
 
const navigation=useNavigation();
  return (
    <>
  
  <View style={styles.maincontainer}>

      <View style={styles.container}>

        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#00A081", fontSize:23, fontWeight:"bold"}}>Start your first loan !</Text>
        </View>


      </View>

      <TouchableOpacity style={{justifyContent:"center",width:"100%", alignItems:"center", marginTop:20}} onPress={() =>
              navigation.navigate('LoanRequest')}>
                
            <Image style={{marginTop:9,   }}
                    source={require('../../assets/cardi1.png')}
                    />

          <Text style={{fontSize:13, color:"#00A081"}}>Request Loan</Text>
            </TouchableOpacity> 


       

        </View>


    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    padding: 20,
   
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

export default FirstLoanscomp;