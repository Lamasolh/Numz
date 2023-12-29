import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import OFFpopup from '../LoanPaySchedComponents/OFFpopup';
import Onpopup from '../InsuranceComponents/Onpopup';

const ITbalancec = props => {
 
//const navigation=useNavigation();
const [checked, setChecked] = React.useState('unchecked');
const [checked2, setChecked2] = React.useState('unchecked');
const [checked3, setChecked3] = React.useState('unchecked');
const [checked4, setChecked4] = React.useState('unchecked');
const [show, setshow] = React.useState(true);
const [show2, setshow2] = React.useState(false);
  return (
    <>
  

      <View style={styles.container}>

            <TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
        alignItems:"center", borderRadius:15, elevation:12, shadowColor:"black", flexDirection:"row"}}>
             
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>

            <Image style={{  }}
                    source={require('../../assets/tot1.png')}
                  />

                <Text style={{marginLeft:10, color:"#8D8D8D"}}>*********4564</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",marginLeft:30 }}>
                <View style={{}}>
                <Text style={{color:"black", fontWeight:"bold",marginLeft:45}}>$50</Text>
                </View>
                <RadioButton style={{}}
                value="first"
                color='#00A081'
                uncheckedColor={"#B6B6B6"}
                status={ checked === 'first'? 'checked' : 'unchecked' }
                onPress={() => {setChecked('first'), setshow(false), setshow2(true)}}
            />
   
            </View>

            </TouchableOpacity>

        </View>




        {/* <View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, elevation:12, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{}}
        source={require('../../assets/tot2.png')}
      />

    <Text style={{marginLeft:10, color:"#8D8D8D"}}>6524564</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text style={{color:"black", fontWeight:"bold"}}>$50</Text>
    <Text style={{color:"black", fontSize:12}}>USDT 50</Text>
  
    </View>
    <RadioButton
    value="sec"
    color='#00A081'
    uncheckedColor={"#B6B6B6"}
    status={ checked2 === 'sec'? 'checked' : 'unchecked' }
   onPress={() => {setChecked2('sec'), setshow(false), setshow2(true)}}
/>


   
</View>

</TouchableOpacity>

</View>





<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, elevation:12, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{}}
        source={require('../../assets/tot3.png')}
      />

    <Text style={{marginLeft:10, color:"#8D8D8D"}}>6524564</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text style={{color:"black", fontWeight:"bold"}}>$50</Text>
    <Text style={{color:"black", fontSize:12}}>BTC 0.2</Text>
  
    </View>
    <RadioButton
    value="third"
    color='#00A081'
    uncheckedColor={"#B6B6B6"}
  status={ checked3 === 'third'? 'checked' : 'unchecked' }
  onPress={() => {setChecked3('third'), setshow(false), setshow2(true)}}
/>


   
</View>

</TouchableOpacity>

</View>
 */}


<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, elevation:12, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{  }}
        source={require('../../assets/tot4.png')}
      />

    <Text style={{marginLeft:10, color:"#8D8D8D"}}>John Doe</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{}}>
    <Text style={{color:"black", fontWeight:"bold"}}>$50</Text>
    </View>
    <RadioButton
    value="fourth"
    color='#00A081'
    uncheckedColor={"#B6B6B6"}
   status={ checked4 === 'fourth'? 'checked' : 'unchecked' }
   onPress={() => {setChecked4('fourth'), setshow(false), setshow2(true)}}
/>


   
</View>

</TouchableOpacity>

</View>

{show &&

<OFFpopup/>

}

{show2 &&

<Onpopup/>

}



    </>



  );
}


const styles = StyleSheet.create({

  container: {
    marginTop:30,
    flexDirection: "column",
 
   justifyContent:"center",
   alignItems:"center"

  },


})

export default ITbalancec;