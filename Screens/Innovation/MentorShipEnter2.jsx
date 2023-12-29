import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import InvestingComponents1 from "../../Components/InvestingComponents/InvestingComponents1";
import InvestingComponents2 from "../../Components/InvestingComponents/InvestingComponents2";
import InvestingList from '../../Components/InvestingComponents/InvestingList';
import CrowdHeader from '../../Components/CrowdFunding/CrowdHeader';
import RealEstateList from '../../Components/RealEstate/RealEstateList';
import EcommerceHeader from '../../Components/Ecommerce/EcommerceHeader';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import Inputs from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
import Inputss from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputsgrey';


const MentorShipEnter2 = props => {

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>

        <View style={styles.container}>
          <EcommerceHeader title="Mentorship & Guidance" navigate='Innovation' />
         <View style={{padding:20}}>
          <Inputss label='Linked Link' placeholder='www.John Doe.com'/>     
          <Inputss label='Brief Description of the company' placeholder=''/>     
          <Inputss label='Brief Description About Yourself' placeholder=''/>     
          <Inputss label='Future Aspirations' placeholder=''/>     
          <Inputss label='Progress' placeholder=''/>     
          <Inputss label='ID' placeholder=''/>     
          <Buttons title='Next' navigate='MentorShipEnter4'/>
         </View>
        </View>
      </ScrollView>
      <SMENavbar />


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "white",
    marginBottom: -700
  }
  ,

})


export default MentorShipEnter2;