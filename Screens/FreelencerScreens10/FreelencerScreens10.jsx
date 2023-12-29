import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerSummary from "../../Components/FreelencerComponents/FreelancerSummary";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
import InputEdit from "../../Components/HomeComponents/GeneralComponents/Inputs/InputEdit";
import Freelancerpopup from "../../Components/FreelencerComponents/Freelancerpopup";

const Freel10 = props => {
  
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens9'/>
        <Text style={{fontSize:23, fontWeight:"bold", color:"black", marginTop:20,marginLeft:"3%"}}>Summary</Text>

        <FreelancerSummary/>
        <InputEdit label="Job Title"/>
        <InputEdit label="Bio"/>
        <InputEdit label="Hourly Rate"/>
        <InputEdit label="Languages"/>

        <View style={{marginTop:"3%", marginLeft:"2%"}}>

        <Text style={{color:"#72777A"}}>Skills</Text>

       </View>

       <View style={{marginTop:"3%", justifyContent:"space-around", alignItems:"center", flexDirection:"row"}}>
        <View style={{flexDirection:"column", width:"35%", marginRight:"5%"}}>
        <View style={{backgroundColor:"#01A08121", width:"100%", height:40, justifyContent:"center", alignItems:"center", borderRadius:25}}>

          <View >
            <Text style={{color:"#00A081",fontSize:12}}>Customer Service</Text>
          </View>

        </View>

        <View style={{backgroundColor:"#01A08121", width:"100%", height:40, justifyContent:"center", alignItems:"center", borderRadius:25, marginTop:"10%"}}>

      <View>
        <Text style={{color:"#00A081",fontSize:12}}>Developement</Text>
      </View>

      </View>

        </View>


        <View style={{flexDirection:"column", width:"35%"}}>
        <View style={{backgroundColor:"#01A08121", width:"100%", height:40, justifyContent:"center", alignItems:"center", borderRadius:25}}>

          <View >
            <Text style={{color:"#00A081",fontSize:12}}>Public  Speaking</Text>
          </View>

        </View>

        <View style={{backgroundColor:"#01A08121", width:"100%", height:40, justifyContent:"center", alignItems:"center", borderRadius:25, marginTop:"10%"}}>

      <View>
        <Text style={{color:"#00A081",fontSize:12}}>Customer Service</Text>
      </View>

      </View>

        </View>
        <Image style={{marginRight:"4%"}}source={require('../../assets/edit.png')}/> 
       </View>

        <Freelancerpopup  title="Save"/>

      

       </View>


        <SMENavbar/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:20,
        backgroundColor:"white",
    
      
    }
    ,
  
})


export default Freel10;