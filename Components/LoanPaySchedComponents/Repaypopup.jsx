import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Image,ActivityIndicator, TouchableOpacity, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Repaypop =props=> {


  const [modalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation();

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

            <Text style={{fontSize:18, fontWeight:"bold"}}>Loan Payment Details</Text>


            <TouchableOpacity
         onPress={() => setModalVisible(false)}>


                <Image style={{ marginTop: 5, paddingTop: 10 }}
                    source={require('../../assets/close.png')}
                  />

          </TouchableOpacity>

            </View>

            <TouchableHighlight

                    
                    
                style={{width:"100%",justifyContent:"center", alignItems:"center", marginTop:"40%"}}

                onPress={
                    () => { setModalVisible(true),setTimeout(()=>{navigation.navigate("Home") }, 2000)}
                        }
                >
                <View style={{width:"80%", backgroundColor:"#00A081", height:40, color:"white",
                borderRadius:25, alignItems:"center", justifyContent:"center"}}>

                    <Text style={{color:"white", fontSize:13}}>Confirm</Text>
                </View>



                </TouchableHighlight>

    
          </View>


        </View>
      </Modal>

      
      <TouchableHighlight

     
     
      style={{width:"100%",justifyContent:"center", alignItems:"center"}}
      
        onPress={
            () => { setModalVisible(true)}
                }
        >
        <View style={{width:"80%", backgroundColor:"#00A081", height:40, color:"white",
        borderRadius:25, alignItems:"center", justifyContent:"center"}}>

            <Text style={{color:"white", fontSize:13}}>Repay</Text>
        </View>

    

      </TouchableHighlight>

      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    width:"90%",
    height:280,
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

  congrats:{
    width:"100%",
    marginTop:20,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row"
   
  },
  loading:{

    transform:"scale(1.8)",
  }
});


export default Repaypop
/*

<Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>


*/

