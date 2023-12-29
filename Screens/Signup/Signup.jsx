import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import SignupComponent from '../../Components/SignupComponents/Signup'
import { useNavigation } from '@react-navigation/native';
const Signup = props => {
  const navigation = useNavigation();
  return (
    <>

      <SignupComponent title="Sign Up" />

      <View style={styles.container2}>

        <View style={styles.Textinputcontainer}>

          <Text style={{ fontSize: 11, marginLeft: 5 }}>Name</Text>

          <TextInput />

        </View>

        <View style={styles.Textinputcontainer}>

          <Text style={{ fontSize: 11, marginLeft: 5 }} keyboardType="email-address">Email</Text>

          <TextInput />

        </View>

        <View style={styles.Textinputpassword}>


          <TextInput placeholder='password' secureTextEntry={true} />

        </View>
        <View style={styles.Forgetandsignup}>


          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: "#00A081", marginLeft: 20 }} >
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </View>
          <Image style={{ position: "absolute", top: -180, left: 218, zIndex: 1 }}
            source={require('../../assets/animation.png')}
          />
        </View>

        <View style={styles.btnsignup}>
          <TouchableOpacity
            style={{
              height: 45,
              backgroundColor: '#00A081',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() =>
              navigation.navigate('Code')}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
  },

  Textinputcontainer: {
    borderWidth: 2,
    padding: 5,
    marginTop: 10,
    borderColor: "#E3E5E5",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 8,

  },

  Textinputpassword: {
    borderWidth: 2,
    padding: 12,
    marginTop: 10,
    borderColor: "#E3E5E5",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 8,
    position: "relative",
    zIndex: 5,
  },
  Forgetandsignup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
    width: "93%",
    flexDirection: "row",
    marginLeft: 5
  },


  btnsignup: {
    marginTop: 80,
    width: "90%",
    marginLeft: "5%",
    justifyContent: "center",
  },


})
export default Signup;