import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, TextInput, View, TouchableOpacity,Text } from 'react-native';

const BigButtons = props => {

const navigation=useNavigation();
    return (
        <View style={styles.btnlogin}>

          <TouchableOpacity 
            style={{
              height: 45,
              backgroundColor: '#D2D2D2',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => navigation.navigate(props.navigate)}
          >
            <Text style={{ color: 'white' }}>{props.title}</Text>
          </TouchableOpacity>


        </View>

    );
}

const styles = StyleSheet.create({
    btnlogin: {

        marginTop:"10%",
        width: "100%",
  
        justifyContent: "center",
    
    
      },
})

export default BigButtons;