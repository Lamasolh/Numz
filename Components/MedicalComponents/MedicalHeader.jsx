import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Loanscomp = props => {
 
const navigation=useNavigation();
  return (
    <>
  

      <View style={styles.container}>

      <Image style={{ marginTop: 5, paddingTop: 10 ,position:"relative",width:"100%"}}
                    source={require('../../assets/bgdoctor.png')}
                  />


        <View style={styles.arrowcontainer}>

          <TouchableOpacity
            onPress={() => navigation.navigate(props.navigate)}>


                <Image style={{ marginTop: 5, paddingTop: 10 }}
                    source={require('../../assets/smearrow.png')}
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
  
  
    marginTop: 20,
    justifyContent:"center",
    alignItems:"center"

  },
  arrowcontainer: {

    width:"10%",
    position:"absolute",
    top:"5%",
    left:"10%"

  }

})

export default Loanscomp;