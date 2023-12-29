import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';

const Educ1 = props => {
 
  const navigation=useNavigation();
  return (
    <>

   

  
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>

        <View style={styles.newcontainer}>


            
            <View style={{position:"relative", marginTop:15}}>
            <Image style={{}} source={require('../../assets/educationcircle.png')}/>
            <Image style={{position:"absolute", left:"8%", top:"30%"}} source={require('../../assets/rocket.png')}/>
            
            </View>
            <Text style={{color:"#000000", fontSize:13, marginBottom:5,}}>Startup</Text>
       </View>

      
       <View style={styles.newcontainer}>


            
        <View style={{position:"relative", marginTop:15}}>
        <Image style={{}} source={require('../../assets/educationcircle.png')}/>
        <Image style={{position:"absolute", left:"8%", top:"30%"}} source={require('../../assets/std.png')}/>
    
        </View>
        <Text style={{color:"#000000", fontSize:13, marginBottom:5}}>Students</Text>
        </View>

       </View>




       <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>

    <View style={styles.newcontainer}>


    
    <View style={{position:"relative", marginTop:15}}>
    <Image style={{}} source={require('../../assets/educationcircle.png')}/>
    <Image style={{position:"absolute", left:"8%", top:"30%"}} source={require('../../assets/edu3.png')}/>
    </View>
    <Text style={{color:"#000000", fontSize:13, marginBottom:5}}>Instructors</Text>
</View>


<TouchableOpacity  onPress={() => navigation.navigate('EducationScreens2')} style={styles.newcontainer}>


    
<View style={{position:"relative", marginTop:15}}>
<Image style={{}} source={require('../../assets/educationcircle.png')}/>
<Image style={{position:"absolute", left:"8%", top:"30%"}} source={require('../../assets/edu4.png')}/>

</View>

<Text style={{color:"#000000", marginTop:5,textAlign:"center", fontSize:13, marginBottom:5}}>Academy & Training {'\n'} Programs</Text>
</TouchableOpacity>

</View>



<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>

<View style={styles.newcontainer}>



<View style={{position:"relative", marginTop:15}}>
<Image style={{}} source={require('../../assets/educationcircle.png')}/>
<Image style={{position:"absolute", left:"8%", top:"30%"}} source={require('../../assets/edu5.png')}/>
</View>
<Text style={{color:"#000000", fontSize:13, marginBottom:5}}>Digital University</Text>
</View>


<View style={styles.newcontainer}>



<View style={{position:"relative", marginTop:15}}>
<Image style={{}} source={require('../../assets/educationcircle.png')}/>
<Image style={{position:"absolute", left:"10%", top:"30%"}} source={require('../../assets/edu6.png')}/>

</View>
<Text style={{color:"#000000", marginTop:5,textAlign:"center", fontSize:13, marginBottom:5}}>Employees</Text>
</View>

</View>



<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>

<View style={styles.newcontainer}>



<View style={{position:"relative", marginTop:15}}>
<Image style={{}} source={require('../../assets/educationcircle.png')}/>
<Image style={{position:"absolute", left:"5%", top:"35%"}} source={require('../../assets/edu7.png')}/>
</View>
<Text style={{color:"#000000", fontSize:13, marginBottom:5}}>Alumni</Text>
</View>


<View style={styles.newcontainer}>



<View style={{position:"relative", marginTop:15}}>
<Image style={{}} source={require('../../assets/educationcircle.png')}/>
<Image style={{position:"absolute", left:"8%", top:"30%"}} source={require('../../assets/edu8.png')}/>

</View>
<Text style={{color:"#000000", marginTop:5,textAlign:"center", fontSize:13,marginBottom:5}}>Financial aid</Text>
</View>

</View>



      





    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{
  
    justifyContent:"space-around",
    alignItems:"center",
    width:"48%",
    height:115,
    elevation:10,
    borderRadius:15,
    backgroundColor:"white"
    , borderWidth:2, 
    borderColor:"#00534217"
   
  },


})

export default Educ1;