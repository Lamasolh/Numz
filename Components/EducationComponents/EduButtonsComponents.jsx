import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight,ScrollView ,ViewComponent } from 'react-native';
import NewInputswithcolor from '../HomeComponents/GeneralComponents/Inputs/NewInputswithcolor';
import Stopinput from '../HomeComponents/GeneralComponents/Inputs/Stopinput';
import StopInputs from '../HomeComponents/GeneralComponents/Inputs/Stopinput';
import {AirbnbRating, Rating} from 'react-native-ratings';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import BigButton3 from "../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3"
const Buttonscompcards = props => {

    


    const [showComponent, setShowComponent] = useState(true)
    const [showComponent2, setShowComponent2] = useState(false)

    const [color, setcolor] = useState("#FFFFFF")
    const [color2, setcolor2] = useState("#9DB2AE")

    const [bgcolor, bgsetcolor] = useState("#00A081")
    const [bgcolor2, bgsetcolor2] = useState("#D1EEE8")
    return (
        <>
        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>

        <Image style={{}}source={require('../../assets/bgpc.png')}/>   

       
      
            <View style={{backgroundColor:"white", borderTopLeftRadius:50,
             borderTopRightRadius:50, width:"100%",position:"relative", top:"-10%"}}>


            <View style={styles.newcontainer}>

                <TouchableOpacity style={{
                    width: "50%",
                    padding: 10,
                    backgroundColor: bgcolor,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                }}
                    onPress={() => {
                        setShowComponent(true), setShowComponent2(false),
                        setcolor2("#9DB2AE"), bgsetcolor2("#D1EEE8"),
                        setcolor("#FFFFFF"), bgsetcolor("#00A081")
                    }}><Text style={{ color: color }} >Details</Text></TouchableOpacity>

                <TouchableOpacity style={{
                    width: "50%",
                    padding: 10,
                    backgroundColor: bgcolor2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                }}
                    onPress={() => {
                        setShowComponent(false), setShowComponent2(true),
                        setcolor2("#FFFFFF"), bgsetcolor2("#00A081"),
                        setcolor("#9DB2AE"), bgsetcolor("#D1EEE8")
                    }}>
                    <Text style={{ color: color2 }} >Syllabus</Text></TouchableOpacity>

            </View>

           

                   
                {showComponent &&        
             <>
                <View style={{padding:20, backgroundColor:"white"}}>
                    <Text style={{fontSize:23, fontWeight:"bold"}}>Graphic animation</Text>
                    <Text style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
                </View>
               
                
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
                
                <View style={{paddingLeft:20,paddingRight:20,marginTop:20}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image style={{}}source={require('../../assets/rotate.png')}/>   
                     <Text style={{marginLeft:"2%"}}>40 Hours</Text>
                     </View>
                    <Text style={{marginTop:10}}>Start Date:<Text style={{color:"#9A9A9A"}}>  20 February 2022</Text></Text>
                    <Text style={{marginTop:10}}>Chapters: <Text style={{color:"#9A9A9A"}}>  9 chapters</Text></Text>
                    <Text style={{marginTop:10}}>Videos: <Text style={{color:"#9A9A9A"}}>  35 hours</Text></Text>
                    <Text style={{marginTop:10}}>Certification Date: <Text style={{color:"#9A9A9A"}}>  20 August 2022</Text></Text>
                </View>
                <BigButton3 title="Enroll Courses" navigate='EducationScreens4'/>
                </>
                }



        {showComponent2 &&        
             <>
                <View style={{padding:20, backgroundColor:"white", elevation:10, flexDirection:"row"
            ,alignItems:"center", justifyContent:"space-around",borderRadius:10}}>
                   
                <Image style={{}}source={require('../../assets/play.png')}/>   

                <Text style={{color:"#000000", fontWeight:"bold", fontSize:15}}>Getting Started with OCI</Text>
                <Text style={{color:"#9A9A9A"}}>10.Min</Text>
                </View>


                <View style={{padding:20, backgroundColor:"white", elevation:10, flexDirection:"row"
            ,alignItems:"center", justifyContent:"space-around",borderRadius:10, marginTop:"3%"}}>
                   
                <Image style={{}}source={require('../../assets/play.png')}/>   

                <Text style={{color:"#000000", fontWeight:"bold", fontSize:15}}>Compute,Storage and {"\n"}Database</Text>
                <Text style={{color:"#9A9A9A"}}>10.Min</Text>
                </View>


                <View style={{padding:20, backgroundColor:"white", elevation:10, flexDirection:"row"
            ,alignItems:"center", justifyContent:"space-around",borderRadius:10, marginTop:"3%"}}>
                   
                <Image style={{}}source={require('../../assets/play2.png')}/>   

                <Text style={{color:"#000000", fontWeight:"bold", fontSize:15}}>OCI Services</Text>
                <Text style={{color:"#9A9A9A"}}>10.Min</Text>
                </View>

                
                <View style={{padding:20, backgroundColor:"white", elevation:10, flexDirection:"row"
            ,alignItems:"center", justifyContent:"space-around",borderRadius:10, marginTop:"3%"}}>
                   
                <Image style={{}}source={require('../../assets/play2.png')}/>   

                <Text style={{color:"#000000", fontWeight:"bold", fontSize:15}}>OCI Services</Text>
                <Text style={{color:"#9A9A9A"}}>10.Min</Text>
                </View>
               
                
         
                <BigButton3 title="Enroll Courses" navigate='EducationScreens4'/>
                </>
                }
           
    
        </View>
        </View>
        </>



    );
}


const styles = StyleSheet.create({



    newcontainer: {

        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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