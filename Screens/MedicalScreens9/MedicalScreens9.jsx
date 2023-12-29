import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import MedicalComponentsSearch from '../../Components/MedicalComponents/MedicalComponentsSearch';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import MedicalComponentsCards from '../../Components/MedicalComponents/MedicalComponentsCards';
import MedicalHeader from '../../Components/MedicalComponents/MedicalHeader';


const M9 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

      
        <MedicalHeader title="" navigate=''/>
        <View style={styles.container}>

        <View>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Dr. James Gordone</Text>
          <Text style={{marginTop:10,fontSize:12,color:"#AAAAAA"}}>Cardiology &#x2022; Persahabatan Hospital</Text>
          <Text style={{marginTop:10,fontSize:12,color:"#C4C4C4",paddingRight:20}}>dr. Gilang is one of the best doctors in the Persahabatan Hospital. He has saved more than 1000 patients in the past 3 years. He has also received many awards from domestic and abroad as the best doctors. He is available on a private or schedule. </Text>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",paddingRight:"10%"}}>

        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Text style={{marginTop:10,fontSize:17, fontWeight:"bold"}}>Experience</Text>
          <Text style={{marginTop:10,fontSize:20, fontWeight:"bold",marginLeft:"3%",color:"#2B92E4"}}>3<Text style={{color:"#AAAAAA",fontSize:13}}> yr</Text></Text>

        </View>


        <Image style={{}}
                    source={require('../../assets/verticalline.png')}
                  />
       
       <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Text style={{marginTop:10,fontSize:17, fontWeight:"bold"}}>Patient</Text>
          <Text style={{marginTop:10,fontSize:20, fontWeight:"bold",marginLeft:"3%",color:"#2B92E4"}}>1221<Text style={{color:"#AAAAAA",fontSize:13}}> ps</Text></Text>

        </View>

        <Image style={{}}
                    source={require('../../assets/verticalline.png')}
                  />

<View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <Text style={{marginTop:10,fontSize:17, fontWeight:"bold"}}>Rating</Text>
          <Text style={{marginTop:10,fontSize:20, fontWeight:"bold",marginLeft:"3%",color:"#2B92E4"}}>5.0<Text style={{color:"#AAAAAA",fontSize:13}}></Text></Text>

        </View>

       
        </View>
          
         </View>
        <View style={{flexDirection:"row"}}>
         <TouchableOpacity style={{width:"15%",height:50,backgroundColor:"#4485FD",marginTop:"8%",borderRadius:15,
            justifyContent:"center",alignItems:"center"}}>

         <Image style={{}}
                    source={require('../../assets/comment.png')}
                  />

         </TouchableOpacity>

         <TouchableOpacity style={{width:"70%",height:50,backgroundColor:"#00CC6A",marginTop:"8%",borderRadius:8,
            justifyContent:"center",alignItems:"center",marginLeft:"5%"}}>

            <Text style={{color:"white"}}>Make an Appointment</Text>

         </TouchableOpacity>
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


export default M9;