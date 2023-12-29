import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';


const Lcomp = props => {

const navigation=useNavigation()

  return (
    <>
     
      <View style={styles.container}>

        <TouchableOpacity  onPress={() => navigation.navigate('')}>



        <View style={styles.list}>

        <View>
        <Image style={{ marginTop: 15, marginLeft:15, }}
            source={require('../../assets/lcar1.png')}
        />
        </View>   
      

        <View>

        <Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Courier</Text>

        </View>

        </View>

        </TouchableOpacity>


        <TouchableOpacity  onPress={() => navigation.navigate('LogisticScreens2')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/lcar2.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Send Item</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/lcar3.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Contracts and Invoices</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/lcar4.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Order Management</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/lcar5.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Restaurant Sign Up</Text>
</View>

</View>

</TouchableOpacity>

</View>
<View style={styles.smeanimationbottom}>

<Image style={{  }}
    source={require('../../assets/smeanimation.png')}
/>

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

export default Lcomp;