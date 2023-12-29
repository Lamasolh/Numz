import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Loanreq2 = props => {
 const navigation=useNavigation();
 const [show, setshow] = useState(false)
 const [show2, setshow2] = useState(true)
  return (
    <>
  
  <View style={styles.maincontainer}>

      <View style={styles.container}>

        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#000000", fontSize:18}}>Borrowed Amount</Text>
        </View>


      </View>

      <View style={styles.container}>

        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#8E8E93", fontSize:12, textAlign:"center", marginTop:10}}>Select the amount you want. The shown amount is before fees</Text>
        </View>


        </View>


        <View style={styles.container}>

        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"#00A081", fontSize:18, textAlign:"center", marginTop:10}}>$20,000</Text>
        </View>

        </View>


        
        <View style={styles.container2}>

        <View style={{width:"100%", backgroundColor:"#E3F5F1", height:10,marginTop:10,borderRadius:10, position:"relative"}}>

            <View style={{width:"50%", backgroundColor:"#00A081", height:10,borderRadius:10, position:"relative"}}>

            </View>

            <Image style={{position:"absolute" ,left:"45%", top:"-60%"}}
                    source={require('../../assets/circle2.png')}
                    />
          
        </View>

        </View>


        
        <View style={styles.container}>

        <View style={{width:"100%", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
            <Text style={{color:"#000000", fontSize:13,  marginTop:10}}>$500</Text>
            <Text style={{color:"#000000", fontSize:13, marginTop:10}}>$50,000</Text>
        </View>

        </View>


       

        </View>



        <View style={styles.maincontainer}>

<View style={styles.container}>

  <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:"#000000", fontSize:18}}>Repayment Period</Text>
  </View>


</View>

<View style={styles.container}>

  <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:"#8E8E93", fontSize:12, textAlign:"center", marginTop:10}}>Select the period you want. The shown is months because the repayment is in monthly basis.</Text>
  </View>


  </View>


  <View style={styles.container}>

  <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
      <Text style={{color:"#00A081", fontSize:18, textAlign:"center", marginTop:10}}>30 months</Text>
  </View>

  </View>


  
  <View style={styles.container2}>

  <View style={{width:"100%", backgroundColor:"#E3F5F1", height:10,marginTop:10,borderRadius:10, position:"relative"}}>

      <View style={{width:"50%", backgroundColor:"#00A081", height:10,borderRadius:10, position:"relative"}}>

      </View>

      <Image style={{position:"absolute" ,left:"45%", top:"-60%"}}
              source={require('../../assets/circle2.png')}
              />
    
  </View>

  </View>


  
  <View style={styles.container}>

  <View style={{width:"100%", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
      <Text style={{color:"#000000", fontSize:13,  marginTop:10}}>12 months</Text>
      <Text style={{color:"#000000", fontSize:13, marginTop:10}}>80 months</Text>
  </View>

  </View>

  </View>
{show &&
  <View style={styles.container}>

<View style={{width:"100%", justifyContent:"space-between", alignItems:"center", flexDirection:"row",padding:15}}>
    <View style={{flexDirection:"column", paddingLeft:"5%"}}>
    <Text style={{color:"#000000", fontSize:13,  marginTop:10}}>Monthly cost for 18 Months:</Text>
    <Text style={{color:"#8E8E93",  fontSize:12, marginTop:10}}>You are borring <Text style={{color:"black"}}> $20,000</Text> over <Text style={{color:"black"}}> 30 months </Text> at  {'\n'} 15% APR with total loan cost of $28,000.</Text>
    </View>
</View>

<View style={{paddingRight:"5%"}}>

    <Text style={{fontSize:23,color:"#00A081"}}>$670</Text>
</View>

</View>
}

{show2 &&
<TouchableOpacity  onPress={() => {
                    
                   setshow(true), setshow2(false)
                }} style={{width:"100%", backgroundColor:"#00A081", height:55,
 borderRadius:20,marginTop:20, justifyContent:"center", alignItems:"center", }}>

<Text style={{color:"white"}}>Calculate</Text>
</TouchableOpacity>
}
    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
    padding: 20,
   
    backgroundColor:"white",
    elevation:12,
    borderRadius:20,
    shadowColor:"grey",
    marginTop:"10%"

  },

  container:{
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",

  },


})

export default Loanreq2;