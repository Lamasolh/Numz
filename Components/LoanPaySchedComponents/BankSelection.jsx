
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const loanreqcards2 = props => {

  //const navigation = useNavigation();


  return (
    <>

<ScrollView horizontal={true} >
<View style={{flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"center", }}>
          
<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainerfirst}>

        <Image style={{ }}
                    source={require('../../assets/lg.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Numz Bank</Text></View>

</View>

<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ }}
                    source={require('../../assets/lg2.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Absa Bank</Text></View>

</View>


<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ }}
                    source={require('../../assets/lg3.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>TOP Bank</Text></View>

</View>


<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{}}
                    source={require('../../assets/lg4.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>YBC Bank</Text></View>

</View>


<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{}}
                    source={require('../../assets/lg2.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Absa Bank</Text></View>

</View>

<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ }}
                    source={require('../../assets/lg3.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>TOP Bank</Text></View>

</View>



</View>

</ScrollView>





    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 20,
    elevation:10,
    width:"85%",
    height:60,
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    shadowColor:"black",
    justifyContent:"center",
    alignItems:"center",
  },

  newcontainerfirst:{

    
    padding: 20,
    elevation:10,
    width:"85%",
    height:60,
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    shadowColor:"black",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#00A081",
  }
  

  

})

export default loanreqcards2;