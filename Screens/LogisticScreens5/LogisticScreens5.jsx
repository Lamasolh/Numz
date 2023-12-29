import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Inputwithgreybackground from '../../Components/HomeComponents/GeneralComponents/Inputs/Inputwithgreybackground';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
import BigButton3 from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';
import SmallInputswithTitle2 from '../../Components/HomeComponents/GeneralComponents/Inputs/SmallInputswithTitle2';
import { useNavigation } from '@react-navigation/native';
const Log5 = props => {
    const navigation=useNavigation()
  return (
    <>

 
        <ScrollView style={{}}>

        <TouchableOpacity style={styles.container}   onPress={() => navigation.navigate('LogisticScreens4')}>

            <BankingComponentsHeader title="" navigate='LogisticScreens4'/>

        <View style={{flexDirection:"row", width:"100%",justifyContent:"center",alignItems:"center",marginLeft:"10%"}}>

            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <View style={{width:"90%",height:40,backgroundColor:"#06A283",borderRadius:30
            ,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>1</Text>
            </View>
                <Text style={{color:"#06A283",fontSize:13}}>Sender</Text>
            </View>

            <View style={{position:"relative",top:"-3%",left:"-15%"}}>
                <Text style={{color:"#06A283"}}>---------</Text>
            </View>



            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",left:"-30%"}}>

            <View style={{width:"70%",height:40,backgroundColor:"#06A283",borderRadius:30
            ,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>2</Text>
            </View>
                <Text style={{color:"#06A283",fontSize:13}}>Receiver</Text>
            </View>

            <View style={{position:"relative",top:"-3%",left:"-43%"}}>
                <Text style={{color:"#06A283"}}>---------</Text>
            </View>


            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",left:"-60%"}}>

            <View style={{width:"70%",height:40,backgroundColor:"#06A283",borderRadius:30
            ,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>3</Text>
            </View>
                <Text style={{color:"#06A283",fontSize:13}}>Package</Text>
            </View>

            <View style={{position:"relative",top:"-3%",left:"-74%"}}>
                <Text style={{color:"#8E8E8E"}}>---------</Text>
            </View>


            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",left:"-88%"}}>

            <View style={{width:"70%",height:40,backgroundColor:"#8E8E8E",borderRadius:30
            ,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>4</Text>
            </View>
                <Text style={{color:"#8E8E8E",fontSize:13}}>Payment</Text>
            </View>

            <View style={{position:"relative",top:"-3%",left:"-105%"}}>
                <Text style={{color:"#8E8E8E"}}>---------</Text>
            </View>


            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",left:"-110%"}}>

            <View style={{width:"100%",height:40,backgroundColor:"#8E8E8E",borderRadius:30
            ,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>5</Text>
            </View>
                <Text style={{color:"#8E8E8E",fontSize:13}}>Finish</Text>
            </View>

        </View>
        
            <Inputwithgreybackground label="Receiver’s Name"/>
            <Inputwithgreybackground label="Phone Number"/>
            <Inputwithgreybackground label="Email"/>

         
      </TouchableOpacity>

      <View style={{backgroundColor:"#FFFFFF",elevation:10, borderTopLeftRadius:40,borderTopRightRadius:40,
    }}>

            <Text style={{textAlign:"center", fontSize:20,fontWeight:"bold"
        ,marginTop:20}}>Shipping</Text>


        <View style={styles.btnlogin2}>

        <TouchableOpacity 
        style={{
            height: 55,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation:10
        }}
        onPress={() => navigation.navigate('LogisticScreens6')}
        >
        <Text style={{ color: '#3E3E3E',fontWeight:"bold",fontSize:18 }}>Regular    <Text style={{color:"#8E8E8E"}}> 3-4 days    <Text style={{color:"#06A283"}}> $ 10    </Text></Text></Text>
        </TouchableOpacity>


        </View>


        <View style={styles.btnlogin2}>

        <TouchableOpacity 
        style={{
            height: 55,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation:10
        }}
        onPress={() => navigation.navigate()}
        >
        <Text style={{ color: '#3E3E3E',fontWeight:"bold",fontSize:18 }}>Cargo    <Text style={{color:"#8E8E8E"}}> 3-4 days    <Text style={{color:"#06A283"}}> $ 10    </Text></Text></Text>
        </TouchableOpacity>


        </View>


        <View style={styles.btnlogin2}>

        <TouchableOpacity 
        style={{
            height: 55,
            backgroundColor: 'white',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation:10,
            marginBottom:50
        }}
        onPress={() => navigation.navigate()}
        >
        <Text style={{ color: '#3E3E3E',fontWeight:"bold",fontSize:18}}>Truck    <Text style={{color:"#8E8E8E"}}> 3-4 days    <Text style={{color:"#06A283"}}> $ 10    </Text></Text></Text>
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
        padding:30,
        backgroundColor:"white",
        opacity:0.5
    }
    ,
    btnlogin: {

        marginTop:"10%",
        width: "100%",
        justifyContent: "center",
    
    
      },
      btnlogin2: {

        marginTop:"10%",
        width: "100%",
        paddingLeft:30,
        paddingRight:30,
        justifyContent: "center",
    
    
      },
})

export default Log5;