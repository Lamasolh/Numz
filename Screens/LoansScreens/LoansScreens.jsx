import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking,ScrollView } from 'react-native';
import BankingComponentsHeader from "../../Components/BankingComponents/BankingComponentsHeader";
import Loansslidshow from '../../Components/LoanPaySchedComponents/Loansslidshow';
import LoansHeader from '../../Components/LoanPaySchedComponents/LoansHeader';
import Loanspaid from '../../Components/LoanPaySchedComponents/Loanspaid';
import Services from '../../Components/LoanPaySchedComponents/Services';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
const Loans = props => {

  return (
    <>

 
        <ScrollView style={{backgroundColor:"white"}}>

        <View style={styles.container}>
            <LoansHeader title="Loans" navigate='Banking'/>
            <Loansslidshow/>
            <Loanspaid/>
 
            <View style={{marginLeft:8,marginTop:15}}>

<Text style={{fontWeight:"bold", fontSize:18}}>Services</Text>
</View>

<View style={{flex:1,width:"100%",
justifyContent:'stretch'}}>

<ScrollView horizontal={true} style={{ flex:1,}}>

<View style={{  flexDirection:"row", height:150, width:"100%"}}>


<Services navigate='LoanGuide'  title="Loan Guide"  imageUri={require("../../assets/licon1.png")}/>
<TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate(props.navigate)}>

<View  style={{ width:"58%", height:82, position:"relative", justifyContent:"center",alignItems:"center" }}>


<Image style={{ width:"100%", height:63 ,marginTop:8}}
source={require('../../assets/bgicons.png')}

    
/>


<Image style={{  position:"absolute", left:"28%", top:"45%" }}
source={require("../../assets/licon2.png")}

    
/>
</View> 


<Text style={{color:"#007961", fontSize:12}}>E-Passbook</Text>

</TouchableOpacity>

<Services title="Loan Calculator"  imageUri={require("../../assets/licon3.png")} navigate='LoanCalculator'/>

<TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate(props.navigate)}>

<View  style={{ width:"58%", height:82, position:"relative", justifyContent:"center",alignItems:"center" }}>


<Image style={{ width:"100%", height:63 ,marginTop:8}}
source={require('../../assets/bgicons.png')}

    
/>


<Image style={{  position:"absolute", left:"18%", top:"30%" }}
source={require("../../assets/l4.png")}

    
/>
</View> 

<Text style={{color:"#007961", fontSize:12}}>Lending</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.maincontainer} onPress={() => navigation.navigate(props.navigate)}>

<View  style={{ width:"58%", height:82, position:"relative", justifyContent:"center",alignItems:"center" }}>


<Image style={{ width:"100%", height:63 ,marginTop:8}}
source={require('../../assets/bgicons.png')}

    
/>


<Image style={{  position:"absolute", left:"18%", top:"30%" }}
source={require("../../assets/l5.png")}

    
/>
</View> 

<Text style={{color:"#007961", fontSize:12}}>Split Payment</Text>

</TouchableOpacity>
<Services title="Loan Calculator"  imageUri={require("../../assets/l5.png")}/>
<Services title="Loan Calculator"  imageUri={require("../../assets/licon3.png")}/>







</View>
     

        </ScrollView>
        </View>
         </View>

        <SMENavbar/>
        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding:20,
        backgroundColor:"white",
   
    }
    ,
    maincontainer: {
      padding: 5,
      height:115,
      width:"18%",
      elevation:12,
      backgroundColor:"white",
       marginTop:15,
       borderRadius:20,
       alignItems:"center",
      flexDirection:"column",
     marginLeft:10
     
     
  
    },
})


export default Loans;