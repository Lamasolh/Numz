import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';


const Bankingcompcards = props => {
 

  return (
    <>

  

  <View   
 
 style={styles.newcontainer}
  >
  

    
        <View style={styles.insidecard} >

            <View style={{padding:8}}>
               <Text style={{fontSize:13, color:"#000000"}}>
                {props.titlecard}
               </Text>
               <Text style={{fontSize:10, color:"#7C7C7C"}}>
               {props.numbcard}
               </Text>
             </View>


               <View style={styles.cardimg}>

           


                    <Image style={{  }}
                    source={require('../../assets/cardimg.png')}
                    />

              
                </View>
          

        </View>
       
        <View style={styles.botomcard}>
            <Text style={{fontSize:20, color:"#00A081"}}>{props.price}</Text>
        </View>

  
  
    
 
      </View>
    
    </>



  );
}


const styles = StyleSheet.create({



  newcontainer:{

    padding: 20,
    backgroundColor:"white",
    borderWidth:2,
    borderColor:"#DFDFDF",
   
    width:"31%",
    height:115,
    borderRadius:15,
    marginLeft:10,
    marginTop:20,
   
  },

  containerchanges:{

    elevation:10,

  },
  insidecard: {

   
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },

  botomcard:{


    justifyContent:"center",
    alignItems:"center",
   
  }

})

export default Bankingcompcards;