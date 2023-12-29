import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';
import PayCardsComponentssection2 from "../../Components/PayCardsComponents/PayCardsComponentssection2";
import PayCardsDebitComponents from "../../Components/PayCardsComponents/PayCardsDebitComponents";
const Paycard = props => {

    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("white")
    const [color2, setcolor2] = useState("#000000")

    const [bgcolor, bgsetcolor] = useState("#00A081")
    const [bgcolor2, bgsetcolor2] = useState("lightgrey")
  return (
    <>
    
        
      <View style={styles.container}>

        <TouchableOpacity style={{width:"15%",height:40, backgroundColor:bgcolor, borderRadius:18,
        alignItems:"center",justifyContent:"center",marginLeft:5,}}
        onPress={() => {setShowComponent(true),setShowComponent2(false),
            setcolor2("#000000"),bgsetcolor2("lightgrey"),
            setcolor("#FFFFFF"),bgsetcolor("#00A081")}}>

            <Text style={{color:color, fontSize:12}}>Credit</Text>
       
        </TouchableOpacity>
        
        <TouchableOpacity style={{width:"15%",height:40, backgroundColor:bgcolor2, borderRadius:18,
        alignItems:"center",justifyContent:"center",marginLeft:5,}}
        onPress={() => {setShowComponent(false),setShowComponent2(true),
            setcolor2("#FFFFFF"),bgsetcolor2("#00A081"),
            setcolor("#000000"),bgsetcolor("lightgrey")}}>

            <Text style={{color:color2, fontSize:12}}>Debit</Text>
       
        </TouchableOpacity>

        <View style={{width:"20%",height:40, backgroundColor:"lightgrey", borderRadius:18,
        alignItems:"center",justifyContent:"center",marginLeft:5,}}>

            <Text style={{color:"#000000", fontSize:12}}>Corporate</Text>
       
        </View>

        <View style={{width:"20%",height:40, backgroundColor:"lightgrey", borderRadius:18,
        alignItems:"center",justifyContent:"center",marginLeft:5,}}>

            <Text style={{color:"#000000", fontSize:12}}>Prepaid</Text>
       
        </View>

        <View style={{width:"20%",height:40, backgroundColor:"lightgrey", borderRadius:18,
        alignItems:"center",justifyContent:"center",marginLeft:5,}}>

            <Text style={{color:"#000000", fontSize:12}}>Corporate</Text>
       
        </View>
       

      </View>
    
    {showComponent &&
    <PayCardsComponentssection2/>
    }

{showComponent2 &&
    <PayCardsDebitComponents/>
    }


    </>



  );
}


const styles = StyleSheet.create({

  container: {
   marginTop:10,
    flexDirection:"row",
    width:"100%",

  },

})

export default Paycard;