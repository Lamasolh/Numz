import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Image ,Pressable,Modal} from 'react-native';

const CInputs = props => {


    return (
        <View >


            <View style={styles.Textinputcontainer}>

                <Text style={{ fontSize: 11, marginLeft: 12, color: 'rgba(114, 119, 122, 1)' }} keyboardType={props.type}>{props.label}</Text>
                
                <View style={{justifyContent:"space-between",alignItems:"center", paddingRight:10,flexDirection:"row"}}> 
                <TextInput color="#00A081" width="70%" />
            <TouchableOpacity style={styles.stopbtn}>

            <Image source={require('../../../../assets/cal.png')}></Image>
   
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
       
        backgroundColor: "#F1F1F1",
        
    },
    text: {
        fontSize: 11,
       
    },

    stopbtn:{

        width:"20%",
        height:23,
        color:"#EB001B",
        borderRadius:10
        , justifyContent:"center"
        ,alignItems:"center",
       
    }
})

export default CInputs;

/*

  <View style={{alignItems:"flex-end", paddingRight:10,}}> 
            <TouchableOpacity style={styles.stopbtn}>
                <Text style={{color:"#EB001B"}}>Stop</Text>
                </TouchableOpacity>
            </View>

*/