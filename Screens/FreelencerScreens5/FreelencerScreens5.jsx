import React from 'react';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import FreelancerRadioView2 from "../../Components/FreelencerComponents/FreelancerRadioView2";
import Inputwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground";
import Selectwithgreybackground from "../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithgreybackground";
import SmallInputswithTitle from "../../Components/HomeComponents/GeneralComponents/Inputs/SmallInputswithTitle";
import TextAreawithcolors from "../../Components/HomeComponents/GeneralComponents/Inputs/TextAreawithcolors";
import BigButton2 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton2";
const Freel5 = props => {
    const [checked, setChecked] = React.useState('unchecked');
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>

        <LoansHeader title="Freelancer Registration" navigate='FreelencerScreens4'/>
     
        <Text style={{fontSize:23, fontWeight:"bold", color:"#000000", marginTop:20,marginLeft:"3%"}}>Experience</Text>
    
        <Inputwithgreybackground label="Job Title"/>
        <Inputwithgreybackground label="Company"/>
        <Selectwithgreybackground label="Country"/>
         
        <View style={{  justifyContent:"flex-start",
             alignItems:"center",
            width:"100%",
            marginTop:20,
            borderWidth:3,
            borderColor:"#00A081",
            borderRadius:25,
            height:60,
            backgroundColor:"#00A08147",
            flexDirection:"row",}}>

               
                
            <RadioButton 
            marginLeft={"2%"}
            value="first"
            color='#00A081'
            
            uncheckedColor={"#00A081"}
            status={ checked === 'first'? 'checked' : 'unchecked' }
            onPress={() => {setChecked('first')}}
            />

            <Text style={{color:"#232323", marginLeft:"2%"}}>I am currently working in this role</Text>
            </View>

        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <SmallInputswithTitle label="Start Date" placeh="12/02/2020"/>
        <SmallInputswithTitle label="End Date" placeh="17/09/2022"/>
        </View>
        <TextAreawithcolors placeh="Description"/>
        <BigButton2 navigate='FreelencerScreens6' title="Save"/>
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


export default Freel5;