import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import EntertainmentRadios from '../../Components/EntertainmentComponents/EntertainmentRadios';
import SmallEnterInput from '../../Components/EntertainmentComponents/SmallEnterInput';
import EnterInput from '../../Components/EntertainmentComponents/EnterInput';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
import Smallcards from '../../Components/EntertainmentComponents/Smallcards';
import EnterComponentsRBtns from '../../Components/EntertainmentComponents/EnterComponentsRBtns';


const Ent2 = props => {
   
  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>
        <View style={styles.container}>

        <BankingComponentsHeader title="" navigate='EntertainmentScreeen1'/>

        <EntertainmentRadios/>

        <Image style={{}}
              source={require('../../assets/lineent.png')}
        />
       
        <EnterInput label='To' img={require('../../assets/to.png')}/>
        <EnterInput label='From' img={require('../../assets/from.png')}/>

        <Image style={{marginTop:20}}
              source={require('../../assets/lineent.png')}
        />

        <SmallEnterInput img={require('../../assets/entcal.png')} />

        <Image style={{marginTop:20}}
              source={require('../../assets/lineent.png')}
        />
        <Smallcards  img={require('../../assets/entprof.png')} />
        <Image style={{marginTop:20}}
              source={require('../../assets/lineent.png')}
        />

        <EnterComponentsRBtns/>

        <BigButton3 title="Search Flights" navigate='EntertainmentScreeen3'/>
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
  
})


export default Ent2;