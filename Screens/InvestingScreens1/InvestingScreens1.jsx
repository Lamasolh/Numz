import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import InvestingList from '../../Components/InvestingComponents/InvestingList';
import CrowdHeader from '../../Components/CrowdFunding/CrowdHeader';


const InvestingScreens1 = props => {
  console.ignoredYellowBox = ['Sending `onAnimatedValueUpdate` with no listeners registered.'];

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>

        <View style={styles.container}>

          <CrowdHeader title="Investing" navigate2='Home' />

          <InvestingList />

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


export default InvestingScreens1;