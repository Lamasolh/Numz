import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, TextInput, View, TouchableOpacity,Text } from 'react-native';

const CBigButtons = props => {
    return (
        <View style={styles.btnlogin}>

          <TouchableOpacity
            style={{
              height: 45,
              backgroundColor: '#00A081',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() =>
              navigation.navigate('Home')}
          >
            <Text style={{ color: 'white' }}>{props.title}</Text>
          </TouchableOpacity>


        </View>

    );
}

const styles = StyleSheet.create({
    btnlogin: {

        marginTop: 20,
        width: "100%",
  
        justifyContent: "center",
    
    
      },
})

export default CBigButtons;