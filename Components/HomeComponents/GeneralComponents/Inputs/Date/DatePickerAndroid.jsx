import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePickerAndroid({ label, handleOnChange, name }) {

  useEffect(()=>{
    
    // handleOnChange(name,date)
  }, [date])
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    handleOnChange(name,value)
    setDatePicker(false);
    setDate(value);
  }
  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.input}>
        <Text style={styles.label}>{label}</Text>
          <Text style={styles.date}>{date.toLocaleString().substr(0, 10)}</Text>
        </View>
      </TouchableOpacity>
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onDateSelected}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "100%",
    // paddingHorizontal:400,
    // aspectRatio: 8.6 / 1,
    // paddingVertical:"1.2%",
    height: 45,
    backgroundColor: "rgba(227, 229, 229, 1)",
    borderRadius: 8,
    paddingLeft: "4%",
    marginTop: "1%",
    color:'rgba(0, 160, 129, 1)',
    fontSize: RFPercentage(1.5),
    justifyContent: "center",
  },
  subCont: {
    flexDirection: "column",
    width: "90%",
    marginTop: "4%",
  },
  label: {
    paddingLeft: "1.5%",
    color: "rgba(114, 119, 122, 1)",
    fontSize: RFPercentage(1.5),
  },
  date: {
    paddingLeft: "1.5%",
    fontSize: RFPercentage(1.47),
    color: "rgba(0, 160, 129, 1)",
  },
  datePicker: {
    // backgroundColor:"black"
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    paddingBottom: "3%",
    paddingTop: "3%",
    borderBottomColor: "#D9D8D8",
    borderBottomWidth: 1,
  },
  cancelBtn: {
    paddingHorizontal: "3%",
  },
});