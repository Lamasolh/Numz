import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const InvestingList = props => {
const navigation=useNavigation()
  return (
    <>
     
      <View style={styles.container}>

        <TouchableOpacity  onPress={() => navigation.navigate('')}>




        <View style={styles.list}>

        <View>
        <Image style={{ marginTop: 15, marginLeft:15, }}
            source={require('../../assets/register.png')}
        />
        </View>   
      

        <View>

        <Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Register as an investor
</Text>
        </View>

        </View>

        </TouchableOpacity>


        <TouchableOpacity  onPress={() => navigation.navigate('InvestingTop')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/stock.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Stock Trading</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/tokenized.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Tokenized assets trading</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/gold.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Gold trading and vaulting services</Text>
</View>

</View>

</TouchableOpacity>

<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/vaults.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Vaults and commodities</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/buy.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Buy & Sell Stocks</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/Superannuation.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Superannuation</Text>
</View>

</View>

</TouchableOpacity>


<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/Consultation.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Consultation</Text>
</View>

</View>

</TouchableOpacity>



<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/Traders.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Traders calculator</Text>
</View>

</View>

</TouchableOpacity>



<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/robot.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Robot Advisory</Text>
</View>

</View>

</TouchableOpacity>



<TouchableOpacity  onPress={() => navigation.navigate('')}>



<View style={styles.list}>

<View>
<Image style={{ marginTop: 15, marginLeft:15, }}
    source={require('../../assets/forest.png')}
/>
</View>   


<View>

<Text style={{color:"#007961", marginLeft:15, marginTop:10,}}>Forecast</Text>
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

export default InvestingList;