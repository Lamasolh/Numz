import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent
,TextInput,Switch} from 'react-native';

const Applyc = props => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  return (
    <>

  

  <View  style={styles.newcontainer}>
  
  <View style={{ width:"50%"}}>

  <Image style={{ width:"15%", height:30 }}
        source={require('../../assets/homeicons.png')}
        />

  </View> 

  <View>

<Image style={{tintColor:"black"}}
      source={require('../../assets/search.png')}
      />

</View> 

   </View>

   <View style={styles.newcontainer2}>

    <View style={{ width:"10%"}}>
    <Image style={{ width:"80%", height:30 }}
        source={require('../../assets/homeicons.png')}
        />
    </View>

    <View>
        <Text style={{fontSize:25, fontWeight:"bold"}}>Apply for a Card</Text>
    </View>
   </View>

<View style={{marginTop:40}}>
    <View>
        <Text  style={{marginLeft:25, color:"grey"}}>Select card type</Text>
    </View>
    <View style={{ justifyContent:"center", alignItems:"center"}}>

        <TextInput style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
         width:"90%",}}>

        </TextInput>
    
    </View>
 
</View>

<View style={{marginTop:30}}>
    <View>
        <Text  style={{marginLeft:25, color:"grey"}}>Account Number</Text>
    </View>
    <View style={{ justifyContent:"center", alignItems:"center"}}>

        <TextInput style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
         width:"90%",}}>

        </TextInput>
    
    </View>
 
</View>

<View style={{marginTop:30}}>
    <View>
        <Text  style={{marginLeft:25, color:"grey"}}>Card Name</Text>
    </View>
    <View style={{ justifyContent:"center", alignItems:"center"}}>

        <TextInput style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
         width:"90%",}}>

        </TextInput>
    
    </View>
 
</View>


<View style={{marginTop:30, width:"100%"}}>
    <View>
        <Text  style={{marginLeft:25, color:"grey", fontSize:25}}>Card image</Text>
    </View>
    <View style={{ marginLeft:25}}>

    <Image style={{marginTop:10,}}
      source={require('../../assets/ccard3.png')}
      />
    
    </View>

</View>

<View style={styles.container3}>

<View>

    <Text style={{color:"#737373"}}>{props.switch1}</Text>
</View>

<View style={{}}>
<Switch     
style={{ transform: "scale(1.2)"}}
trackColor={{false: '#D1D1D1', true: '#ADD8E6'}}
thumbColor={isEnabled ? 'white' : 'white'}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch}
value={isEnabled}
/>

</View>

</View>



<View style={styles.container3}>

<View>

    <Text style={{color:"#737373",marginRight:45}}>{props.switch2}</Text>
</View>

<View style={{}}>
<Switch     
style={{ transform: "scale(1.2)"}}
trackColor={{false: '#D1D1D1', true: '#ADD8E6'}}
thumbColor={isEnabled2 ? 'white' : 'white'}
ios_backgroundColor="#3e3e3e"
onValueChange={toggleSwitch2}
value={isEnabled2}
/>

</View>

</View>

<View style={{marginTop:30}}>
    <View>
        <Text  style={{marginLeft:25, color:"grey"}}>Account Number</Text>
    </View>
    <View style={{ justifyContent:"center", alignItems:"center"}}>

        <TextInput style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
         width:"90%",}}>

        </TextInput>
    
    </View>
 
</View>

<View style={{width:"100%", marginTop:50, alignItems:"center",justifyContent:"center"}}>


<TouchableOpacity style={{width:"70%", height:50, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"}}>

    <Text style={{color:"white"}}>Submit</Text>
</TouchableOpacity>

</View>
   </>
    
  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 20,
    borderColor:"black",
    borderBottomWidth:2,
    width:"100%",
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
   
  },
  

  newcontainer2:{

    marginTop:50,
    justifyContent:"space",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center"
  
  },

  container3:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    marginRight:70

  }


})

export default Applyc;