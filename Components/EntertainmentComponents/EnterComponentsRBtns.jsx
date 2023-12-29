import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';

const Radio = props => {
    const [selectedRadio, setSelectedRadio] = useState(1)

    return (
        <View style={{marginTop:"10%",justifyContent:"space-around",alignItems:"center",flexDirection:"row"}}>

            <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 ,width:"30%"}} onPress={() => { setSelectedRadio(1) }}>

                {selectedRadio == 1 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 18, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>Economy</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#72777A', borderWidth: 2, borderRadius: 18, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Economy</Text>
                        </View>
                    </View>}
            </TouchableOpacity>
            <TouchableOpacity style={{width:"30%" }} onPress={() => { setSelectedRadio(2) }}>
                {selectedRadio == 2 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 18, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>Business Class</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#72777A', borderWidth: 2, borderRadius: 18, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Business Class</Text>
                        </View>
                    </View>}
            </TouchableOpacity>


            <TouchableOpacity style={{width:"30%" }} onPress={() => { setSelectedRadio(3) }}>
                {selectedRadio == 3 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 18, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>First Class</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#72777A', borderWidth: 2, borderRadius: 18, paddingLeft: 10, paddingBottom: 10}}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>First Class</Text>
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
        fontSize: 9,
        color: '#72777A',
        paddingLeft: 2,
        paddingRight:5,

    },
    radiobg: {
        justifyContent: 'center',
        marginLeft: 2,
        marginTop: 2,
        backgroundColor: '#00A081',
        height: 10,
        width: 10,
        borderRadius: 20,
    },
    radio: {

        width: 20,
        height: 20,
        borderColor: '#00A081',
        borderRadius: 20,
        borderWidth: 3,
    },
    warper: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:"space-around",
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