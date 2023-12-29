import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import SMEHeader from '../../../Components/SMEComponents/SMEHeader'
import SMENavbar from '../../../Components/SMEComponents/SMENavbar';
import Inputs from '../../../Components/HomeComponents/GeneralComponents/Inputs/Inputs';
import Buttons from '../../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import Inputss from '../../../Components/HomeComponents/GeneralComponents/Inputs/Inputsgrey';
//import DatePickerAndroid from '../../../Components/HomeComponents/GeneralComponents/Inputs/Date/DatePickerAndroid';
//import DatePickerIOS from '../../../Components/HomeComponents/GeneralComponents/Inputs/Date/DatePickerIOS';
import NewSelect from '../../../Components/HomeComponents/GeneralComponents/Inputs/Selects/Selectwithgreybackground';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { TouchableHighlight } from 'react-native';

const CreatAccount = props => {
    const navigation = useNavigation()
    const handleOnChangeDate = (name, value) => {
        // getIncidentInfo(name, value);
    };
    const [modalVisible, setModalVisible] = useState(false);
    const [showPage, setShowPage] = useState(false)
    const [showPage1, setShowPage1] = useState(true)
    const [showPage2, setShowPage2] = useState(false)
    return (
        <>
            <ScrollView>
                {showPage1 && <View>
                    <SMEHeader title="Personal Account" navigate="List" position1="absolute" />


                    <View style={{
                        justifyContent: 'right',
                        alignItems: 'right', left: 195, top: 40
                    }}>
                        <Image style={{ position: 'relative' }}
                            source={require('../../../assets/topHeader.png')} />
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1,
                        padding: 25,
                        position: 'relative',
                        top: -150
                    }}>
                        <Inputss label="First Name" />
                        <Inputss label="Middle Name" />
                        <Inputss label="Last Name" />
                        <Inputss label="Email" type="email-address" />
                        <Inputss label="Last Name" />
                        <View style={styles.subCont}>
                            {Platform.OS === "android" ? (
                                <DatePickerAndroid
                                    label="Date"
                                    // value={date}
                                    handleOnChange={handleOnChangeDate}
                                    name="date"
                                />
                            ) : (
                                <DatePickerIOS
                                    label="Date"
                                    // value={date}
                                    handleOnChange={handleOnChangeDate}
                                    name="date"
                                />
                            )}
                        </View>
                        <Inputss label="Goverment Issued ID Numbers" />
                        <Inputss label="Nationality" />
                        <View style={styles.Textinputcontainer}>

                            <Button title="Next" onPress={() => {
                                setShowPage(true),
                                    setShowPage1(false)
                            }}
                                color="rgba(255, 255, 255, 1)" style={styles.btn} />
                        </View>
                    </View>
                </View>}

                {showPage &&
                    <View>
                        <SMEHeader title="Address" navigate="List" />
                        <View style={{
                            flexDirection: 'column',
                            flex: 1,
                            padding: 25,
                            marginBottom: 200
                        }}>
                            <Inputss label="Country" />
                            <Inputss label="Region" />
                            <Inputss label="Street" />
                            <Inputss label="Building" />
                            <Inputss label="Floor" />
                            <Inputss label="Map" />
                        </View>
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <View style={styles.Textinputcontainer1}>

                                <Button style={{ position: 'absolute' }} title="Next" onPress={() => {
                                    setShowPage2(true),
                                        setShowPage(false)
                                }}
                                    color="rgba(255, 255, 255, 1)" />
                            </View></View>
                        <View style={styles.smeanimationbottom}>

                            <Image style={{}}
                                source={require('../../../assets/smeanimation.png')}
                            />

                        </View>
                    </View>}
                {showPage2 &&
                    <View>
                        <SMEHeader title="Bank Info" navigate="List" />
                        <View style={{
                            flexDirection: 'column',
                            flex: 1,
                            padding: 25,
                            marginBottom: 200
                        }}>

                            <NewSelect label="Branch" />
                            <NewSelect label="Agent Name " />
                            <NewSelect label="Account Type" />
                            <NewSelect label="Currency" />
                            <NewSelect label="Select Product" />
                            <NewSelect label="Product Details" />
                        </View>
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <View style={styles.Textinputcontainer1}>

                                <Button title="Register" onPress={
                                    () => { setModalVisible(true) }
                                }
                                    color="rgba(255, 255, 255, 1)" />
                            </View></View>

                    </View>}
                <View style={styles.centeredView}>
                <TouchableHighlight

     
     
style={{width:"100%",}}

  onPress={
      () => { navigation.navigate('List')}
          }
  >
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
                                    source={require('../../../assets/popupimage.png')}
                                />

                                <View style={styles.congrats}>

                                    <Text style={{ fontSize: 23, fontWeight: "bold", color: "#00A081" }}>Congratulations!</Text>

                                </View>

                                <View style={styles.congrats}>

                                    <Text style={{ textAlign: "center" }}>Trasnfer completed.
                                        You will be redirected to the
                                        Banking Homepage.</Text>

                                </View>

                                <View style={{ padding: 30 }}>
                                    <ActivityIndicator size="larger" color="#3AE180" style={styles.loading}


                                    >


                                    </ActivityIndicator>
                                </View>
                            </View>


                        </View>
                    </Modal>
                    </TouchableHighlight>
                </View>
                <SMENavbar />
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    subCont: {
        flexDirection: "column",
        width: "100%",
        marginTop: "4%",
        marginBottom: '-4%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,


    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    Textinputcontainer: {
        borderWidth: 2,
        marginTop: '25%',
        borderColor: "#E3E5E5",
        borderRadius: 48,
        backgroundColor: 'rgba(0, 160, 129, 1)',
        padding: 10,
    },
    Textinputcontainer1: {
        borderWidth: 2,
        marginTop: -150,

        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#E3E5E5",
        borderRadius: 48,
        backgroundColor: 'rgba(0, 160, 129, 1)',
        padding: 10,
    },
})
export default CreatAccount;