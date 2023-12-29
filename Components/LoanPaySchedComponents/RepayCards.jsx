
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Repaypopup from "../../Components/LoanPaySchedComponents/Repaypopup";
const YourLoan = props => {

  //const navigation = useNavigation();


  return (
    <>


          
<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%"}}>
  <View style={styles.newcontainer}>

    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>

        <View style={{ width:"40%"}}>
            <Text style={{fontSize:22, fontWeight:"bold", marginRight:"7%"}}>{props.loantxt}{"\n"} {props.loantxt2}</Text>
        </View>

        
        
        <View style={{ width:"5%"}}>
        <Image style={{marginLeft:"13%"}}
                    source={require('../../assets/line.png')}
                  />
        </View>

        <View style={{flexDirection:"column", alignItems:"center"}}>

            <View>
                <Text>Numz Bank</Text>
            </View>

            <View>
        <Image style={{marginTop:10}}
                    source={require('../../assets/BPlogo.png')}
                  />
        </View>
        </View>

    </View>



    <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center",
marginTop:"5%"}}>

<View style={{}}>
    <Text style={{textAlign:"center", color:"#7C7C7C" }}>Amount</Text>
    <Text style={{ textAlign:"center", fontSize:11 }}>$14000</Text>
</View>



<View >
<Text style={{textAlign:"center" , color:"#7C7C7C" }}>Period</Text>
    <Text style={{textAlign:"center" , fontSize:11  }}>15 months</Text>
</View>

<View style={{flexDirection:"column", alignItems:"center"}}>

<Text style={{ textAlign:"center" , color:"#7C7C7C"}}>Rate</Text>
    <Text style={{ textAlign:"center" , fontSize:11 }}>12%</Text>
</View>
</View>


<View style={{marginTop:"10%", justifyContent:"center", alignItems:"center"}}>

    <Text style={{color:"#00A081", fontSize:20}}>$7,000/<Text style={{color:"#7C7C7C"}}>$14,000</Text></Text>
</View>

<View style={{width:"100%", height:20,backgroundColor:"#E3F5F1", marginTop:20,
        borderRadius:20}}>


        <View style={{width:"50%", height:20,backgroundColor:"#00A081",
        borderRadius:20}}>
            <Text style={{color:"white",textAlign:"right",fontSize:14}}>50%</Text>
        </View>

 </View>

 <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", width:"100%"}}>

<Repaypopup/>

 </View>

</View>
        
</View>





    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 20,
    elevation:20,
    width:"90%",
    height:330,
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    shadowColor:"black",
  },

  cardsicons:{

    justifyContent:"center",
    alignItems:"center",
  },

  btncard:{

    width:"45%",
    height:35,
    backgroundColor:"#00A081",
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center"

  }

  

})

export default YourLoan;