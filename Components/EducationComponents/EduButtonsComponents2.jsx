import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight,ScrollView ,ViewComponent } from 'react-native';
import NewInputswithcolor from '../HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import Stopinput from '../HomeComponents/GeneralComponents/Inputs/Stopinput';
import StopInputs from '../HomeComponents/GeneralComponents/Inputs/Stopinput';
import {AirbnbRating, Rating} from 'react-native-ratings';
import SMENavbar from "../SMEComponents/SMENavbar";
import BigButton3 from "../HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
const Buttonscompcards = props => {


    return (
        <>
        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>

        <Image style={{position:"relative"}}source={require('../../assets/Ebg2.png')}/>   

        <View style={{position:"absolute",top:"18%", width:"50%",backgroundColor:"white",
        justifyContent:"space-around",flexDirection:"row",height:40,alignItems:"center",
            borderRadius:10}}>
            <Text>4/20 Lessons</Text>
            <Text style={{color:"#00A081"}}>40%</Text>
        </View>

        <View style={{position:"absolute",top:"22%", width:"90%",backgroundColor:"#E3F5F1",
        justifyContent:"space-around",flexDirection:"row",height:20,alignItems:"center",
            borderRadius:20}}>
            
        </View>

        <View style={{position:"absolute",top:"22%",left:"5%", width:"50%",backgroundColor:"#00A081",
        justifyContent:"space-around",flexDirection:"row",height:20,alignItems:"center",
            borderRadius:20}}>
            
        </View>
      
           
            <View style={{backgroundColor:"white", borderTopLeftRadius:50,
             borderTopRightRadius:50, width:"100%",position:"relative", top:"-8%"}}>
  
            <View style={styles.newcontainer}>
             <>
                <View style={{padding:20, backgroundColor:"white"}}>
                    <Text style={{fontSize:23, fontWeight:"bold"}}>Graphic animation</Text>
                    <Text style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
                </View>
        
             
                
                <View style={{paddingLeft:20,paddingRight:20}}>

                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image style={{}}source={require('../../assets/rotate.png')}/>   
                     <Text style={{marginLeft:"2%"}}>40 Hours</Text>
                     </View>
                    <Text style={{marginTop:10}}>Start Date:<Text style={{color:"#9A9A9A"}}>  20 February 2022</Text></Text>
                    <Text style={{marginTop:10}}>Chapters: <Text style={{color:"#9A9A9A"}}>  9 chapters</Text></Text>
                    <Text style={{marginTop:10}}>Videos: <Text style={{color:"#9A9A9A"}}>  35 hours</Text></Text>
                    <Text style={{marginTop:10}}>Certification Date: <Text style={{color:"#9A9A9A"}}>  20 August 2022</Text></Text>
                    <Text style={{marginTop:10}}>Price <Text style={{color:"#00A081",fontWeight:"bold"}}>  $100</Text></Text>
                </View>


                <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center",paddingLeft:20,paddingRight:20}}>

                <View style={{}}>
                <Text style={{color:"black",marginTop:5, fontWeight:"bold", fontSize:23
                }}>Reviews</Text>
                </View>
           
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:"2%"}}>
                <Rating style={{marginTop:10}}
                type='star' // heart, star, bell, rocket
                ratingCount={5}
                showRating={false}
                ratingTextColor="red"
                // readonly
                // showReadOnlyText={false}
                fractions={1} // 0-20
                jumpValue={0.5}
                startingValue={3}
                imageSize={20}
                ratingBackgroundColor={'#D9D9D9'}
                onStartRating={rating => console.log(`Inital: ${rating}`)}
                onFinishRating={rating => console.log(`Rating finished ${rating}`)}
                onSwipeRating={rating => console.log(`Swiping: ${rating}`)}
                />

                <Text style={{marginTop:5, fontSize:12, marginLeft:15}}>(10)</Text>
                </View>
              
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center"
                ,marginTop:15}}>

                    <View style={{flexDirection:"column", justifyContent:"flex-start"
                    , marginTop:20, paddingLeft:"2%"}}>

                    <Image style={{marginLeft:"10%"}}source={require('../../assets/facerate.png')}/> 

                    <Image style={{marginRight:"5%"}}source={require('../../assets/ratestars.png')}/> 

                </View>

                <Text style={{fontSize:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit. Donec eu sagittis elit. Aenean Lorem ipsum {"\n"} dolor sit amet, consectetur adipiscing elit. Donec{"\n"} eu sagittis elit. Aenean </Text>

                </View>

                <View style={{padding:20}}>

                <BigButton3 title="Continue" navigate='EducationScreens2'/>

                </View>
                </>
          
        </View>
        </View>
        </View>
   
        </>



    );
}


const styles = StyleSheet.create({



    newcontainer: {

        padding: 20,
        elevation:30,
        shadowColor:"white",
   
      

    },

    cardsicons: {

        justifyContent: "center",
        alignItems: "center",
    },

    btn1: {

        width: "50%",
        padding: 10,
        backgroundColor: "#00A081",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    btn2: {

        width: "50%",
        padding: 10,
        backgroundColor: "#00A081",
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    calendar: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    container2: {

        flexDirection: "row",

    },

    container2right: {

        alignItems: "center",
        justifyContent: "center",
    },
    maincontainer2: {

        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
    }


})

export default Buttonscompcards;

/*

   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",paddingLeft:20,paddingRight:20}}>

           
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Rating style={{marginTop:10}}
                type='star' // heart, star, bell, rocket
                ratingCount={5}
                showRating={false}
                ratingTextColor="red"
                // readonly
                // showReadOnlyText={false}
                fractions={1} // 0-20
                jumpValue={0.5}
                startingValue={3}
                imageSize={20}
                ratingBackgroundColor={'#D9D9D9'}
                onStartRating={rating => console.log(`Inital: ${rating}`)}
                onFinishRating={rating => console.log(`Rating finished ${rating}`)}
                onSwipeRating={rating => console.log(`Swiping: ${rating}`)}
                />

                <Text style={{marginTop:5, fontSize:12, marginLeft:15}}>(10)</Text>
                </View>
                <Text style={{color:"#00A081",marginTop:5, fontWeight:"bold", fontSize:23}}>$100</Text>
                </View>


                */