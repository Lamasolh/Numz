import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, TextInput, View, TouchableOpacity,Text } from 'react-native';

const BlackButtons = props => {
    return (
        <View style={styles.btnlogin}>

          <TouchableOpacity
          style={{width:"40%", height:45, backgroundColor:"black", justifyContent:"center", alignItems:"center"
         , borderRadius:5,   }}
            onPress={() =>
              navigation.navigate('')}
          >
            <Text style={{ color: 'white' }}>{props.title}</Text>
          </TouchableOpacity>


        </View>

    );
}

const styles = StyleSheet.create({
    btnlogin: {

    
        width: "100%",
  
        justifyContent: "center",
        alignItems:"center",
    
        marginTop:40
      },
})

export default BlackButtons;