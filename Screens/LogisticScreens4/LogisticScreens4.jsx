import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
import BigButton3LightBg from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3LightBg';
import SmallInputswithTitle2 from '../../Components/HomeComponents/GeneralComponents/Inputs/SmallInputswithTitle2';
import { useNavigation } from '@react-navigation/native';
const Log4 = props => {
    const navigation=useNavigation();
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

            <BankingComponentsHeader title="Package" navigate='LogisticScreens3'/>
            <Inputwithgreybackground label="Package Category"/>
            <Inputwithgreybackground label="Weight"/>
            <View style={{width:"100%", flexDirection:"row",justifyContent:"space-around"}}>
            <SmallInputswithTitle2 label="Length"/>
            <SmallInputswithTitle2 label="Width"/>
            <SmallInputswithTitle2 label="Height"/>
            </View>

            <View style={styles.btnlogin}>

            <TouchableOpacity 
            style={{
                height: 40,
                backgroundColor: 'white',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                elevation:10
            }}
            onPress={() => navigation.navigate('LogisticScreens5')}
            >
            <Text style={{ color: '#3E3E3E',fontWeight:"bold",fontSize:13 }}>Select Shipping</Text>
            </TouchableOpacity>


            </View>
                    
            <View style={{marginTop:"35%"}}>
            <BigButton3LightBg title="Next" />
            </View>
      </View>

      <SMENavbar/>
  
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:30,
        backgroundColor:"white",
      
    }
    ,
    btnlogin: {

        marginTop:"10%",
        width: "100%",
  
        justifyContent: "center",
    
    
      },
})

export default Log4;