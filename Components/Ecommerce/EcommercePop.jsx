import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, TextInput, View, Image, ActivityIndicator, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';
const EcommercePop = props => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const [isSelected9, setSelection9] = useState(false);
  const [isSelected10, setSelection10] = useState(false);
  const [isSelected11, setSelection11] = useState(false);
  const [isSelected12, setSelection12] = useState(false);
  const [isSelected13, setSelection13] = useState(false);
  const [isSelected14, setSelection14] = useState(false);
  const [isSelected15, setSelection15] = useState(false);

  return (
    <>
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


              <View style={styles.congrats}>

                <Text style={{ fontSize: 23, fontWeight: "bold", color: "#00A081" }}>Profeciency</Text>

              </View>

              <View style={styles.checkboxes}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Beginner</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected2}
                    onValueChange={setSelection2}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Intermediate</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected3}
                    onValueChange={setSelection3}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Advanced</Text>
                </View>

              </View>

              <View style={{ marginTop: 20 }}>

                <Text style={{ fontSize: 23, fontWeight: "bold", color: "#00A081" }}>Category</Text>

              </View>




              <View style={styles.checkboxes2}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected4}
                    onValueChange={setSelection4}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Business Analytics</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected5}
                    onValueChange={setSelection5}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Programming</Text>
                </View>



              </View>



              <View style={styles.checkboxes2}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected6}
                    onValueChange={setSelection6}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Graphic Design</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, position: "relative", left: "8%" }}>

                  <CheckBox
                    value={isSelected7}
                    onValueChange={setSelection7}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Business Analytics</Text>
                </View>



              </View>


              <View style={styles.checkboxes2}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected8}
                    onValueChange={setSelection8}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>2D/3D Animation</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, position: "relative", left: "2%" }}>
                  <CheckBox
                    value={isSelected9}
                    onValueChange={setSelection9}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Graphic Design</Text>
                </View>



              </View>


              <View style={styles.checkboxes2}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected10}
                    onValueChange={setSelection10}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12, }}>Business Analytics</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, position: "relative", right: "1%" }}>
                  <CheckBox
                    value={isSelected11}
                    onValueChange={setSelection11}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Programming</Text>
                </View>



              </View>



              <View style={styles.checkboxes2}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected12}
                    onValueChange={setSelection12}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Graphic Design</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, position: "relative", left: "8%" }}>
                  <CheckBox
                    value={isSelected13}
                    onValueChange={setSelection13}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Business Analytics</Text>
                </View>



              </View>


              <View style={styles.checkboxes2}>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <CheckBox
                    value={isSelected14}
                    onValueChange={setSelection14}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>2D/3D Animation</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, position: "relative", left: "2%" }}>
                  <CheckBox
                    value={isSelected15}
                    onValueChange={setSelection15}


                  />
                  <Text style={{ marginLeft: "5%", fontSize: 12 }}>Graphic Design</Text>
                </View>



              </View>



            </View>


          </View>
        </Modal>

        <View style={styles.container}>

          <View style={styles.greytextinput} >

            <TextInput placeholder='Search' style={{ paddingLeft: 35, paddingRight: 35 }} />

            <Image style={{ position: "absolute", left: "5%", top: "35%", tintColor: "#757575" }}
              source={require('../../assets/search.png')}
            />

            <TouchableOpacity onPress={
              () => { setModalVisible(true) }
            }>
              <Image style={{ position: "absolute", left: "90%", top: -23 }}
                source={require('../../assets/searchicon.png')}
              />
            </TouchableOpacity>

          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EcommerceCart')}>
            <View>
              <Image style={{}}
                source={require('../../assets/wallet.png')} />
            </View>
          </TouchableOpacity>
        </View>





      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',



  },

  checkboxes: {

    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"

  },

  checkboxes2: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"

  },

  container: {

    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",


  },



  greytextinput: {
    width: "85%",
    backgroundColor: "#F3F3F3",
    padding: 10,
    borderRadius: 23,
    position: "relative"


  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "90%",
    height: 500,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  loading: {
    transform: "scale(1.8)",
  }
});

export default EcommercePop;
