import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Signup = props => {
  const navigation = useNavigation();
  return (
    <>

      <View style={styles.container}>


        <View style={styles.arrowcontainer}>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <Image style={{ marginTop: 10 }}
              source={require('../../assets/leftarrow.png')}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ textAlign: "center", color: "white", fontSize: 15, }}>{props.title}</Text>
        </View>


        <View style={styles.Loginlogocontainer}>


          <Image style={{}}
            source={require('../../assets/Loginlogo.png')}
          />
        </View>


        <View >

          <Text style={{ fontSize: 25, color: "white", marginTop: 20, marginLeft: 20, lineHeight: 35 }}  >{`Welcome to \n NUMZ!`}</Text>

        </View>

      </View>


    </>



  );
}


const styles = StyleSheet.create({

  container: {
    padding: 30,

    backgroundColor: '#00A081'
  },

  arrowcontainer: {
    flex: 1,
  },

  Loginlogocontainer: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,

  },

})

export default Signup;