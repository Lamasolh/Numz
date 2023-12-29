import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
import SmallInputswithTitle2 from '../../Components/HomeComponents/GeneralComponents/Inputs/SmallInputswithTitle2';
import { useNavigation } from '@react-navigation/native';
const Log7 = props => {
    const navigation=useNavigation()
  return (
    <>


 
        <ScrollView style={{}}>

        <View style={styles.container} >

            <BankingComponentsHeader title="" navigate='LogisticScreens4'/>
     
      </View>

      <View style={{backgroundColor:"#FFFFFF",elevation:10, borderTopLeftRadius:40,borderTopRightRadius:40,
            }}>

            <Text style={{textAlign:"center", fontSize:20,fontWeight:"bold"
        ,marginTop:20}}>Shipping Details</Text>
       
          
       <Image style={{ marginTop:20,width:"100%"}}
                    source={require('../../assets/Linecall.png')}
                  />


        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Sender Name</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>Andrew Ainsley</Text>
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Phone Number</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>+1 111 467 378 399</Text>
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Email</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>andrew_ainsley@domain.com</Text>
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Address</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>922 Messerschmidet Circle St.</Text>
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15,marginTop:"15%"}}>
            <Text style={{color:"#8E8E8E"}}>Receiver Name</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>Daniel Austin</Text>
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Phone Number</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>+1 111 272 727 387</Text>
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Email</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>daniel_austin@domain.com</Text>
        </View>
        <View style={{justifyContent:"space-between",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E"}}>Address</Text>
            <Text style={{color:"#3E3E3E",fontWeight:"bold"}}>39062 Butternut Pass St.</Text>
        </View>

        <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row",padding:15}}>
            <Text style={{color:"#8E8E8E",fontSize:20}}>Shipping Method</Text>
        </View>

        <View style={styles.btnlogin}>

        <TouchableOpacity 
        style={{
            height: 65,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: "space-around",
            alignItems: 'center',
            elevation:15,

            
        }}
        onPress={() => navigation.navigate('')}
        >
        <Text style={{ color: '#3E3E3E',fontWeight:"bold",fontSize:20 }}>Regular  <Text style={{color:"#8E8E8E"}}> 3-4 days  <Text style={{color:"#06A283"}}> $ 10  </Text></Text></Text>
        </TouchableOpacity>


        </View>

        <View style={{marginTop:"10%",justifyContent:"space-around",alignItems:"center",flexDirection:"row",marginBottom:30}}>

        <TouchableOpacity 
        style={{
            height: 45,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: "center",
            alignItems: 'center',
            width:"30%"
            
        }}
        onPress={() => navigation.navigate('LogisticScreens5')}
        >
        <Text style={{ color: '#00A081',fontWeight:"bold",fontSize:18 }}>Cancel</Text>
        </TouchableOpacity>


        <TouchableOpacity 
        style={{
            height: 55,
            backgroundColor: '#00A081',
            borderRadius: 35,
            justifyContent: "center",
            alignItems: 'center',
            width:"35%"
            
        }}
        onPress={() => navigation.navigate('LogisticScreens8')}
        >
        <Text style={{ color: 'white',fontWeight:"bold",fontSize:18 }}>Confirm</Text>
        </TouchableOpacity>



        </View>

    </View>

   

      <View>


      </View>

   
  
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingLeft:30,
        paddingRight:30,
        padding:10,
        backgroundColor:"white",
        opacity:0.4
    }
    ,
    btnlogin: {

        marginTop:"5%",
        width: "100%",
        justifyContent: "space-around",
        backgroundColor:"white",
        paddingLeft:30,
        paddingRight:30,
    
      },
   
})

export default Log7;