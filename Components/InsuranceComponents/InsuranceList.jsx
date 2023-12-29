import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';

const SMEBody = props => {
//const navigation=useNavigation()
  return (
    <>
     
      <View style={styles.container}>

        <TouchableOpacity  onPress={() => navigation.navigate('')}>




        <View style={styles.list}>

        <View>
        <Image style={{ marginTop: 15, marginLeft:15, }}
            source={require('../../assets/i1.png')}
        />
        </View>   
      

        <View>

        <Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Car Insurance</Text>
        </View>

        </View>

        </TouchableOpacity>


        <TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i2.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Mobile Insurance </Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i3.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Property Insurance</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i4.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Health Insurance</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i5.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Professional Indemnity</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i6.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Income Protection</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i7.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Life Insurance</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i11.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Insurance Management</Text>
</View>

</View>

</TouchableOpacity>



<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i8.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Enterprise Registration</Text>
</View>

</View>

</TouchableOpacity>



<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i10.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Subscription Plans</Text>
</View>

</View>

</TouchableOpacity>



<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/i11.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Report A Claim</Text>
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