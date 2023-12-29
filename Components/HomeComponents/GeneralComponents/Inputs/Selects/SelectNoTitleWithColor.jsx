import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const NewSelectnobg2 = props => {
    const countries = ["Debit - 2331", "", ""]
    return (
        <View style={{width:"60%"}}>
          
            <SelectDropdown 
                
                renderDropdownIcon={() => (
                
                    <Ionicons name="chevron-down-outline" size={20} color="#595959" />
                )}
                
                dropdownIconPosition="right"
                defaultButtonText={props.label}
                autoScroll
                data={countries}
                buttonStyle={styles.btnselectstyle}
                buttonTextStyle={styles.btnselectxtstyle}
                dropdownStyle={styles.dropdownHour}
                rowTextStyle={styles.rows}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      
        padding: 20,
        
    },
    btnselectstyle: {
        backgroundColor: "white",
        paddingLeft: "4%",
        width: "100%",
        height: 55,
        // paddingVertical:"1.2%",
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 2,
        borderColor: '#E3E5E5',
        borderWidth: 1,
        borderLeftWidth:7,
        marginTop: 15,
        borderColor: '#3545A7',
        borderRadius:5,
    },

    btnselectxtstyle: {
        fontSize: RFPercentage(1.6),
        color: "rgba(114, 119, 122, 1)",
        textAlign: "left",
        
    },
    dropdownHour: {
        marginTop: "-7%",
        
    },
    rows: {
        fontSize: RFPercentage(1.8),
       
    },

})

export default NewSelectnobg2;