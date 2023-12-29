import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, TextInput, View, TouchableOpacity,Text } from 'react-native';

const BlueButtons = props => {
    return (
        <View style={styles.btnlogin}>

          <TouchableOpacity
          style={{width:"100%", height:55, backgroundColor:"#3545A7", justifyContent:"center", alignItems:"center"
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
    
        marginTop:30
      },
})

export default BlueButtons;