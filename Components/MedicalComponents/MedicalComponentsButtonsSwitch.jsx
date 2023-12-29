import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MedicalComponentsProfile from "../../Components/MedicalComponents/MedicalComponentsProfile";
const Btns =props=> {


    const navigation=useNavigation();
    
    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("#00A081")
    const [color2, setcolor2] = useState("#686161")

    const [bgcolor, bgsetcolor] = useState("white")
    const [bgcolor2, bgsetcolor2] = useState("#C4C4C499")
  return (


    <>
 
 <View style={styles.newcontainer}>

<TouchableOpacity style={{
    width: "50%",
    padding: 10,
    backgroundColor: bgcolor,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    elevation:20,
    shadowColor:"black",
   
   
}}
    onPress={() => {
        setShowComponent(true), setShowComponent2(false),
        setcolor2("#686161"), bgsetcolor2("#C4C4C499"),
        setcolor("#00A081"), bgsetcolor("white")
    }}><Text style={{ color: color }} >Upcoming</Text></TouchableOpacity>

<TouchableOpacity style={{
    width: "50%",
    padding: 10,
    backgroundColor: bgcolor2,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    elevation:20,
    shadowColor:"black",
    
}}
    onPress={() => {
        setShowComponent(false), setShowComponent2(true),
        setcolor("#686161"), bgsetcolor("#C4C4C499"),
        setcolor2("#00A081"), bgsetcolor2("white")
    }}>
    <Text style={{ color: color2 }} >Past</Text></TouchableOpacity>

</View>


{showComponent &&  

<>
<View style={{marginLeft:"5%",paddingLeft:30}}>
<MedicalComponentsProfile  path={require("../../assets/dprofile.png")}/>
</View>

<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"7%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/cal2.png')}
/>

<Text style={{marginLeft:20}}>September 10</Text>
</View>


<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"6%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/clock.png')}
/>

<Text style={{marginLeft:20}}>11:00 AM </Text>
</View>

<View style={{marginTop:"10%", justifyContent:"space-around", alignItems:"center"
,flexDirection:"row",paddingLeft:30,paddingRight:30}}>

<TouchableOpacity   onPress={() => navigation.navigate('MedicalScreens4')} style={{width:"40%",height:50,backgroundColor:"white", borderWidth:2,
borderColor:"#00A081",borderRadius:25,justifyContent:"center",alignItems:"center"}}>

    <Text style={{color:"#00A081"}}>Rechedule</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('MedicalScreens6')} style={{width:"50%",height:50,backgroundColor:"#00A081", borderWidth:2,
borderColor:"#00A081",borderRadius:25,justifyContent:"center",alignItems:"center"}}>

    <Text style={{color:"white"}}>Start Video Call</Text>
</TouchableOpacity>

</View>

<View style={{width:"100%",marginTop:30}}>
        <Image style={{width:"100%" }}
        source={require('../../assets/Linecall.png')}
        />
        </View>




        <View style={{marginLeft:"5%",paddingLeft:30}}>
<MedicalComponentsProfile  path={require("../../assets/dprofile.png")}/>
</View>

<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"7%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/cal2.png')}
/>

<Text style={{marginLeft:20}}>September 10</Text>
</View>


<View style={{justifyContent:"flex-start", alignItems:"center"
, flexDirection:"row",marginTop:30,marginLeft:"6%",paddingLeft:30}}>

<Image style={{ }}
source={require('../../assets/clock.png')}
/>

<Text style={{marginLeft:20}}>11:00 AM </Text>
</View>

<View style={{marginTop:"10%", justifyContent:"space-around", alignItems:"center"
,flexDirection:"row",paddingLeft:30,paddingRight:30}}>

<TouchableOpacity onPress={() => navigation.navigate('MedicalScreens4')} style={{width:"40%",height:50,backgroundColor:"white", borderWidth:2,
borderColor:"#00A081",borderRadius:25,justifyContent:"center",alignItems:"center"}}>

    <Text style={{color:"#00A081"}}>Rechedule</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('MedicalScreens6')} style={{width:"50%",height:50,backgroundColor:"#00A081", borderWidth:2,
borderColor:"#00A081",borderRadius:25,justifyContent:"center",alignItems:"center"}}>

    <Text style={{color:"white"}}>Start Video Call</Text>
</TouchableOpacity>

</View>

</>

}



    </>
  );
    
}


const styles = StyleSheet.create({

    newcontainer: {

        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation:30,
        padding:30
       
      

    },
  


})


export default Btns;