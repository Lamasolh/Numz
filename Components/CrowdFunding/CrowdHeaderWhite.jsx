
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const CrowdHeaderWhite = props => {
   const navigation=useNavigation()
  return (
    <>


      <View style={styles.container}>


        <View style={styles.arrowcontainer}>

          <TouchableOpacity
          onPress={() => navigation.navigate(props.navigate)}
          >


            <Image style={{ marginTop: 5, paddingTop: 10 }}
              source={require('../../assets/smearrow.png')}
            />

          </TouchableOpacity>
        </View>


        <View style={{ width: "100%" }}>
          <Text style={{
         marginTop:20,   textAlign: "center", color: "black", fontSize: 20, fontWeight: "bold",

          }}>{props.title}</Text>

        </View>



      </View>


    </>



  );
}


const styles = StyleSheet.create({

  container: {
    padding: 20,
   paddingVertical:30,
    flexDirection: "row",
    // marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'white'
  },
  arrowcontainer: {
    width: "10%",
    marginTop:20,
  }

})

export default CrowdHeaderWhite;