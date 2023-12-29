import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import CrowdHeader from '../../Components/CrowdFunding/CrowdHeader';
import Searchbar from '../../Components/HomeComponents/CardsSearchbar';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
import Services from '../../Components/CrowdFunding/Services';
import { ScrollView } from 'react-native';
import RecentCards from '../../Components/CrowdFunding/RecentCards';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Crowd = props => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <CrowdHeader title="Crowdfunding" navigate2="Banking" />
                <View style={{ marginTop: 10 }}>
                    <Searchbar />
                </View>

                <View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '90%', position: 'absolute', top: 30 }} source={require('../../assets/crowd.png')}
                        />

                    </View>
                    <View style={{ paddingRight: 60 }}>
                        <Text style={{ position: 'relative', paddingLeft: 25, top: 50, fontWeight: 600, fontSize: 15 }}>Whatever the funding you need, you can</Text>
                        <Text style={{ color: 'rgba(0, 160, 129, 1)', position: 'relative', paddingLeft: 25, top: 50, fontWeight: 600, fontSize: 15 }}>start now!</Text>
                    </View>
                    <View>
                        <View style={{ position: 'relative', backgroundColor: 'rgba(62, 180, 137, 1)', width: '45%', left: 25, top: 60, borderRadius: '10px' }}>
                            <Button color='white' title='Start Campaign' onPress={() => navigation.navigate("CrowdFundingCategory")} />

                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch', marginTop: 100
                }}>

                    <ScrollView horizontal={true} style={{ flex: 1, }}>

                        <View style={{ flexDirection: "row", height: 150, width: "100%" }}>
                            <Services navigate='Startups' title="Startups" imageUri={require("../../assets/plane.png")} />
                            <Services navigate='education' title="Education" imageUri={require("../../assets/education.png")} />
                            <Services navigate='health' title="Health" imageUri={require("../../assets/health.png")} />


                            <Services navigate='CrowdFundingTwo' title="Disasters" imageUri={require("../../assets/disasters.png")} />

                            <Services navigate='Startups' title="Startups" imageUri={require("../../assets/plane.png")} />
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch',
                }}>
                    <Text style={{ paddingLeft: 16, paddingBottom: 10, fontSize: 17.24, fontWeight: 700 }}>Recent</Text>
                    <ScrollView horizontal={true} style={{ flex: 1, }}>
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="India, Mumbia" text="Cancer treatement in need of" text1="white blood scells" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                    </ScrollView>
                </View>
                <View style={{
                    flex: 1, width: "100%",
                    justifyContent: 'stretch',
                }}>
                    <Text style={{ paddingLeft: 16, paddingBottom: 10, fontSize: 17.24, fontWeight: 700 }}>Disasters</Text>
                    <ScrollView horizontal={true} style={{ flex: 1, }}>
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="India, Mumbia" text="Cancer treatement in need of" text1="white blood scells" text2="$100,000" text3="raised" />
                        <RecentCards image={require('../../assets/recent1.png')} title="Australia, Syndey" text="Sara broken legs and hips" text1="need surgery" text2="$100,000" text3="raised" />
                    </ScrollView>
                </View>
                <SMENavbar />
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
})
export default Crowd