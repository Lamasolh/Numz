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
import { useNavigation } from '@react-navigation/native';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
const MentorShip = props => {

  const navigation = useNavigation()
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>

        <View style={styles.container}>

          <EcommerceHeader title="Mentorship & Guidance" navigate='Innovation' />
          <Image style={{ top: -75, zIndex: -1 }}
            source={require('../../assets/mentorback.png')}
          />
          <Text style={{ top: -810, padding: 30, fontSize: 20.62, fontWeight: 800, color: '#00A081' }}>Register as an</Text>
          <Text style={{ top: -810, paddingLeft: 30, top: -830, fontSize: 20.62, fontWeight: 800, color: '#00A081' }}>Entrepreneur OR Investor ?
          </Text>
          <Image style={{ top: -760, left: 110 }}
            source={require('../../assets/flag.png')}
          />
          <View style={{ top: -720, padding: 30, zIndex: 50 }}>
          <BigButton3 title="Entrepreneur" navigate='MentorShip1'/>
          </View>

          <View style={{ top: -760, padding: 30, zIndex: 50 }}>
          <BigButton3 title="Investor" navigate='MentorShipInvestor1'/>
          </View>
          {/*
          <TouchableOpacity onPress={() => navigation.navigate('MentorShip1')}>
            <View style={{ top: -700, padding: 30, zIndex: 50 }}>
              <Buttons title='Entrepreneur' navigate='MentorShip1' />
            </View>
          </TouchableOpacity>
          <View style={{ top: -760, padding: 30, zIndex: 50 }}>
            <Buttons title='Investor' navigate='MentorShipInvestor1' />
          </View>
       */}
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


export default MentorShip;