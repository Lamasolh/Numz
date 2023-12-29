import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Registercomp = props => {

  return (
    <>
    

      <View style={styles.container}>


       <View style={styles.firstcard}>

        <View style={{justifyContent:"center", alignItems:"center", marginTop:15}}>

        <Image style={{}}
            source={require('../../../assets/userprofile.png')}
        />
        </View>

        <View>
                <Text style={{textAlign:"center", marginTop:10,fontSize:17, color:"#090A0A"}}>John Doe</Text>
        </View>

        <View>
                <Text style={{ marginTop:10,fontSize:11, paddingLeft:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
        </View>
        
        <View style={{justifyContent:"center", alignItems:"center", marginTop:10}}>
        <TouchableOpacity style={styles.btnqoute}
            onPress={() => navigation.navigate('')}>

  

        <Text style={{color:"white"}}>Get A Quote</Text>



        </TouchableOpacity>
        </View>
       </View>

       <View style={styles.secondcard}>

       <View style={{justifyContent:"center", alignItems:"center", marginTop:15}}>

        <Image style={{}}
            source={require('../../../assets/userprofile.png')}
        />
        </View>

        <View>
                <Text style={{textAlign:"center", marginTop:10,fontSize:17, color:"#090A0A"}}>John Doe</Text>
        </View>

        <View>
                <Text style={{ marginTop:10,fontSize:11, paddingLeft:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
        </View>

        <View style={{justifyContent:"center", alignItems:"center", marginTop:10}}>
        <TouchableOpacity style={styles.btnqoute}
            onPress={() => navigation.navigate('')}>



        <Text style={{color:"white"}}>Get A Quote</Text>



        </TouchableOpacity>
        </View>
       </View>

       </View>

   

     
      

    </>



  );
}


const styles = StyleSheet.create({

  container: {
    padding: 10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  

  },

  firstcard:{

    width:"50%",
    height:280,
    borderRadius:20,
    backgroundColor:"white",
    elevation:15,
    marginRight:10,
  },
  
  secondcard:{

    width:"50%",
    height:280,
    borderRadius:20,
    backgroundColor:"white",
    elevation:15,
    marginLeft:10,
  },

  btnqoute:{

    backgroundColor:"#00A081",
    borderRadius:20,
    width:"90%",
    padding:5,
    
    justifyContent:"center",
    alignItems:"center"
  }

})

export default Registercomp;