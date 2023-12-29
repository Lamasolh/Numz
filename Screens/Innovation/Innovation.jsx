import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import InvestingList from '../../Components/InvestingComponents/InvestingList';
import CrowdHeader from '../../Components/CrowdFunding/CrowdHeader';
import InnovationList from '../../Components/Innovation/InnovationList';


const Innovation = props => {
  console.ignoredYellowBox = ['Sending `onAnimatedValueUpdate` with no listeners registered.'];

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <CrowdHeader title="Innovation" navigate2='Home' />
          <InnovationList />
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


export default Innovation;