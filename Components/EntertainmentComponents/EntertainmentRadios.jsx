import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const ER = props => {
 
const navigation=useNavigation();
const [show, setshow] = React.useState(true);
const [show2, setshow2] = React.useState(false);
const [show3, setshow3] = React.useState(true);
  const [selectedRadio, setSelectedRadio] = useState(0)
  return (
    <>
  

      <View style={styles.container}>

            <TouchableOpacity style={{ justifyContent:"space-around",
             alignItems:"center" , flexDirection:"row"}}>
             
   
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
      
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
   
            </View>

            <Text style={{color:"#263238"}}>Round Trip</Text>

            </TouchableOpacity>



<TouchableOpacity style={{ justifyContent:"space-around",
alignItems:"center", flexDirection:"row"}}>
 

<View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
 
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
<Text style={{color:"#263238"}}>One Way</Text>
</TouchableOpacity>

</View>








    </>



  );
}


const styles = StyleSheet.create({

  container: {
    marginTop:30,
    flexDirection: "row",
 
   justifyContent:"space-around",
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
  borderColor: '#00A081',
  borderRadius: 20,
  borderWidth: 3,
  marginRight:5
  
},
warper: {
  marginTop: 10,
  flexDirection: 'row'
},

})

export default ER;