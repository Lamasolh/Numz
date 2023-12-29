import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import TotalBalance from '../../Components/LoanPaySchedComponents/TotalBalance';
import TotalBalanceCards from '../../Components/LoanPaySchedComponents/TotalBalanceCards';

const Tbalance = props => {

  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <LoansHeader title="" navigate='Home' />
          <TotalBalance />
          <TotalBalanceCards />
        </View>
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


export default Tbalance;