import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

const StopInputs = props => {
    return (
        <View >

            <View style={styles.Textinputcontainer}>

                <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>
                
                <View style={{justifyContent:"space-between",alignItems:"center", paddingRight:10,flexDirection:"row"}}> 
                <TextInput color="#00A081" width="70%" />
            <TouchableOpacity style={styles.stopbtn}>
                <Text style={{color:"#EB001B"}}>STOP</Text>
                </TouchableOpacity>
                
            </View>

               

               
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 20
    },
    Textinputcontainer: {
        borderWidth: 2,
        marginTop: 15,
        borderColor: "#E3E5E5",
        borderRadius: 8,
        paddingTop: 5,
        paddingLeft: 5,  height: 55,
       
      
        
    },
    text: {
        fontSize: 11,
       
    },

    stopbtn:{

        width:"20%",
        height:23,
       
        backgroundColor:"#EB001B2B",
        color:"#EB001B",
        borderRadius:10
        , justifyContent:"center"
        ,alignItems:"center",
       
    }
})

export default StopInputs;

/*

  <View style={{alignItems:"flex-end", paddingRight:10,}}> 
            <TouchableOpacity style={styles.stopbtn}>
                <Text style={{color:"#EB001B"}}>Stop</Text>
                </TouchableOpacity>
            </View>

*/