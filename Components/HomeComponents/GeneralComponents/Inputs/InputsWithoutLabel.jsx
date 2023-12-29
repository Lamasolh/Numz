import React, { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputsWithoutLabel = props => {
    const inputRef = useRef(null);
    const setRefValue = v => {
        const clean = v.replace(/[^0-9]/g, '');
        inputRef.current.value = clean;
        inputRef.current.setNativeProps({ text: clean });
    }

    return (
        <View >

            <View style={styles.Textinputcontainer}>

                {/* <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} >{props.label}</Text> */}

                <TextInput
                    ref={inputRef} editable={props.editable} style={{ fontWeight: 700, color: '#00A081', paddingLeft: 12 }} keyboardType={'numeric'} onChangeText={setRefValue} placeholder={props.placeholder} />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 20
    },
    Textinputcontainer: {
        borderWidth: 2,
        marginTop: 15,
        borderColor: "#E3E5E5",
        borderRadius: 8,
        paddingTop: 15,
        fontSize: 23,
        paddingLeft: 5, height: 50,
    },
})

export default InputsWithoutLabel;