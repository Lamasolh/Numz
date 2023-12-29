import React from 'react';
import { StyleSheet, Text, TextInput, View,Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewInputsbg2 = props => {

    const [count, setcount] = React.useState(1);
    const [count2, setcount2] = React.useState(1);
    return (
        <>
        <View style={{justifyContent:"space-evenly",alignItems:"center",flexDirection:"row",marginTop:"5%"}}>

            <Text style={{color:"#63767E",marginLeft:"10%"}}>Adults</Text>
            <Text  style={{color:"#63767E",marginLeft:"15%"}}>Children</Text>

        </View>

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>

                        <Image style={{}}
                            source={props.img}
                        />



          
            
            <View style={styles.Textinputcontainer}>


                <TouchableHighlight style={{backgroundColor:"#DAECE8",color:"black",justifyContent:"center",alignItems:"center"
                ,width:"40%",height:50,borderRadius:15}} onPress={() => { setcount(count-1) }}>
                <Text>-</Text>
                </TouchableHighlight>

                <Text>{count}</Text>

                <TouchableHighlight style={{backgroundColor:"#DAECE8",color:"black",justifyContent:"center",alignItems:"center"
                ,width:"40%",height:50,borderRadius:15,marginRight:3}} onPress={() => { setcount(count+1) }}>
                <Text>+</Text>
                </TouchableHighlight>

            </View>
 

        


           

       

            <View style={styles.Textinputcontainer}>


                <TouchableHighlight style={{backgroundColor:"#DAECE8",color:"black",justifyContent:"center",alignItems:"center"
                ,width:"40%",height:50,borderRadius:15}} onPress={() => { setcount2(count2-1) }}>
                <Text>-</Text>
                </TouchableHighlight>

                <Text>{count2}</Text>

                <TouchableHighlight style={{backgroundColor:"#DAECE8",color:"black",justifyContent:"center",alignItems:"center"
                ,width:"40%",height:50,borderRadius:15,marginRight:3}} onPress={() => { setcount2(count2+1) }}>
                <Text>+</Text>
                </TouchableHighlight>

                </View>

      
     

        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 20
    },
    Textinputcontainer: {
        borderWidth: 2,
        marginTop:15,
        borderColor: '#E3E5E5',
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 5,  height: 65,
        backgroundColor: "white",
        width:"40%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
     
       
      
    },
    text: {
        fontSize: 11,

    }
})

export default NewInputsbg2;