import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import SMEHeader from '../../Components/SMEComponents/SMEHeader'
import SMEList from '../../Components/SMEComponents/SMEList'
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
const SMES = props => {

  return (
    <>
      <ScrollView>
        <View style={{
          flexDirection: 'column',
          flex: 1,

        }}>
          <SMEHeader title="SME's" navigate="Home" />
          <SMEList />
          <SMENavbar />
        </View>
      </ScrollView>
    </>
  );
}

export default SMES;