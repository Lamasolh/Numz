import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Mbtns =props=> {

  //const navigation=useNavigation();
  const [color, setcolor] = useState("black");
  const [color2, setcolor2] = useState("black");
  const [color3, setcolor3] = useState("black");
  const [color4, setcolor4] = useState("black");
  const [color5, setcolor5] = useState("black");
  const [color6, setcolor6] = useState("black");
  const [color7, setcolor7] = useState("black");
  const [color8, setcolor8] = useState("black");
  const [color9, setcolor9] = useState("black");
  const [color10, setcolor10] = useState("black");
  const [color11, setcolor11] = useState("black");
  const [color12, setcolor12] = useState("black");
  const [color13, setcolor13] = useState("black");


  const [backgcolor, setbackgcolor] = useState("#E5E5E5");
  const [backgcolor2, setbackgcolor2] = useState("#E5E5E5");
  const [backgcolor3, setbackgcolor3] = useState("#E5E5E5");
  const [backgcolor4, setbackgcolor4] = useState("#E5E5E5");
  const [backgcolor5, setbackgcolor5] = useState("#E5E5E5");
  const [backgcolor6, setbackgcolor6] = useState("#E5E5E5");
  const [backgcolor7, setbackgcolor7] = useState("#E5E5E5");
  const [backgcolor8, setbackgcolor8] = useState("#E5E5E5");
  const [backgcolor9, setbackgcolor9] = useState("#E5E5E5");
  const [backgcolor10, setbackgcolor10] = useState("#E5E5E5");
  const [backgcolor11, setbackgcolor11] = useState("#E5E5E5");
  const [backgcolor12, setbackgcolor12] = useState("#E5E5E5");
  const [backgcolor13, setbackgcolor13] = useState("#E5E5E5");
  return (


    <>
<View style={{marginTop:"8%",marginLeft:"10%"}}>
        <Text style={{fontWeight:"bold"}}>Sep 10</Text>
    </View>
<View style={styles.container}>

    

    <TouchableOpacity 
            
            style={{  width:"20%",
            backgroundColor:backgcolor,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => {  setcolor("#FFFFFF"),setbackgcolor("#166FC166"), setcolor2("black")
            ,setbackgcolor2("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5") , setcolor5("black"),setbackgcolor5("#E5E5E5")
            ,setcolor6("black"),setbackgcolor6("#E5E5E5"), setcolor7("black"),setbackgcolor7("#E5E5E5")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5") ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>
         
    <Text style={{fontWeight:"bold",color:color,}}>11 AM</Text> 
   
    </TouchableOpacity>


    <TouchableOpacity  style={{  width:"20%",
            backgroundColor:backgcolor2,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => {  setcolor2("white"),setbackgcolor2("#166FC166"),
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5")
            , setcolor5("black"),setbackgcolor5("#E5E5E5")
            ,setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("black"),setbackgcolor7("#E5E5E5")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5")
            ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color2,}}>1 PM</Text> 
   
    </TouchableOpacity>



    <TouchableOpacity  style={{  width:"20%",
            backgroundColor:backgcolor3,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("white"),setbackgcolor3("#166FC166"),
            setcolor4("black"),setbackgcolor4("#E5E5E5") 
            , setcolor5("black"),setbackgcolor5("#E5E5E5")
            ,setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("black"),setbackgcolor7("#E5E5E5")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5")
            ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color3,}}>3 PM</Text> 
   
    </TouchableOpacity>

</View>

<View style={styles.container}>

    

    <TouchableOpacity  style={{  width:"20%",
            backgroundColor:backgcolor4,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("white"),setbackgcolor4("#166FC166")
            , setcolor5("black"),setbackgcolor5("#E5E5E5")
            ,setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("black"),setbackgcolor7("#E5E5E5")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5")
            ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color4}}>4 PM</Text> 
   
    </TouchableOpacity>


    <TouchableOpacity   style={{  width:"20%",
            backgroundColor:backgcolor5,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5"),
            setcolor5("white"),setbackgcolor5("#166FC166")
            ,setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("black"),setbackgcolor7("#E5E5E5")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5")
            ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color5}}>6 PM</Text> 
   
    </TouchableOpacity>



    <TouchableOpacity  style={styles.cards2}>

    <Text style={{fontWeight:"bold"}}></Text> 
   
    </TouchableOpacity>

</View>








<View style={{marginTop:"8%",marginLeft:"10%"}}>
        <Text style={{fontWeight:"bold"}}>Sep 11</Text>
    </View>
<View style={styles.container}>

    

    <TouchableOpacity  style={{  width:"20%",
            backgroundColor:backgcolor6,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5"),
            setcolor5("black"),setbackgcolor5("#E5E5E5"),
            setcolor6("white"),setbackgcolor6("#166FC166"),
            setcolor7("black"),setbackgcolor7("#E5E5E5")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5")
            ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color6}}>11 AM</Text> 
   
    </TouchableOpacity>


    <TouchableOpacity style={{  width:"20%",
            backgroundColor:backgcolor7,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5"),
            setcolor5("black"),setbackgcolor5("#E5E5E5"),
            setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("white"),setbackgcolor7("#166FC166")
            ,  setcolor8("black"),setbackgcolor8("#E5E5E5")
            ,
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color7}}>1 PM</Text> 
   
    </TouchableOpacity>



    <TouchableOpacity style={{  width:"20%",
            backgroundColor:backgcolor8,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5"),
            setcolor5("black"),setbackgcolor5("#E5E5E5"),
            setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("black"),setbackgcolor7("#E5E5E5"),
            setcolor8("white"),setbackgcolor8("#166FC166"),
            setcolor9("black"),setbackgcolor9("#E5E5E5"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold", color:color8}}>3 PM</Text> 
   
    </TouchableOpacity>

</View>

<View style={styles.container}>

    

    <TouchableOpacity style={{  width:"20%",
            backgroundColor:backgcolor9,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
            setcolor("black"),setbackgcolor("#E5E5E5"),
            setcolor2("black"),setbackgcolor2("#E5E5E5"),
            setcolor3("black"),setbackgcolor3("#E5E5E5"),
            setcolor4("black"),setbackgcolor4("#E5E5E5"),
            setcolor5("black"),setbackgcolor5("#E5E5E5"),
            setcolor6("black"),setbackgcolor6("#E5E5E5"),
            setcolor7("black"),setbackgcolor7("#E5E5E5"),
            setcolor8("black"),setbackgcolor8("#E5E5E5"),
            setcolor9("white"),setbackgcolor9("#166FC166"),
            setcolor10("black"),setbackgcolor10("#E5E5E5"),
            setcolor11("black"),setbackgcolor11("#E5E5E5"),
            setcolor12("black"),setbackgcolor12("#E5E5E5"),
            setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color9}}>5 PM</Text> 
   
    </TouchableOpacity>

        <TouchableOpacity  style={styles.cards2}>

        <Text style={{fontWeight:"bold"}}></Text> 

        </TouchableOpacity>



    <TouchableOpacity  style={styles.cards2}>

    <Text style={{fontWeight:"bold"}}></Text> 
   
    </TouchableOpacity>

</View>

<View style={{marginTop:"8%",marginLeft:"10%"}}>
        <Text style={{fontWeight:"bold"}}>Sep 12</Text>
    </View>
<View style={styles.container}>

    

    <TouchableOpacity  style={{  width:"20%",
            backgroundColor:backgcolor11,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
                setcolor("black"),setbackgcolor("#E5E5E5"),
                setcolor2("black"),setbackgcolor2("#E5E5E5"),
                setcolor3("black"),setbackgcolor3("#E5E5E5"),
                setcolor4("black"),setbackgcolor4("#E5E5E5"),
                setcolor5("black"),setbackgcolor5("#E5E5E5"),
                setcolor6("black"),setbackgcolor6("#E5E5E5"),
                setcolor7("black"),setbackgcolor7("#E5E5E5"),
                setcolor8("black"),setbackgcolor8("#E5E5E5"),
                setcolor9("black"),setbackgcolor9("#E5E5E5"),
                setcolor10("black"),setbackgcolor10("#E5E5E5"),
                setcolor11("white"),setbackgcolor11("#166FC166"),
                setcolor12("black"),setbackgcolor12("#E5E5E5"),
                setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color11}}>11 AM</Text> 
   
    </TouchableOpacity>


    <TouchableOpacity style={{  width:"20%",
            backgroundColor:backgcolor12,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
                setcolor("black"),setbackgcolor("#E5E5E5"),
                setcolor2("black"),setbackgcolor2("#E5E5E5"),
                setcolor3("black"),setbackgcolor3("#E5E5E5"),
                setcolor4("black"),setbackgcolor4("#E5E5E5"),
                setcolor5("black"),setbackgcolor5("#E5E5E5"),
                setcolor6("black"),setbackgcolor6("#E5E5E5"),
                setcolor7("black"),setbackgcolor7("#E5E5E5"),
                setcolor8("black"),setbackgcolor8("#E5E5E5"),
                setcolor9("black"),setbackgcolor9("#E5E5E5"),
                setcolor10("black"),setbackgcolor10("#E5E5E5"),
                setcolor11("black"),setbackgcolor11("#E5E5E5"),
                setcolor12("white"),setbackgcolor12("#166FC166"),
                setcolor13("black"),setbackgcolor13("#E5E5E5")}}>

    <Text style={{fontWeight:"bold",color:color12}}>1 PM</Text> 
   
    </TouchableOpacity>



    <TouchableOpacity style={{  width:"20%",
            backgroundColor:backgcolor13,
            height:30,
            borderRadius:5,
            elevation:5,
            justifyContent:"center",
            alignItems:"center",
            }}
            onPress={() => { 
                setcolor("black"),setbackgcolor("#E5E5E5"),
                setcolor2("black"),setbackgcolor2("#E5E5E5"),
                setcolor3("black"),setbackgcolor3("#E5E5E5"),
                setcolor4("black"),setbackgcolor4("#E5E5E5"),
                setcolor5("black"),setbackgcolor5("#E5E5E5"),
                setcolor6("black"),setbackgcolor6("#E5E5E5"),
                setcolor7("black"),setbackgcolor7("#E5E5E5"),
                setcolor8("black"),setbackgcolor8("#E5E5E5"),
                setcolor9("black"),setbackgcolor9("#E5E5E5"),
                setcolor10("black"),setbackgcolor10("#E5E5E5"),
                setcolor11("black"),setbackgcolor11("#E5E5E5"),
                setcolor12("black"),setbackgcolor12("#E5E5E5"),
                setcolor13("white"),setbackgcolor13("#166FC166")}}>

    <Text style={{fontWeight:"bold", color:color13}}>3 PM</Text> 
   
    </TouchableOpacity>

</View>




    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
    marginTop:20,
   
  },

  
  cards:{

    width:"20%",
    backgroundColor:"#E5E5E5",
    height:30,
    borderRadius:5,
    elevation:5,
    justifyContent:"center",
    alignItems:"center",
    color:"black",
  },

  cards2:{

    width:"20%",
    backgroundColor:"transperant",
    height:30,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    color:"black"
  },



})


export default Mbtns;