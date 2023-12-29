import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Screen1 = props => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image style={{ padding: 20, height: 150, width: "100%" }}
            source={require('../../assets/logonumz.png')}
          />
        </View>
        <View style={styles.container3}>
          <Text style={{ fontSize: 55, color: "white", textAlign: "center", fontWeight: 'bold' }}  >{` It \n All Done!`}</Text>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={{
              height: 45,
              backgroundColor: '#00A081',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() =>
              navigation.navigate('Login')}
          >
            <Text style={{ color: 'white' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#005A49'
  },

  container2: {
    //flexWrap:"wrap",
    backgroundColor: '#005A49',
    //padding:50, 
    justifyContent: "center",
    //flexDirection:"row",
    alignItems: "center",
    marginTop: 90,
    marginRight: 30,
  },

  container3: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,

  },

  container4: {
    width: "100%",
    justifyContent: "center",
    marginTop: 120

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
export default Screen1;