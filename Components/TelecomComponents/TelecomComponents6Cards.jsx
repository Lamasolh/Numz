import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3";
import BigButtongrey from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButtongrey";


const Cards6 =props=> {

    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("#00A081")
    const [color2, setcolor2] = useState("#00A081")
    const [color3, setcolor3] = useState("#00A081")
    const [color4, setcolor4] = useState("#00A081")
    const [color5, setcolor5] = useState("#00A081")
    const [color6, setcolor6] = useState("#00A081")

    const [bgcolor, bgsetcolor] = useState("#E3F5F1")
    const [bgcolor2, bgsetcolor2] = useState("#E3F5F1")
    const [bgcolor3, bgsetcolor3] = useState("#E3F5F1")
    const [bgcolor4, bgsetcolor4] = useState("#E3F5F1")
    const [bgcolor5, bgsetcolor5] = useState("#E3F5F1")
    const [bgcolor6, bgsetcolor6] = useState("#E3F5F1")

    const [text, settext] = useState("Add to cart")
    const [text2, settext2] = useState("Add to cart")
    const [text3, settext3] = useState("Add to cart")
    const [text4, settext4] = useState("Add to cart")
    const [text5, settext5] = useState("Add to cart")
    const [text6, settext6] = useState("Add to cart")


  return (


    <>



 
    <View style={styles.container}>

        <View>
            <Text style={{fontWeight:"bold", fontSize:15}}>Cypher.com</Text>
        </View>

        <View>
            <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
        </View>

        <View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        <Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$197</Text>
        <TouchableOpacity  onPress={() => {
                       
                       setcolor("white"),bgsetcolor("#00A081"), settext("Added"),setShowComponent(false),setShowComponent2(true)
                    }} style={{justifyContent:"center",alignItems:"center", backgroundColor:bgcolor, padding:8,borderRadius:20,marginTop:5,height:33, width:"100%",paddingLeft:22,paddingRight:22}}>
            <Text style={{fontSize:11, color:color}}>{text}</Text>
        </TouchableOpacity>

        </View>

    </View>



    <View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>Lazner.io</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$452</Text>
<TouchableOpacity  onPress={() => {
               
               setcolor2("#E3F5F1"),bgsetcolor2("#00A081"),settext2("Added"),setShowComponent(false),setShowComponent2(true)
            }} style={{justifyContent:"center",alignItems:"center", backgroundColor:bgcolor2, padding:8,borderRadius:20,marginTop:5,height:33, width:"100%",paddingLeft:22,paddingRight:22}}>
    <Text style={{fontSize:11, color:color2}}>{text2}</Text>
</TouchableOpacity>

</View>

</View>


<View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>paga.com</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$900</Text>
<TouchableOpacity  onPress={() => {
               
               setcolor3("#E3F5F1"),bgsetcolor3("#00A081"),settext3("Added"),setShowComponent(false),setShowComponent2(true)
            }} style={{justifyContent:"center",alignItems:"center", backgroundColor:bgcolor3, padding:8,borderRadius:20,marginTop:5,height:33, width:"100%",paddingLeft:22,paddingRight:22}}>
    <Text style={{fontSize:11, color:color3}}>{text3}</Text>
</TouchableOpacity>

</View>

</View>


<View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>lenors.net</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$23</Text>
<TouchableOpacity  onPress={() => {
               
               setcolor4("#E3F5F1"),bgsetcolor4("#00A081"),settext4("Added"),setShowComponent(false),setShowComponent2(true)
            }} style={{justifyContent:"center",alignItems:"center", backgroundColor:bgcolor4, padding:8,borderRadius:20,marginTop:5,height:33, width:"100%",paddingLeft:22,paddingRight:22}}>
    <Text style={{fontSize:11, color:color4}}>{text4}</Text>
</TouchableOpacity>

</View>

</View>


<View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>satara.com</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$467</Text>
<TouchableOpacity  onPress={() => {
               
               setcolor5("#E3F5F1"),bgsetcolor5("#00A081"),settext5("Added"),setShowComponent(false),setShowComponent2(true)
            }} style={{justifyContent:"center",alignItems:"center", backgroundColor:bgcolor5, padding:8,borderRadius:20,marginTop:5,height:33, width:"100%",paddingLeft:22,paddingRight:22}}>
    <Text style={{fontSize:11, color:color5}}>{text5}</Text>
</TouchableOpacity>

</View>

</View>


<View style={styles.container}>

<View>
    <Text style={{fontWeight:"bold", fontSize:15}}>Cypher.com</Text>
</View>

<View>
    <Text style={{color:"#A3A3A3", fontSize:12,paddingLeft:10}}>Renews monthly at {'\n'} $50 a ywar</Text>
</View>

<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

<Text style={{color:"#00A081", fontSize:15, fontWeight:"bold"}}>$400</Text>
<TouchableOpacity  onPress={() => {
               
               setcolor6("#E3F5F1"),bgsetcolor6("#00A081"),settext6("Added"),setShowComponent(false),setShowComponent2(true)
            }} style={{justifyContent:"center",alignItems:"center", backgroundColor:bgcolor6, padding:8,borderRadius:20,marginTop:5,height:33, width:"100%",paddingLeft:22,paddingRight:22}}>
    <Text style={{fontSize:11, color:color6}}>{text6}</Text>
</TouchableOpacity>

</View>

</View>

{showComponent &&

    <BigButtongrey title="Continue to cart"/>
}

{showComponent2 &&

<BigButton3 title="Continue to cart" navigate='TelecomScreens7'/>
}

    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    elevation:15,
    backgroundColor:"white",
    padding:20,
    marginTop:20,
    borderRadius:15
   
  },

  

  greytextinput:{
    width:"80%",
    backgroundColor:"lightgrey",
    padding:10,
    borderRadius:23,
 
    
  }
  


})


export default Cards6;