
import React, { useState } from 'react'
import { Text, View, StyleSheet,Image,TouchableHighlight } from 'react-native';

export const Navbar = () => {
  
  const [bgcolor, setbgcolor] = useState("#00A0811C");
  const [color, setcolor] = useState("#00A081");


  const [bgcolor2, setbgcolor2] = useState("white");
  const [color2, setcolor2] = useState("#979C9E");


  const [bgcolor3, setbgcolor3] = useState("white");
  const [color3, setcolor3] = useState("#979C9E");


  const [bgcolor4, setbgcolor4] = useState("white");
  const [color4, setcolor4] = useState("#979C9E");

  return (


    <View style={styles.container}>

 
   <View >
    
   <TouchableHighlight style={{
  backgroundColor:bgcolor,
  padding:10,
  borderRadius:25,

  }}
  onPress={() => {
    setbgcolor("#00A0811C"), setcolor("#00A081"),
    setbgcolor2("white"), setcolor2("#979C9E"),
    setbgcolor3("white"), setcolor3("#979C9E"),
    setbgcolor4("white"), setcolor4("#979C9E")
    }}>

   <Image style={{tintColor:color}}
              source={require('../../assets/homeicon.png')}
        />

  </TouchableHighlight>
    </View>
  
   


    <View >

    <TouchableHighlight style={{
  backgroundColor:bgcolor2,
  padding:10,
  borderRadius:25,

  }}
  onPress={() => {
    setbgcolor2("#00A0811C"), setcolor2("#00A081"),
    setbgcolor("white"), setcolor("#979C9E"),
    setbgcolor3("white"), setcolor3("#979C9E"),
    setbgcolor4("white"), setcolor4("#979C9E")}}>
   <Image  style={{ tintColor:color2 }}
              source={require('../../assets/hearticon.png')}
        />

</TouchableHighlight>
    </View>


    <View >


    <TouchableHighlight style={{
  backgroundColor:bgcolor3,
  padding:10,
  borderRadius:25,

  }}
  onPress={() => {
    setbgcolor3("#00A0811C"), setcolor3("#00A081"),
    setbgcolor("white"), setcolor("#979C9E"),
    setbgcolor2("white"), setcolor2("#979C9E"),
    setbgcolor4("white"), setcolor4("#979C9E")}}>


   <Image  style={{tintColor:color3 }}
              source={require('../../assets/billicon.png')}
        />
        </TouchableHighlight>
    </View>


    <View >
    <TouchableHighlight style={{
  backgroundColor:bgcolor4,
  padding:10,
  borderRadius:25,

  }}
  onPress={() => {
    setbgcolor4("#00A0811C"), setcolor4("#00A081"),
    setbgcolor("white"), setcolor("#979C9E"),
    setbgcolor2("white"), setcolor2("#979C9E"),
    setbgcolor3("white"), setcolor3("#979C9E")}}>

   <Image  style={{tintColor:color4 }}
              source={require('../../assets/profileicon.png')}
        />
        </TouchableHighlight>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#FFFFFF',
    elevation: 5,
    padding:17,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row",
    marginTop:450,
  },

});

export default Navbar;