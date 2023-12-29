
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const loanreqcards = props => {

  //const navigation = useNavigation();


  return (
    <>

<View style={{flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"center", padding:10}}>
          
<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ tintColor:"#00A081"}}
                    source={require('../../assets/car.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Car Loan</Text></View>

</View>

<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ tintColor:"#00A081"}}
                    source={require('../../assets/hs.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>House Loan</Text></View>

</View>


<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ tintColor:"#00A081"}}
                    source={require('../../assets/prsn.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Personal Loan</Text></View>

</View>


<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ tintColor:"#00A081"}}
                    source={require('../../assets/hs2.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Business Loan</Text></View>

</View>


<View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"column"}}>


     
        <TouchableOpacity style={styles.newcontainer}>

        <Image style={{ tintColor:"#00A081"}}
                    source={require('../../assets/loan.png')}
                    />
       
        </TouchableOpacity>

        
        <View style={{justifyContent:"center", alignItems:"center",marginTop:5,marginLeft:5, }}><Text style={{fontSize:9, color:"#545454"}}>Instant Loan</Text></View>

</View>



</View>







    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 20,
    elevation:10,
    width:"70%",
    height:60,
    backgroundColor:"#FFFFFF",
    borderRadius:15,
    shadowColor:"black",
    justifyContent:"center",
    alignItems:"center",
  },

  

  

})

export default loanreqcards;