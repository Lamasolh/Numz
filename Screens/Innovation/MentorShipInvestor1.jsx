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


const MentorShipInvestor1 = props => {

  return (
    <>


      <ScrollView style={{ backgroundColor: "white" }}>

        <View style={styles.container}>
          <EcommerceHeader title="Mentorship & Guidance" navigate='Innovation' />
          <Text style={{ paddingRight: 100,paddingLeft:40, fontSize: 20.62, fontWeight: 800, color: '#00A081' }}>For those who might
want to pitch in.</Text>
         <View style={{padding:20}}>
          <Inputss label='Full Name' placeholder='John Doe'/>     
          <Inputss label='Headline' placeholder=''/>     
          <Inputss label='Company Name' placeholder='Anchor'/>     
          <Inputss label='Company’s Address' placeholder='Australia - Sydney - Solnar’s street'/>     
          <Inputss label='Email' placeholder='Johndoe@gmail.com'/>     
          <Inputss label='Phone Number' placeholder='123  43 123'/>     
          <Buttons title='Next' navigate='MentorShipInvestor2'/>
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


export default MentorShipInvestor1;