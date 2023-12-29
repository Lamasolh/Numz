import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';

const SMEBody = props => {
const navigation=useNavigation()
  return (
    <>
     
      <View style={styles.container}>

        <TouchableOpacity  onPress={() => navigation.navigate('MedicalScreens1')}>



        <View style={styles.list}>

        <View>
        <Image style={{ marginTop: 15, marginLeft:15, }}
            source={require('../../assets/ei1.png')}
        />
        </View>   
      

        <View>

        <Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Find DR</Text>
        </View>

        </View>

        </TouchableOpacity>


        <TouchableOpacity  onPress={() => navigation.navigate('InvestingTop')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/ei2.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Health Records Management</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('Startup')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/ei3.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Buy & Rent Medical Equipment</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('Contract')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/ei4.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Analytics</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('LegalDoc')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/pharmacyyy.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Pharmacy</Text>
</View>

</View>

</TouchableOpacity>



</View>
    
   
    </>



  );
}


const styles = StyleSheet.create({

  container: {
   width:"100%",
 
  },

  list: {
    borderBottomWidth:1,
    borderColor:"#0000001C",
    flexDirection:"row",
    padding:15,
    alignItems:"center"
  },

  smeanimationbottom:{

    position:"relative",
    top:"5%",
  }

})

export default SMEBody;