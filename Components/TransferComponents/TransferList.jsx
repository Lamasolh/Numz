import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';

const SMEBody = props => {
const navigation=useNavigation()
  return (
    <>
     
      <View style={styles.container}>

        <TouchableOpacity  onPress={() => navigation.navigate('AccountToAccountScreens')}>




        <View style={styles.list}>

        <View>
        <Image style={{ marginTop: 15, marginLeft:15, }}
            source={require('../../assets/t1.png')}
        />
        </View>   
      

        <View>

        <Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Account to Account Transfer</Text>
        </View>

        </View>

        </TouchableOpacity>


        <TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/t2.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>International Transfer</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/t3.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Account Transfer - Multicurrency</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/t4.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Own Account Transfer</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/t5.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>External Transfer</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/t6.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Transfer within same bank</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/t7.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Transfer History</Text>
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

export default SMEBody;