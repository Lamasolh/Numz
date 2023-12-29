import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';

const InvestingComponents3 = props => {
 

  return (
    <>

   

  
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>

        <View style={styles.newcontainer}>


            <Text style={{color:"#007961"}}>Car {'\n'}Insurance</Text>
            
            <Image style={{}} source={require('../../assets/i1.png')}/>
       </View>

       <View style={styles.newcontainer}>


        <Text style={{color:"#007961"}}>Mobile   {'\n'}Insurance</Text>

        <Image style={{}} source={require('../../assets/i2.png')}/>
        </View>

       </View>


       <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"5%"}}>

<View style={styles.newcontainer}>

 

    <Text style={{color:"#007961"}}>Property {'\n'}Insurance</Text>
    
    <Image style={{}} source={require('../../assets/i3.png')}/>
</View>

<View style={styles.newcontainer}>


<Text style={{color:"#007961"}}>Health   {'\n'}Insurance</Text>

<Image style={{}} source={require('../../assets/i4.png')}/>
</View>

</View>


<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"5%"}}>

<View style={styles.newcontainer}>

 

    <Text style={{color:"#007961"}}>Professional {'\n'}Indemnity</Text>
    
    <Image style={{}} source={require('../../assets/i5.png')}/>
</View>

<View style={styles.newcontainer}>

 

<Text style={{color:"#007961"}}>Income   {'\n'}Protection</Text>

<Image style={{}} source={require('../../assets/i6.png')}/>
</View>

</View>

<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"5%"}}>

<View style={styles.newcontainer}>

 
 

    <Text style={{color:"#007961"}}>Life {'\n'}Insurance</Text>
    
    <Image style={{}} source={require('../../assets/i7.png')}/>
</View>

<View style={styles.newcontainer}>

 
<Text style={{color:"#007961"}}>Enterprise   {'\n'}Registration</Text>

<Image style={{}} source={require('../../assets/i8.png')}/>
</View>

</View>


<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"5%"}}>

<View style={styles.newcontainer}>

 


    <Text style={{color:"#007961"}}>Cybery Security {'\n'}Insurance</Text>
    
    <Image style={{}} source={require('../../assets/i9.png')}/>
</View>

<View style={styles.newcontainer}>

 
<Text style={{color:"#007961"}}>Subscription   {'\n'}Plans</Text>

<Image style={{}} source={require('../../assets/i10.png')}/>
</View>

</View>


<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"5%"}}>

<View style={styles.newcontainer}>




    <Text style={{color:"#007961"}}>Insurance {'\n'}Management</Text>
    
    <Image style={{}} source={require('../../assets/i11.png')}/>
</View>

<View style={styles.newcontainer}>
 

<Text style={{color:"#007961"}}>Report   {'\n'}A Claim</Text>

<Image style={{}} source={require('../../assets/i12.png')}/>
</View>

</View>




    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"48%",
    height:80,
    elevation:10,
    borderRadius:15,
    backgroundColor:"white"
   
   
  },


})

export default InvestingComponents3;