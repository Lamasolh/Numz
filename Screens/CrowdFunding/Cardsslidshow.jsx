import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TouchableHighlight, ViewComponent} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export default function App(){

    const images =[

        require('../../assets/creditcard.png'),
        require('../../assets/creditcard.png'),
        require('../../assets/creditcard.png'),
        require('../../assets/creditcard.png'),
        require('../../assets/creditcard.png'),

    ]

    return(

        <View  style={styles.cardsicons}>

            <SliderBox style={{borderRadius:10}} images={images} inactiveDotColor="#D9D9D9"
            dotColor="black"
            dotStyle={{width:10,height:10,borderRadius:5,marginLeft:-25}}/>
        
        </View>
    )

    }

    const styles = StyleSheet.create({



        cardsicons:{
      
          padding: 20,
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
        height:280,
         marginLeft:"10%"

  
         
        }
        
      
      })
