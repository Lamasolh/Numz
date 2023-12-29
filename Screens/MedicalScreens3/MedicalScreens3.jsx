import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import MedicalComponentsCards from '../../Components/MedicalComponents/MedicalComponentsCards';
import MedicalHeader from '../../Components/MedicalComponents/MedicalHeader';



const M3 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

      
        <MedicalHeader title="" navigate='MedicalScreens2'/>
        <View style={styles.container}>

        <View>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Dr. James Gordone</Text>
          <Text style={{marginTop:10,fontSize:12,color:"#AAAAAA"}}>Cardiology &#x2022; Persahabatan Hospital</Text>
          <Text style={{marginTop:10,fontSize:12,color:"#4A4A4A",paddingRight:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
          <View style={{flexDirection:"row"}}>
          <Text style={{marginTop:10,fontSize:20, fontWeight:"bold"}}>Experience</Text>
          <Text style={{marginTop:10,fontSize:20, fontWeight:"bold",marginLeft:"3%",color:"#00A081"}}>3</Text>
          <Text style={{marginTop:10,fontSize:10, fontWeight:"bold",color:"#AAAAAA",marginLeft:"1%",position:"relative",top:"3%"}}>years</Text>
          </View>

          <View style={{flexDirection:"row",marginTop:10,alignItems:"center"}}>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Rating</Text>
          <Image style={{ marginLeft:"3%" ,marginTop:"2%"}}
                    source={require('../../assets/drating.png')}
                  />
        </View>
          <View style={{paddingRight:20}}>
          <BigButton3 title="Make an appointment" navigate="MedicalScreens4"/>

          </View>
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
        paddingLeft:20,
        backgroundColor:"white",
      
    }
    ,
  
})


export default M3;