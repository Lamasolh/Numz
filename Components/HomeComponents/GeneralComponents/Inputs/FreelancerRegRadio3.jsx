import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';

const Radio = props => {
    const [selectedRadio, setSelectedRadio] = useState(1)

    return (
        <View style={{marginTop:"10%"}}>

            <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(1) }}>

                {selectedRadio == 1 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>{props.first}</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#D1D1D1', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>{props.first}</Text>
                        </View>
                    </View>}
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingBottom: 10 }} onPress={() => { setSelectedRadio(2) }}>
                {selectedRadio == 2 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>{props.sec}</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#D1D1D1', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>{props.sec}</Text>
                        </View>
                    </View>}
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingBottom: 10 }} onPress={() => { setSelectedRadio(3) }}>
                {selectedRadio == 3 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>{props.third}</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#D1D1D1', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>{props.third}</Text>
                        </View>
                    </View>}
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingBottom: 10 }} onPress={() => { setSelectedRadio(4) }}>
                {selectedRadio == 4 ? <View style={{ borderColor: '#00A081', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                    <View style={styles.warper}>
                        <View style={styles.radio}>
                            {selectedRadio == 4 ? <View style={styles.radiobg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>{props.forth}</Text>
                    </View>
                </View>
                    :
                    <View style={{ borderColor: '#D1D1D1', borderWidth: 2, borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
                        <View style={styles.warper}>
                            <View style={styles.radio}>
                                {selectedRadio == 4 ? <View style={styles.radiobg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>{props.forth}</Text>
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
        fontSize: 14.5,
        color: '#72777A',
        paddingLeft: 7,

    },
    radiobg: {
        justifyContent: 'center',
        marginLeft: 1,
        marginTop: 1,
        backgroundColor: '#00A081',
        height: 12,
        width: 12,
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
        flexDirection: 'row'
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