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

export default function DatePickerIOS({ value, label, handleOnChange, name }) {
  const [datePicker, setDatePicker] = useState(false);
  const [hideBtns, setHideBtns] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    handleOnChange(name, date)
  }, [date])

  function showDatePicker() {
    setDatePicker(true);
    setHideBtns(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
  }
  const confirmCancel = () => {
    setDatePicker(false);
    setHideBtns(false);
  };
  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.input}>
        <Text style={styles.label}>{label}</Text>
          <TextInput style={styles.date}>{date.toLocaleString().substr(0, 9)}</TextInput>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: datePicker ? 1 : 0,
          marginTop: "4%",
          borderColor: "#D9D8D8",
        }}
      >
        {hideBtns ? (
          <View style={styles.btns}>
            <View>
              <TouchableOpacity onPress={confirmCancel}>
                <View style={styles.cancelBtn}>
                  <Text
                    style={{ color: "#595959", fontSize: RFPercentage(1.8) }}
                  >
                    Cancel
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Select A Date</Text>
            </View>
            <View>
              <TouchableOpacity onPress={confirmCancel}>
                <View>
                  <Text
                    style={{ color: "#309694", fontSize: RFPercentage(1.8) }}
                  >
                    Confirm
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )}
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
            themeVariant="light"
          />
        )}
      </View>
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
