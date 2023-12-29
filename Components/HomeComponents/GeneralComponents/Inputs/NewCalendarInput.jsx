import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Modal,
    Image
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useState } from "react";
  import DatePicker from "react-native-modern-datepicker";
  import { getFormatedDate } from "react-native-modern-datepicker";
  
  
  export default function App(props) {
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate(
      today.setDate(today.getDate() + 1),
      "YYYY/MM/DD"
    );
    const [selectedStartDate, setSelectedStartDate] = useState("November 5");
    const [startedDate, setStartedDate] = useState("12/12/2023");
  
    function handleChangeStartDate(propDate) {
      setStartedDate(propDate);
    }
  
    const handleOnPressStartDate = () => {
      setOpenStartDatePicker(!openStartDatePicker);
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : ""}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
           
  
            <View style={{ width: "100%",position:"relative" }}>
              <View>
             
                <View
                  style={styles.inputBtn}
                 
                >
                    <View>
                     <Text style={{ fontSize: 10,  color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>
                     </View>
                  <Text style={{color:"#00A081"}}>{selectedStartDate}</Text>

                  <TouchableOpacity  onPress={handleOnPressStartDate} style={styles.stopbtn}>

                    <Image source={require('../../../../assets/calanderimg.png')}></Image>

                        </TouchableOpacity>
                </View>

           
              </View>
  
           
            </View>
  
            {/* Create modal for date picker */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={openStartDatePicker}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    minimumDate={startDate}
                    selected={startedDate}
                    onDateChanged={handleChangeStartDate}
                    onSelectedChange={(date) => setSelectedStartDate(date)}
                    options={{
                      backgroundColor: "#080516",
                      textHeaderColor: "#469ab6",
                      textDefaultColor: "#FFFFFF",
                      selectedTextColor: "#FFF",
                      mainColor: "#469ab6",
                      textSecondaryColor: "#FFFFFF",
                      borderColor: "rgba(122, 146, 165, 0.1)",
                    }}
                  />
  
                  <TouchableOpacity onPress={handleOnPressStartDate}>
                    <Text style={{ color: "white" }}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    stopbtn:{

        width:"20%",
        height:23,
        color:"#EB001B",
        borderRadius:10
        , justifyContent:"center"
        ,alignItems:"center",
        position:"absolute",
        left:"83%",
        top:"30%",
      
    },
    inputBtn: {
        borderWidth: 2,
        
        borderColor: '#E3E5E5',
        borderRadius: 8,
   
        paddingLeft: 5,  height: 55,
        backgroundColor: "#F1F1F1",
        paddingLeft:10,
        justifyContent:"center",
       
     
    },
    submitBtn: {
      backgroundColor: "#342342",
    
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingVertical: 12,
      marginVertical: 16,
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "#080516",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 35,
      width: "90%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
  