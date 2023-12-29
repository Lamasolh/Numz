import React from 'react';
import { StyleSheet, View, ScrollView,Image,Text } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import BankingCards from "../../Components/BankingComponents/BankingCards";
import Bankingpayments from "../../Components/BankingComponents/Bankingpayments";
import BankingCardsbody from "../../Components/BankingComponents/BankingCardsbody";
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Banking = props => {
  const navigation=useNavigation()
    return (
        <View>
            <ScrollView
            >

                <View style={styles.container}>

                    <BankingComponentsHeader title="Banking" navigate='Home'/>


                    <ScrollView
                    horizontal={true}
                        >
                    <View style={styles.cards}>
                   
                  <View   
                  
                  style={styles.newcontainer}
                    >
                    

                      
                          <View style={styles.insidecard} >

                              <View style={{padding:8}}>
                                <Text style={{fontSize:13, color:"#000000"}}>
                                NUMZ
                                </Text>
                                <Text style={{fontSize:10, color:"#7C7C7C"}}>
                                5415612654
                                </Text>
                              </View>


                                <View style={styles.cardimg}>

                            


                                      <Image style={{  }}
                                      source={require('../../assets/cardimg.png')}
                                      />

                                
                                  </View>
                            

                          </View>
                        
                          <View style={styles.botomcard}>
                              <Text style={{fontSize:20, color:"#00A081"}}>$9,000</Text>
                          </View>

                    
                    
                      
                  
                        </View>
    
                    <BankingCards titlecard="Citybank" numbcard="5415612654" price="$14,000"/>
                    <BankingCards titlecard="Citybank" numbcard="5415612654" price="$14,000"/>

                    </View>
                   </ScrollView>
                   <Bankingpayments/>
                   <BankingCardsbody imageUri={require("../../assets/c1.png")}
                   imageUri2={require("../../assets/c2.png")}
                   imageUri3={require("../../assets/c3.png")}
                    title="My Account" txt="This is just some random text to see"
                    title2="Cards" txt2="This is just some random text to see"
                    title3="Services" txt3="This is just some random text to see"
                    navigate2='Cards'
                    navigate1="page1"
                 />

                <BankingCardsbody imageUri={require("../../assets/c4.png")}
                   imageUri2={require("../../assets/c5.png")}
                   imageUri3={require("../../assets/c6.png")}
                    title="Payments" txt="This is just some random text to see"
                    title2="Transfers" txt2="This is just some random text to see"
                    title3="Loans" txt3="This is just some random text to see"
                    navigate2='TransferScreens'
                    navigate1="PaymentsScreens"
                    navigate3="FirstLoan"
                 />

                <BankingCardsbody imageUri={require("../../assets/c7.png")}
                   imageUri2={require("../../assets/c8.png")}
                   imageUri3={require("../../assets/c9.png")}
                    title="Factoring" txt="This is just some random text to see"
                    title2="Micro-Finance" txt2="This is just some random text to see"
                    title3="Remittance" txt3="This is just some random text to see"
                 />
<TouchableOpacity onPress={() => navigation.navigate("CrowdFunding")} >
<View style={styles.maincontainer}>
      <View style={styles.containernew}>
        <View style={styles.insidecard2}>

      <View style={styles.cardinsidecard}>
        <Image style={{   }}
         source={require("../../assets/c10.png")}
        />
        </View>  
        </View>
        <View><Text style={{marginTop:5,fontSize:12, color:"#007961"}}>Crowdfunding</Text></View>
        <View><Text style={{marginTop:5,fontSize:10, color:"#898989"}}>This is just some random text to see</Text></View>
             
      </View>

    </View>
    </TouchableOpacity>
    </View>
     <SMENavbar/>
            </ScrollView>
          
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 15,
      
    },

    cards:{

        flexDirection:"row",
        
    },

    maincontainer:{

        flexDirection:"row",

        
    },
  containernew: {
 
    backgroundColor:"#CAECE5",
    width:"33%",
    height:130,
    borderRadius:15,
  
    padding:10,
    marginLeft:7,
  
  },
  insidecard2: {

   width:"65%",
   height:50,
   borderRadius:10,
    backgroundColor:"white",
    position:"relative",

  },

  cardinsidecard:{


    position:"absolute",
    top:"18%",
    left:"30%"
  },
  newcontainer:{

    padding: 20,
    backgroundColor:"white",
    borderWidth:2,
    borderColor:"#DFDFDF",
    elevation:20,
    width:"31%",
    height:115,
    borderRadius:15,
    marginLeft:10,
    marginTop:20,
    shadowColor:"#00A081",
    marginBottom:10,
  },

 
  insidecard: {

   
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },

  botomcard:{


    justifyContent:"center",
    alignItems:"center",
   
  }


})

export default Banking;