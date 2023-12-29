import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Image,ActivityIndicator,TouchableOpacity,  TouchableHighlight} from 'react-native';
import Cardsslidshow from "../../Components/CardsComponents/Cardsslidshow";

const Bankinfopop =props=> {


  const [modalVisible, setModalVisible] = useState(false);

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
            <View style={{width:"100%"}}>
              <Cardsslidshow/>
              </View>
            
          
            
            <TouchableOpacity style={{justifyContent:"center",width:"30%", alignItems:"center"}} onPress={() =>
              navigation.navigate('')}>
                
            <Image style={{marginTop:9,   }}
                    source={require('../../assets/cardi1.png')}
                    />

          <Text style={{fontSize:13, color:"#00A081"}}>Add new card</Text>
            </TouchableOpacity> 

           
            <TouchableHighlight 

     
     
style={{width:"100%",}}

onPress={() =>
  navigation.navigate('TotalBalanceScreen')}
  >
  <View style={{width:"100%", backgroundColor:"#00A081", height:50, color:"white",
  borderRadius:25, alignItems:"center", justifyContent:"center", marginTop:40}}>

      <Text style={{color:"white", fontSize:16}}>Confirm Card</Text>
  </View>



</TouchableHighlight>

     
          </View>


        </View>
        
      
      </Modal>

      
      <TouchableHighlight

     
     
      style={{width:"100%",}}
      
        onPress={
            () => { setModalVisible(true)}
                }
        >
        <View style={{width:"100%", backgroundColor:"#00A081", height:50, color:"white",
        borderRadius:25, alignItems:"center", justifyContent:"center"}}>

            <Text style={{color:"white", fontSize:16}}>Click</Text>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width:"100%",
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

