import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const RealEstateList = props => {
    const navigation = useNavigation()
    return (
        <>

            <View style={styles.container}>

                <TouchableOpacity onPress={() => navigation.navigate('RealChart')}>




                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/digital.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Digital Asset
                            </Text>
                        </View>

                    </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('InvestingTop')}>



                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/mort.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Mortgage</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>



                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/insurance1.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Insurance</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>



                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/legals.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Legal Support</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>



                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/utility.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Utility Bills</Text>
                        </View>

                    </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('')}>



                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/taxes.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Taxes</Text>
                        </View>

                    </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('')}>



                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/rent.png')}
                            />
                        </View>


                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Rent Payments</Text>
                        </View>

                    </View>

                </TouchableOpacity>





            </View>




            <View style={styles.smeanimationbottom}>

                <Image style={{}}
                    source={require('../../assets/smeanimation.png')}
                />

            </View>


        </>



    );
}


const styles = StyleSheet.create({

    container: {
        width: "100%",

    },

    list: {
        borderBottomWidth: 1,
        borderColor: "#0000001C",
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },

    smeanimationbottom: {

        position: "relative",
        top: "5%",
    }

})

export default RealEstateList;