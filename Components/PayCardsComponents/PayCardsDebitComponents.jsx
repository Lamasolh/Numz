import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';

const Paycard3 = props => {
  const navigation=useNavigation();
  return (
    <>
       
        
      <View style={styles.container}>

      <Image style={{ marginTop: 20,  }}
              source={require('../../assets/ccard3.png')}
            />
       
        <Text style={{marginTop:10, color:"#000000", fontWeight:"bold"}}>World Pay Card</Text>

        <Text style={{textAlign:"center", padding:5,fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>

        <TouchableOpacity style={styles.btnlearn}  onPress={() =>
              navigation.navigate('wpaycard')}> 

            <Text style={{color:"#00A081"}}>Learn More</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.container}>

        <Image style={{ marginTop: 20,  }}
                source={require('../../assets/ccard.png')}
            />
        
        <Text style={{marginTop:10, color:"#000000", fontWeight:"bold"}}>Teen Card</Text>

        <Text style={{textAlign:"center", padding:5,fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>

        <TouchableOpacity style={styles.btnlearn}> 

            <Text style={{color:"#00A081"}}>Learn More</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.container}>

<Image style={{ marginTop: 20,  }}
        source={require('../../assets/ccard3.png')}
    />

<Text style={{marginTop:10, color:"#000000", fontWeight:"bold"}}></Text>

<Text style={{textAlign:"center", padding:5,fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>

<TouchableOpacity style={styles.btnlearn}> 

    <Text style={{color:"#00A081"}}>Learn More</Text>
</TouchableOpacity>
</View>


    </>



  );
}


const styles = StyleSheet.create({

  container: {
   marginTop:10,
    flexDirection:"column",
    width:"100%",
    justifyContent:"center", 
    alignItems:"center"
  },

  btnlearn:{

    marginTop:10,
    backgroundColor:"#E3F5F1",
    width:"90%",
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15
  }

})

export default Paycard3;