import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';



const Convert = props => {
  
    const [selectedRadio, setSelectedRadio] = useState(0)
const navigation=useNavigation();

  return (
    <>
  

    


<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{}}
        source={require('../../assets/eth.png')}
      />
    <View>
    <Text style={{marginLeft:10, color:"#000000", fontWeight:"bold"}}>Etherium</Text>
    <Text style={{marginLeft:10,color:"#000000", fontSize:10,}}>3424324</Text>
    </View>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text style={{color:"black", fontWeight:"bold"}}>ETH 10</Text>
    <Text style={{color:"black", fontSize:12, color:"#8D8D8D"}}>$30</Text>
  
    </View>
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(1)}}>

{selectedRadio == 1 ? <View style={{ borderRadius: 19, paddingLeft: 10, paddingBottom: 10 , marginRight:5}}>
  <View style={styles.warper}>
      <View style={styles.radio}>
          {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
      </View>
    
  </View>
</View>
  :
  <View style={{  borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
      <View style={styles.warper}>
          <View style={styles.radio2}>
              {selectedRadio == 1 ? <View style={styles.radiobg}></View> : null}
          </View>
          
      </View>
  </View>}
</TouchableOpacity>


   
</View>

</TouchableOpacity>

</View>







<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{}}
        source={require('../../assets/bit.png')}
      />
    <View>
    <Text style={{marginLeft:10, color:"#000000", fontWeight:"bold"}}>Bitcoin</Text>
    <Text style={{marginLeft:10,color:"#000000", fontSize:10,}}>3424324</Text>
    </View>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text style={{color:"black", fontWeight:"bold"}}>BTC 10</Text>
    <Text style={{color:"black", fontSize:12, color:"#8D8D8D"}}>$30</Text>
  
    </View>
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(2)}}>

{selectedRadio == 2 ? <View style={{ borderRadius: 19, paddingLeft: 10, paddingBottom: 10 , marginRight:5}}>
  <View style={styles.warper}>
      <View style={styles.radio}>
          {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
      </View>
    
  </View>
</View>
  :
  <View style={{  borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
      <View style={styles.warper}>
          <View style={styles.radio2}>
              {selectedRadio == 2 ? <View style={styles.radiobg}></View> : null}
          </View>
          
      </View>
  </View>}
</TouchableOpacity>

</View>

</TouchableOpacity>

</View>






<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{}}
        source={require('../../assets/eth.png')}
      />
    <View>
    <Text style={{marginLeft:10, color:"#000000", fontWeight:"bold"}}>Etherium</Text>
    <Text style={{marginLeft:10,color:"#000000", fontSize:10,}}>3424324</Text>
    </View>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text style={{color:"black", fontWeight:"bold"}}>ETH 10</Text>
    <Text style={{color:"black", fontSize:12, color:"#8D8D8D"}}>$30</Text>
  
    </View>
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(3)}}>

{selectedRadio == 3 ? <View style={{ borderRadius: 19, paddingLeft: 10, paddingBottom: 10 , marginRight:5}}>
  <View style={styles.warper}>
      <View style={styles.radio}>
          {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
      </View>
    
  </View>
</View>
  :
  <View style={{  borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
      <View style={styles.warper}>
          <View style={styles.radio2}>
              {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
          </View>
          
      </View>
  </View>}
</TouchableOpacity>


   
</View>

</TouchableOpacity>

</View>









<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{}}
        source={require('../../assets/bit.png')}
      />
    <View>
    <Text style={{marginLeft:10, color:"#000000", fontWeight:"bold"}}>Bitcoin</Text>
    <Text style={{marginLeft:10,color:"#000000", fontSize:10,}}>3424324</Text>
    </View>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{alignItems:"center", justifyContent:"center"}}>
    <Text style={{color:"black", fontWeight:"bold"}}>BTC 10</Text>
    <Text style={{color:"black", fontSize:12, color:"#8D8D8D"}}>$30</Text>
  
    </View>
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(4)}}>

{selectedRadio == 4 ? <View style={{ borderRadius: 19, paddingLeft: 10, paddingBottom: 10 , marginRight:5}}>
  <View style={styles.warper}>
      <View style={styles.radio}>
          {selectedRadio == 4 ? <View style={styles.radiobg}></View> : null}
      </View>
    
  </View>
</View>
  :
  <View style={{  borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
      <View style={styles.warper}>
          <View style={styles.radio2}>
              {selectedRadio == 4 ? <View style={styles.radiobg}></View> : null}
          </View>
          
      </View>
  </View>}
</TouchableOpacity>

</View>

</TouchableOpacity>

</View>


<View style={{width:"100%", height:70, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15,elevation:10, shadowColor:"black", flexDirection:"row",
marginTop:"10%"}}>

<View>
    <Text style={{color:"#8D8D8D", fontSize:18}}>You will get:</Text>

</View>

<View>
    <Text style={{fontSize:18, fontWeight:"bold"}}>USDT 60</Text>

</View>

</View>

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

  radioText: {
    fontSize: 14.5,
    color: '#72777A',
    paddingLeft: 7,

},
radiobg: {
    justifyContent: 'center',
    marginLeft: 1.5,
    marginTop: 1.2,
    backgroundColor: '#00A081',
    height: 12,
    width: 12,
    borderRadius: 20,
},
radio: {

    width: 21,
    height: 21,
    borderColor: '#00A081',
    borderRadius: 20,
    borderWidth: 3,
    
},

radio2: {

  width: 21,
  height: 21,
  borderColor: '#B6B6B6',
  borderRadius: 20,
  borderWidth: 3,
  marginRight:5
  
},
warper: {
  marginTop: 10,
  flexDirection: 'row'
},
})

export default Convert;