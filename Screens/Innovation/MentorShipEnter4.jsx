import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ScrollView, Modal, ActivityIndicator } from 'react-native';
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
import UploadFile from '../../Components/FreelencerComponents/FreelencerDocumentPickers';
import FreelencerDocumentPickersInput from '../../Components/FreelencerComponents/FreelencerDocumentPickersInput';
import { useNavigation } from '@react-navigation/native';


const MentorShipEnter4 = props => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>

        <View style={styles.container}>
          <EcommerceHeader title="Mentorship & Guidance" navigate='MentorShipEnter3' />
          <FreelencerDocumentPickersInput label='Feasibility Study' placeholder='' />
          <View style={{ paddingLeft: 35, width: 335, marginBottom: -35 }}>
            <Inputss label='Pitch deck' placeholder='' />
          </View>
          <View style={{ marginBottom: -35 }}>
            <FreelencerDocumentPickersInput label='Business Plan' placeholder='' />
          </View>
          <View style={{ marginBottom: -35 }}>
            <FreelencerDocumentPickersInput label='NDA' placeholder='' />
          </View>
          <View style={{ marginBottom: -35 }}>
            <FreelencerDocumentPickersInput label='Additional Material' placeholder='' />
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ marginTop: 130, justifyContent: 'center', textAlign: 'center', backgroundColor: '#00A081', height: 50, borderRadius: 48 }}>
              <TouchableOpacity
                style={{ width: "100%", }}

                onPress={
                  () => { setModalVisible(true), setTimeout(() => { navigation.navigate('Innovation') }, 2000) }
                }
              >


                <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 17, fontWeight: 500, color: 'white' }}>Finish</Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>

      </ScrollView>

      <View style={{ top: 50, backgroundColor: 'white', marginTop: -100 }}>
        <SMENavbar />
      </View>
      <TouchableOpacity
        style={{ width: "100%", }}

        onPress={
          () => { setModalVisible(false), setTimeout(() => { navigation.navigate('Innovation') }, 2000) }
        }>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"

            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>



            <View style={styles.centeredView}>

              <View style={styles.modalView}>
                <Image style={{}}
                  source={require('../../assets/popup.png')}
                />

                <View style={styles.congrats}>

                  <Text style={{ fontSize: 23, fontWeight: "bold", color: "#00A081" }}>Congratulations!</Text>

                </View>

                <View style={styles.congrats}>

                  <Text style={{ textAlign: "center" }}>You have have applied for the Mentorship & Guidance program. You will be redirected to the
                    Innovation Homepage.</Text>

                </View>

                <View style={{ padding: 30 }}>
                  <ActivityIndicator size="larger" color="#3AE180" style={styles.loading}>
                  </ActivityIndicator>
                </View>
              </View>
            </View>
          </Modal>
        </View>

      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "white",

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 52,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }

})


export default MentorShipEnter4;