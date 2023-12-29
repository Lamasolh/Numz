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


const RealEstate = props => {
  console.ignoredYellowBox = ['Sending `onAnimatedValueUpdate` with no listeners registered.'];

  return (
    <>


      <ScrollView style={{ backgroundColor: "white" }}>

        <View style={styles.container}>

        <EcommerceHeader title="Real Estate" navigate='Home' />

          <RealEstateList />

        </View>
        <SMENavbar />
      </ScrollView>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "white",
  }
  ,

})


export default RealEstate;