import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import MedicalComponentsTimeButtons from '../../Components/MedicalComponents/MedicalComponentsTimeButtons';
import MedicalComponentsButtonsSwitch from '../../Components/MedicalComponents/MedicalComponentsButtonsSwitch';
import { useNavigation } from '@react-navigation/native';


const M6 = props => {
    const navigation=useNavigation();
  return (
    <>


 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <Image style={{ width:"100%" }}
            source={require('../../assets/backgrounddoctor.png')}
            />

      <TouchableOpacity style={{position:"absolute", top:"8%", left:"10%"}}
            onPress={() => navigation.navigate('MedicalScreens7')}>


                <Image style={{ tintColor:"white" }}
                    source={require('../../assets/smearrow.png')}
                  />

          </TouchableOpacity>


          <TouchableOpacity style={{position:"absolute", top:"75%", left:"40%"}}
            onPress={() => navigation.navigate('MedicalScreens7')}>


                <Image style={{ }}
                    source={require('../../assets/call.png')}
                  />

          </TouchableOpacity>
        
        </View>

    
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"white",
        width:"100%",
        paddingTop:30,
        position:"relative"
      
    }
    ,
  
})


export default M6;