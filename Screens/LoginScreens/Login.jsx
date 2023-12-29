import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import Logincomponent from '../../Components/LoginComponents/Logincomponent'
import { useNavigation } from "@react-navigation/native";
const Login = props => {
  const navigation = useNavigation();
  return (
    <>

      <Logincomponent title="Log in" />

      <View style={styles.container2}>

        <View style={styles.Textinputcontainer}>

          <Text style={{ fontSize: 11, marginLeft: 5 }} keyboardType="email-address">Email</Text>

          <TextInput />

        </View>

        <View style={styles.Textinputpassword}>


          <TextInput placeholder='password' secureTextEntry={true} />

        </View>


        <View style={styles.Forgetandsignup}>


          <View><Text style={{ color: "#00A081", marginLeft: 20 }} >Forgot password</Text></View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}>

              <Text style={{ color: "#00A081", position: "relative", zIndex: 5 }}>
                Sign up!
              </Text>
              
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.circlelogocontainer}>


          <Image style={{}}
            source={require('../../assets/circle.png')}
          />




          <Image style={{ position: "absolute", top: 180, left: 218, zIndex: -1 }}
            source={require('../../assets/animation.png')}
          />



        </View>

        <View style={styles.btnlogin}>

          <TouchableOpacity
            style={{
              height: 45,
              backgroundColor: '#00A081',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() =>
              navigation.navigate('Home')}
          >
            <Text style={{ color: 'white' }}>Login</Text>
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
    marginTop: 20,
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
  },
  Forgetandsignup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    width: "93%",
    flexDirection: "row"
  },

  circlelogocontainer: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",


  },

  btnlogin: {

    marginTop: 20,
    width: "90%",
    marginLeft: "5%",
    justifyContent: "center",


  },


})

/*

<View style={styles.container}>

<View style={styles.container2}>

<Image style={{padding:20}}
    source={require('../../assets/logo.png')}
  />

</View>

<View style={styles.container3}>

<Text style={{fontSize: 50,color:"white",textAlign:"center",fontWeight:'bold'}}  >{`Get  It \n All Done!`}</Text>

</View>

<View style={styles.container4}>

  <Button title='Next' width="100px" color="#00A081"style={styles.btnnext} />

  </View>

</View>


const styles = StyleSheet.create({

  container:{

    height:1000,
    backgroundColor: '#005A49',
  },
  container2: {
    height:300,
    //flexWrap:"wrap",
    backgroundColor: '#005A49',
    //padding:50, 
    justifyContent:"center",
    //flexDirection:"row",
    alignItems:"center",
   marginTop:60,
    marginRight:30,
    
  
  },  

  container3:{

    justifyContent:"center",
    alignItems:"center",

   
  },

  container4:{
    width:"100%",
    marginLeft:"10%",
    width:"80%",
    marginTop:150
  
  },

  btnnext:{

    borderRadius:100,

  }


});

*/
export default Login;