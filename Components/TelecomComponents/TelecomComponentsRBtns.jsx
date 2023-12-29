import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';

const Radio = props => {
    const [selectedRadio, setSelectedRadio] = useState(1)

    return (
        <View style={{marginTop:"10%",justifyContent:"space-around",alignItems:"center",flexDirection:"row"}}>

            <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 ,width:"45%"}} onPress={() => { setSelectedRadio(1) }}>

                {selectedRadio == 1 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 22, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>Save New Card</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#D1D1D1', borderWidth: 2, borderRadius: 22, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Save New Card</Text>
                        </View>
                    </View>}
            </TouchableOpacity>
            <TouchableOpacity style={{width:"45%" }} onPress={() => { setSelectedRadio(2) }}>
                {selectedRadio == 2 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 22, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>Replace Card</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#D1D1D1', borderWidth: 2, borderRadius: 22, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Replace Card</Text>
                        </View>
                    </View>}
            </TouchableOpacity>
          
        </View>
    );

}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    radioText: {
        fontSize: 11,
        color: '#72777A',
        paddingLeft: 7,

    },
    radiobg: {
        justifyContent: 'center',
        marginLeft: 2,
        marginTop: 2,
        backgroundColor: '#00A081',
        height: 20,
        width: 20,
        borderRadius: 20,
    },
    radio: {

        width: 30,
        height: 30,
        borderColor: '#00A081',
        borderRadius: 20,
        borderWidth: 3,
    },
    warper: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center"
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
})
export default Radio;