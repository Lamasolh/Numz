import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const InnovationList = props => {

    const navigation = useNavigation()

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('MentorShip')}>
                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/mentor.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Mentorship And Guidance
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('InvestingTop')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/seed.png')}
                            />
                        </View>
                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Seed Funding
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/access.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Access to angel Investors/Venture Capital</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/manag.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Intellectual Property Management</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/marketing.png')}
                            />
                        </View>
                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Marketing Expertise</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>

                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/finance.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Finance/Accounting services</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/talent.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Talent Acquisition</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/plans.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Precise Marketing Plans</Text>
                        </View>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/Effect.png')}
                            />
                        </View>
                        <View>

                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Effective Software Developement</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/product.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Product & Platform Advisory</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/proto.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Discovery & Prototyping</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.list}>
                        <View>
                            <Image style={{ marginTop: 15, marginLeft: 15, }}
                                source={require('../../assets/tech.png')}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Technical assistance</Text>
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

export default InnovationList;