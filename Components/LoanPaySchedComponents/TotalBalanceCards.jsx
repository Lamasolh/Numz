import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import OFFpopup from '../LoanPaySchedComponents/OFFpopup';
import Onpopup from '../LoanPaySchedComponents/Onpopup';

const Tbalancec = props => {
 
//const navigation=useNavigation();
const [show, setshow] = React.useState(true);
const [show2, setshow2] = React.useState(false);
const [show3, setshow3] = React.useState(true);
  const [selectedRadio, setSelectedRadio] = useState(0)
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
                <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(1),setshow(false),setshow2(true),setshow3(false) }}>

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
        { show &&
            <Image style={{ }}
                    source={require('../../assets/totaldd.png')}
                  />

        }
            </View>

            </TouchableOpacity>

        </View>



{/* 
        <View style={styles.container}>

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
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(2) ,setshow(true),setshow2(true),setshow3(false) }}>

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
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(3) ,setshow(true),setshow2(true) ,setshow3(false)}}>

{selectedRadio == 3 ? <View style={{ borderRadius: 19, paddingLeft: 10, paddingBottom: 10 , marginRight:5}}>
  <View style={styles.warper}>
      <View style={styles.radio}>
          {selectedRadio == 3 ? <View style={styles.radiobg}></View> : null}
      </View>
    
  </View>
</View>
  :
  <View style={{ borderRadius: 19, paddingLeft: 10, paddingBottom: 10 }}>
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
 */}


<View style={styles.container}>

<TouchableOpacity style={{width:"100%", height:60, backgroundColor:"white", justifyContent:"space-around",
alignItems:"center", borderRadius:15, elevation:12, shadowColor:"black", flexDirection:"row"}}>
 
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginRight:"25%"}}>

<Image style={{  }}
        source={require('../../assets/tot4.png')}
      />

    <Text style={{marginLeft:35, color:"#8D8D8D"}}>John Doe</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
    <View style={{}}>
    <Text style={{color:"black", fontWeight:"bold"}}>$50</Text>
    </View>
    <TouchableOpacity style={{ paddingBottom: 10, paddingTop: 10 }} onPress={() => { setSelectedRadio(4),setshow(true),setshow2(true) ,setshow3(false) }}>

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

{show3 &&

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

export default Tbalancec;