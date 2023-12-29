import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const EcommerceHeader = props => {
 
const navigation=useNavigation();
  return (
    <>
  

      <View style={styles.container}>


        <View style={styles.arrowcontainer}>

          <TouchableOpacity
            onPress={() => navigation.navigate(props.navigate)}>


                <Image style={{ marginTop: 5, paddingTop: 8, tintColor:"black" }}
                    source={require('../../assets/arrowblack.png')}
                  />

          </TouchableOpacity>
        </View>


        <View style={{ width: "100%" }}>
          <Text style={{
            textAlign: "center", color: "black", fontSize: 20, fontWeight: "bold",

          }}>{props.title}</Text>

        </View>



      </View>


    </>



  );
}


const styles = StyleSheet.create({

  container: {
    padding: 20,
    flexDirection: "row",
    paddingTop:50,
    paddingLeft:15,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"white",
    

  },
  arrowcontainer: {

    width:"10%"

  }

})

export default EcommerceHeader;