import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';
import BigButtons from '../HomeComponents/GeneralComponents/Inputs/Button/BigButton';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
const WPaycard = props => {
    const navigation=useNavigation();
  return (
    <>
       
        
      <View style={styles.container}>

      <Image style={{ marginTop: 20,  }}
              source={require('../../assets/ccard.png')}
            />
   
   
    <ScrollView style={{  minHeight: 360, maxHeight: 500}}>
  
        <View style={styles.container2}>
            
            <Text style={{fontWeight:"bold", fontSize:25,textAlign:"center",marginTop:10}}>World Pay Card</Text>
            <Text style={{color:"#272323", marginLeft:15, marginTop:10, fontSize:18}}>Description</Text>
            <Text style={{color:"#3B3B3B99", fontSize:12, padding:15}}>Surround and loudspeaker with Bluetooth wireless connectivity that is paired with one or more smartphones, tablets, laptops or computers. Available in all type, including all color models. Listen your favourite music in epic surround sound around you.</Text>
            <Text style={{color:"#272323", marginLeft:15, marginTop:10, fontSize:18}}>Eligibility</Text>
            <Text style={{color:"#3B3B3B99", fontSize:12, padding:15}}>{'To apply for an ANZ Low Rate credit card, you’ll need to: \n \n \u2B24 be 18 years of age or over \n \n \u2B24 be an Australian or New Zealand citizen, permanent resident or have more than 9 months left on your visa'}</Text>
            <Text style={{color:"#272323", marginLeft:15, marginTop:10, fontSize:18}}>Rates & Fees</Text>
            <Text style={{color:"#3B3B3B99", fontSize:12, padding:15}}>{'\u2B24 0% p.a balance transfer rateSuperscript:1 \nfor a 30-month promotional period \n\n \u2B24 $0 annual FeeSuperScript \n\n \u2B24 1% Balance Transfer FeeSuperScript:1'}</Text>
            <View style={styles.btnlogin}>

            <TouchableOpacity
            style={{
                height: 45,
                backgroundColor: '#00A081',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                width:"90%"
          
            }}
            onPress={() =>
                navigation.navigate('Home')}
            >
            <Text style={{ color: 'white' }}>Apply</Text>
            </TouchableOpacity>


            </View>
        </View>
      
    </ScrollView>
    <View style={{width:"100%"}}>
        <SMENavbar/>
        </View>
    </View>
     


    


    </>



  );
}


const styles = StyleSheet.create({

  container: {
  
    flexDirection:"column",
    width:"100%",
    height:350,
   
    alignItems:"center",
    backgroundColor:"#BDC8CF"
  },
  btnlogin: {

    marginTop: 10,
    width: "100%",
    alignItems:"center",
    justifyContent: "center",


  },
  container2:{

    backgroundColor:"#FFFFFF",
    width:"100%",
   
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    marginTop:40,

  }
 

})

export default WPaycard;