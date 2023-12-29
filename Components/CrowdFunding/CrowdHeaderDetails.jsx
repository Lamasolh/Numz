
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const CrowdHeaderDetails = props => {
   const navigation=useNavigation()
  return (
    <>


      <View style={styles.container}>


        <View style={styles.arrowcontainer}>

      
        </View>


        <View style={{ width: "100%" }}>
          <Text style={{
         marginTop:20,   textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold",

          }}>{props.title}</Text>

        </View>



      </View>


    </>



  );
}


const styles = StyleSheet.create({

  container: {
   paddingVertical:30,
    flexDirection: "row",
    // marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'green'
    ,position:'absolute',
    top:100
  },
  arrowcontainer: {
    width: "10%",
    marginTop:20,
  }

})

export default CrowdHeaderDetails;