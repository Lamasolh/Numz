import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Entertainmentsearch from '../../Components/EntertainmentComponents/Entertainmentsearch';
import FlightsCards from '../../Components/EntertainmentComponents/FlightsCards';
import EntertainmentCards2 from '../../Components/EntertainmentComponents/EntertainmentCards2';
import EntertainmentCards3 from '../../Components/EntertainmentComponents/EntertainmentCards3';
import TelecomHeader from '../../Components/TelecomComponents/TelecomHeader';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
const Ent4 = props => {
   

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>


        <View style={styles.container}>

        <TelecomHeader title="" navigate='EntertainmentScreeen3'/>

        <View>
            <Text style={{fontSize:20,fontWeight:"bold",marginTop:"15%",paddingLeft:"5%"}}>Price Summary</Text>

        </View>

        <View style={{flexDirection:"row",justifyContent:"flex-start",marginTop:"5%"}}>

        <Image style={{ marginTop: 5, paddingTop: 10 }}
                    source={require('../../assets/emirates.png')}
                  />

            <Text style={{fontSize:17,paddingLeft:"5%"}}>MEL &#x2194; SIN, return flight</Text>

        
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"5%"}}>

        <Text style={{color:"#AEAEB3"}}>2 x Adults </Text>
        <Text>$1200 </Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"2%"}}>

        <Text style={{color:"#AEAEB3"}}>2 x Children </Text>
        <Text>$580 </Text>
        </View>
        <Image style={{marginTop:20}}
              source={require('../../assets/lineent.png')}
        />



<View style={{flexDirection:"row",justifyContent:"flex-start",marginTop:"5%"}}>

<Image style={{ marginTop: 5, paddingTop: 10 }}
            source={require('../../assets/emirates.png')}
          />

    <Text style={{fontSize:17,paddingLeft:"5%"}}>SIN &#x2194; LHR, return flight</Text>


</View>
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"5%"}}>

<Text style={{color:"#AEAEB3"}}>2 x Adults </Text>
<Text>256,000 Points </Text>
</View>

<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"2%"}}>

<Text style={{color:"#AEAEB3"}}>2 x Children </Text>
<Text>128,000 Points </Text>
</View>
<Image style={{marginTop:20}}
      source={require('../../assets/lineent.png')}
/>


<View style={{flexDirection:"row",justifyContent:"flex-start",marginTop:"2%"}}>


</View>
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"5%"}}>

<Text style={{color:"black"}}>1 x Hilton, Family room, 1 night </Text>
<Text>$320 </Text>

</View>
<View style={{marginTop:"5%"}}>
<Text style={{color:"#AEAEB3"}}>9	&#8212; 10May</Text>
</View>
<Image style={{marginTop:20}}
      source={require('../../assets/lineent.png')}
/>

<View style={{marginTop:"25%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

    <Text style={{color:"#AEAEB3",fontSize:20}}>Total</Text>

    <Text style={{color:"#00A081",fontSize:25,fontWeight:"bold"}}>$ 1,701.59</Text>
</View>

<BigButton3 title='Confirm Order' navigate='EntertainmentScreeen5'/>
        </View>
      
        <SMENavbar/>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:30,
        backgroundColor:"white",
      
    }
    ,
  
})


export default Ent4;