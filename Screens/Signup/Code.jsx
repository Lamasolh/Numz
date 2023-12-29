import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';

const Code = props => {
  const navigation = useNavigation();

  const [value, setValue] = useState('')
  const [isTextInputFocused, setTextInputFocused] = useState(false)

  const [value2, setValue2] = useState('')
  const [isTextInputFocused2, setTextInputFocused2] = useState(false)

  const [value3, setValue3] = useState('')
  const [isTextInputFocused3, setTextInputFocused3] = useState(false)

  const [value4, setValue4] = useState('')
  const [isTextInputFocused4, setTextInputFocused4] = useState(false)
  return (
    <>



      <View style={styles.container}>

        <View style={styles.arrowcontainer}>

        <TouchableOpacity
            onPress={() => navigation.navigate('Screen1')}>
            <Image style={{ marginTop: 10 }}
              source={require('../../assets/leftblackarrow.png')}
            />
          </TouchableOpacity>

        </View>


      </View>

      <View style={styles.container2}>

        <View style={styles.Titleauthentication}>

          <Text style={{ fontSize: 23, fontWeight: "bold" }}>Enter authentication code</Text>
          <Text style={{ fontSize: 15, textAlign: "center", marginTop: 5 }}  >{`Enter the 4-digit that we have sent via the \n phone number `} <Text style={{ fontWeight: "bold" }}>+61 813-8172-5977</Text></Text>

          <Image style={{ position: "absolute", top: 120, left: -118, zIndex: 1 }}
            source={require('../../assets/animationauthentication.png')}
          />
        </View>


      </View>

      <View style={styles.container3}>

        <View style={styles.inp1}>

          <TextInput
            value={value}
            onChangeText={value => setValue(value)}
            onFocus={() => setTextInputFocused(true)}
            onSubmitEditing={() => setTextInputFocused(false)}
            onEndEditing={() => setTextInputFocused(false)}
            keyboardType='numeric' maxLength={1} style={{
              borderWidth: 2, borderRadius: 20, height: 40, textAlign: "center",
              borderColor: isTextInputFocused == true ? '#00A081' : '#E3E5E5',
            }}></TextInput>

        </View>

        <View style={styles.inp2}>

          <TextInput
            value={value2}
            onChangeText={value => setValue2(value)}
            onFocus={() => setTextInputFocused2(true)}
            onSubmitEditing={() => setTextInputFocused2(false)}
            onEndEditing={() => setTextInputFocused2(false)}

            keyboardType='numeric' maxLength={1} style={{ borderWidth: 2, borderRadius: 20, height: 40, textAlign: "center", borderColor: isTextInputFocused2 == true ? '#00A081' : '#E3E5E5', }}></TextInput>

        </View>

        <View style={styles.inp3}>

          <TextInput
            value={value3}
            onChangeText={value => setValue3(value)}
            onFocus={() => setTextInputFocused3(true)}
            onSubmitEditing={() => setTextInputFocused3(false)}
            onEndEditing={() => setTextInputFocused3(false)}
            keyboardType='numeric' maxLength={1} style={{ borderWidth: 2, borderRadius: 20, height: 40, textAlign: "center", borderColor: isTextInputFocused3 == true ? '#00A081' : '#E3E5E5', }}></TextInput>

        </View>


        <View style={styles.inp4}>

          <TextInput
            value={value4}
            onChangeText={value => setValue4(value)}
            onFocus={() => setTextInputFocused4(true)}
            onSubmitEditing={() => setTextInputFocused4(false)}
            onEndEditing={() => setTextInputFocused4(false)}
            keyboardType='numeric' maxLength={1} style={{ borderWidth: 2, borderRadius: 20, height: 40, textAlign: "center", borderColor: isTextInputFocused4 == true ? '#00A081' : '#E3E5E5', }}></TextInput>

        </View>

      </View>

      <View style={styles.btncont}>

        <TouchableOpacity
          style={{
            height: 45,
            backgroundColor: '#00A081',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() =>
            this.props.navigation.navigate('')}
        >
          <Text style={{ color: 'white' }}>Continue</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            height: 45,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() =>
            this.props.navigation.navigate('')}
        >
          <Text style={{ color: '#00A081', marginTop: 20, }}>Resend code</Text>
        </TouchableOpacity>


      </View>
      
    </>
  );
}

const styles = StyleSheet.create({


  container: {
    padding: 30,

  },

  arrowcontainer: {
    flex: 1,

  },

  container2: {

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

  },

  container3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },

  inp1: {

    marginTop: 45,
    width: "10%",
    margin: 10,
    position:"relative",
    zIndex:5,
  },

  inp2: {

    margin: 10,
    marginTop: 45,
    width: "10%",
    position:"relative",
    zIndex:5,
  },
  inp3: {

    margin: 10,
    marginTop: 45,
    width: "10%",
    position:"relative",
    zIndex:5,
  },

  inp4: {

    margin: 10,
    marginTop: 45,
    width: "10%",
    position:"relative",
    zIndex:5,
  },

  btncont: {

    marginTop: 150,
    width: "90%",
    marginLeft: "5%",
    justifyContent: "center",
    position:"relative",
    zIndex:5,

  },


})
export default Code;