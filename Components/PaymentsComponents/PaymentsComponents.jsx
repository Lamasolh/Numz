
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pcomps = props => {

  const navigation = useNavigation();


  return (
    <>


          

  <View style={styles.newcontainer}>

    <View style={styles.cardsicons}>

   <TouchableOpacity onPress={() =>
              navigation.navigate('BillPayment')}>
                
    <Image style={{marginTop:9  }}
            source={require('../../assets/cardi1.png')}
            />
    </TouchableOpacity> 

    <View>
        <Text style={{color:"#00A081", fontSize:10, marginTop:5}}>Pay New Bill</Text>
    </View> 
    </View>

    <View style={styles.cardsicons}>

    <TouchableOpacity onPress={() =>

              navigation.navigate('SchedulePayment')}>
 <Image style={{marginTop:9  }}
         source={require('../../assets/calanderimg.png')}
         />
 </TouchableOpacity> 

 <View>
     <Text style={{color:"#00A081", fontSize:10, marginTop:5}}>Schedule Payments</Text>
 </View> 
 </View>

 
</View>
    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 20,
   flexDirection:"row",
   justifyContent:"space-around",
   alignItems:"center"
   
  },

  cardsicons:{

    justifyContent:"center",
    alignItems:"center",
  }

  

})

export default Pcomps;