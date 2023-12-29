import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import EducationComponents from "../../Components/EducationComponents/EducationComponents";
import InsuranceHeader from '../../Components/InsuranceComponents/InsuranceHeader';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const Education = props => {
  console.ignoredYellowBox = ['Sending `onAnimatedValueUpdate` with no listeners registered.'];
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>

        <InsuranceHeader title="Education" navigate='Home' />
        <View style={styles.container}>

          <EducationComponents />

        </View>

        <SMENavbar />

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 30,
    backgroundColor: "white",

  }
  ,

})


export default Education;