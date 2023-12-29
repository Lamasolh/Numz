import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FC =props=> {

  const navigation=useNavigation();

  return (


    <>

<View style={styles.container}>


    <TouchableOpacity onPress={() => navigation.navigate('EntertainmentScreeen4')} style={{width:"100%",height:170,backgroundColor:"#F8F8F8",elevation:10,
    borderRadius:10,paddingTop:5}}>

        <View style={{flexDirection:"row",justifyContent:"flex-end",paddingRight:10,alignItems:"center",marginTop:5}}>
        <Image style={{}}
              source={require('../../assets/turkey.png')}
        />

        <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>TURKISH AIRLINES</Text>
        </View>



        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>

        <View style={{flexDirection:"column",paddingLeft:10}}>
            <Text style={{color:"#555555"}}>NYC</Text>
            <Text style={{fontWeight:"bold",fontSize:15}}>09:45</Text>
        </View>

        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

        <Text  style={{color:"#555555"}}>17hrs 15mins</Text>
        <Image style={{}}
              source={require('../../assets/airplanef.png')}
        />
        <Text  style={{color:"#555555"}}>1 stop</Text>
        </View>
        
        <View style={{flexDirection:"column",paddingRight:10}}>
        <Text style={{color:"#555555",fontSize:15}}>DXB</Text>
        <Text style={{color:"black",fontWeight:"bold",fontSize:15}}>19:00</Text>
        <Text style={{color:"#EB5757",fontSize:12}}>+1 Days</Text>
        </View>

        
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:20,paddingLeft:10,paddingRight:10}}>

        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>

            
        <Image style={{}}
            source={require('../../assets/icircle.png')}
        />
        <Text  style={{color:"#A5A5A5",paddingLeft:5,fontSize:12}}>FLIGHT INFO</Text>
        </View>

        <View>

            <Text style={{color:"#00A081",fontWeight:"bold",fontSize:18}}>$1070</Text>
        </View>

        </View>
    </TouchableOpacity>


   

</View>



<View style={styles.container}>


    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"100%",height:170,backgroundColor:"#F8F8F8",elevation:10,
    borderRadius:10,paddingTop:5}}>

        <View style={{flexDirection:"row",justifyContent:"flex-end",paddingRight:10,alignItems:"center",marginTop:5}}>
        <Image style={{}}
              source={require('../../assets/ethiop.png')}
        />

        <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>ETHIOPIAN AIRLINES</Text>
        </View>



        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>

        <View style={{flexDirection:"column",paddingLeft:10}}>
            <Text style={{color:"#555555"}}>NYC</Text>
            <Text style={{fontWeight:"bold",fontSize:15}}>11:00</Text>
        </View>

        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

        <Text  style={{color:"#555555"}}>17hrs 15mins</Text>
        <Image style={{}}
              source={require('../../assets/airplanef.png')}
        />
        <Text  style={{color:"#555555"}}>1 stop</Text>
        </View>
        
        <View style={{flexDirection:"column",paddingRight:10}}>
        <Text style={{color:"#555555",fontSize:15}}>DXB</Text>
        <Text style={{color:"black",fontWeight:"bold",fontSize:15}}>20:00</Text>
        <Text style={{color:"#EB5757",fontSize:12}}>+1 Days</Text>
        </View>

        
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:10,paddingLeft:10,paddingRight:10}}>

        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>

            
        <Image style={{}}
            source={require('../../assets/icircle.png')}
        />
        <Text  style={{color:"#A5A5A5",paddingLeft:5,fontSize:12}}>FLIGHT INFO</Text>
        </View>

        <View>

            <Text style={{color:"#00A081",fontWeight:"bold",fontSize:18}}>$1140</Text>
        </View>

        </View>
    </TouchableOpacity>


   

</View>


   
<View style={styles.container}>


    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"100%",height:170,backgroundColor:"#F8F8F8",elevation:10,
    borderRadius:10,paddingTop:5}}>

        <View style={{flexDirection:"row",justifyContent:"flex-end",paddingRight:10,alignItems:"center",marginTop:5}}>
        <Image style={{}}
              source={require('../../assets/etihad.png')}
        />

        <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>ETIHAD AIRWAYS</Text>
        </View>



        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>

        <View style={{flexDirection:"column",paddingLeft:10}}>
            <Text style={{color:"#555555"}}>NYC</Text>
            <Text style={{fontWeight:"bold",fontSize:15}}>09:45</Text>
        </View>

        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

        <Text  style={{color:"#555555"}}>17hrs 15mins</Text>
        <Image style={{}}
              source={require('../../assets/airplanef.png')}
        />
        <Text  style={{color:"#555555"}}>1 stop</Text>
        </View>
        
        <View style={{flexDirection:"column",paddingRight:10}}>
        <Text style={{color:"#555555",fontSize:15}}>DXB</Text>
        <Text style={{color:"black",fontWeight:"bold",fontSize:15}}>19:00</Text>
        <Text style={{color:"#EB5757",fontSize:12}}>+1 Days</Text>
        </View>

        
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:10,paddingLeft:10,paddingRight:10}}>

        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>

            
        <Image style={{}}
            source={require('../../assets/icircle.png')}
        />
        <Text  style={{color:"#A5A5A5",paddingLeft:5,fontSize:12}}>FLIGHT INFO</Text>
        </View>

        <View>

            <Text style={{color:"#00A081",fontWeight:"bold",fontSize:18}}>$1210</Text>
        </View>

        </View>
    </TouchableOpacity>


   

</View>


<View style={styles.container}>


    <TouchableOpacity onPress={() => navigation.navigate()} style={{width:"100%",height:170,backgroundColor:"#F8F8F8",elevation:10,
    borderRadius:10,paddingTop:5}}>

        <View style={{flexDirection:"row",justifyContent:"flex-end",paddingRight:10,alignItems:"center",marginTop:5}}>
        <Image style={{}}
              source={require('../../assets/emirates.png')}
        />

        <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>EMIRATES</Text>
        </View>



        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>

        <View style={{flexDirection:"column",paddingLeft:10}}>
            <Text style={{color:"#555555"}}>NYC</Text>
            <Text style={{fontWeight:"bold",fontSize:15}}>11:20</Text>
        </View>

        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

        <Text  style={{color:"#555555"}}>12hrs 30mins</Text>
        <Image style={{}}
              source={require('../../assets/airplanef.png')}
        />
        <Text  style={{color:"#555555"}}>Non Stop</Text>
        </View>
        
        <View style={{flexDirection:"column",paddingRight:10}}>
        <Text style={{color:"#555555",fontSize:15}}>DXB</Text>
        <Text style={{color:"black",fontWeight:"bold",fontSize:15}}>07:20</Text>
        <Text style={{color:"#EB5757",fontSize:12}}></Text>
        </View>

        
        </View>

        <View style={{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginTop:20,paddingLeft:10,paddingRight:10}}>

        <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>

            
        <Image style={{}}
            source={require('../../assets/icircle.png')}
        />
        <Text  style={{color:"#A5A5A5",paddingLeft:5,fontSize:12}}>FLIGHT INFO</Text>
        </View>

        <View>

            <Text style={{color:"#00A081",fontWeight:"bold",fontSize:18}}>$1430</Text>
        </View>

        </View>
    </TouchableOpacity>


   

</View>

    </>
  );
    
}


const styles = StyleSheet.create({

  container: {

    padding:10,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    
   
  },

  


})


export default FC;