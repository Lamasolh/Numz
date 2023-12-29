import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { ScrollView, View } from 'react-native';

const RecentCards = props => {
    const navigation=useNavigation()
    return (
        <View style={{ paddingLeft: 20, paddingBottom: 25 }}>
        <TouchableOpacity onPress={() => navigation.navigate("CrowdFundingDetials")}>
            
            <View style={{ borderRadius: '15px, 15px, 0px, 0px' }}>
                <Image style={{}}
                    source={props.image}


                />

            </View>
            <View style={{
                backgroundColor: 'white', borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 6,
                elevation: 6, padding : 9
            }}>
                <Text style={{fontSize:12.66,fontWeight:800,lineHeight:19.62}}>{props.title}</Text>
            <Text style={{color:'rgba(105, 105, 105, 1)',fontWeight:'400',fontSize:11.08}} >{props.text}  </Text>
            <Text style={{color:'rgba(105, 105, 105, 1)',fontWeight:'400',fontSize:11.08}}>{props.text1} </Text>
              <View style={{paddingTop:20}}>
                <Text style={{textAlign:'center'}}><Text style={{color:'rgba(0, 160, 129, 1)'}}>{props.text2} </Text>{props.text3} </Text>
              <Image style={{}}
                    source={require('../../assets/line1.png')}


                />
            </View> 
            </View>
         </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({

})

export default RecentCards;