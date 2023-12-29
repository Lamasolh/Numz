import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Image,ActivityIndicator,  TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Bankinfopop =props=> {


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
          <Image style={{}}
                source={require('../../assets/popupimage.png')}
            />
            
            <View style={styles.congrats}>

            <Text style={{fontSize:23, fontWeight:"bold", color:"#00A081"}}>Congratulations!</Text>

            </View>

            <View style={styles.congrats}>

            <Text style={{textAlign:"center"}}>Registration sucessful.</Text>

            </View>

            <View style={{padding:30}}>
            <ActivityIndicator  size="larger" color="#3AE180" style={styles.loading}

            
            >

               
            </ActivityIndicator>
            </View>
          </View>


        </View>
      </Modal>

      
      <TouchableHighlight

     
     
      style={{width:"100%",}}
      
        onPress={
            () => { setModalVisible(true),setTimeout(()=>{navigation.navigate("Home") }, 2000)}
                }
        >
        <View style={{width:"100%", backgroundColor:"#00A081", height:50, color:"white",
        borderRadius:25, alignItems:"center", justifyContent:"center"}}>

            <Text style={{color:"white", fontSize:16}}>Save</Text>
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
    width:"80%",
    height:500,
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

    marginTop:20,
   
  },
  loading:{

    transform:"scale(1.8)",
  }
});


export default Bankinfopop
/*

<Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>


*/

