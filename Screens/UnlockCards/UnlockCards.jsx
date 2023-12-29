import React from 'react';
import { StyleSheet, View, ScrollView ,Image,Text,TextInput,TouchableOpacity} from 'react-native';

const Unlock = props => {
    return (
        <View>
            <ScrollView>

                <View style={styles.container}>

                <View style={styles.newcontainer2}>

                <View style={{ width:"10%"}}>
                <Image style={{ width:"80%", height:30 }}
                    source={require('../../assets/homeicons.png')}
                    />
                </View>

                <View>
                    <Text style={{fontSize:25, fontWeight:"bold"}}>Stop/Unblock Card</Text>
                </View>
                </View>


                <View style={{marginTop:30}}>
                <View>
                    <Text  style={{marginLeft:25, color:"grey"}}>Action</Text>
                </View>
                <View style={{ justifyContent:"center", alignItems:"center"}}>

                    <TextInput placeholder='Stop Card / Block Card / Unlock Card' style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
                    width:"90%",}}>

                    </TextInput>
                
                </View>
            
            </View>

            <View style={{marginTop:30}}>
                <View>
                    <Text  style={{marginLeft:25, color:"grey"}}>Card</Text>
                </View>
                <View style={{ justifyContent:"center", alignItems:"center"}}>

                    <TextInput placeholder='Select Card' style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
                    width:"90%",}}>

                    </TextInput>
                
                </View>
            
            </View>

            <View style={{width:"100%", marginTop:150, alignItems:"center",justifyContent:"center"}}>


            <TouchableOpacity style={{width:"70%", height:50, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"}}>

                <Text style={{color:"white"}}>Submit</Text>
            </TouchableOpacity>

            </View>

            <View style={{marginTop:30}}>
                <View>
                    <Text  style={{marginLeft:25, color:"grey"}}>Description</Text>
                </View>
                <View style={{ justifyContent:"center", alignItems:"center"}}>

                    <TextInput placeholder='Legal Text' style={{borderWidth:1,borderColor:"#E3E5E5", padding:5,marginTop:10,
                    width:"90%",}}>

                    </TextInput>
                
                </View>
            
            </View>
                 
                </View>
                
          
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 5,
      
    },

    
  newcontainer2:{

    marginTop:50,
    justifyContent:"space",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center"
  
  },
})

export default Unlock;