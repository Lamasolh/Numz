import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image ,ScrollView} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';

const Edu5 = props => {

const navigation=useNavigation();


  return (
    <>



  <View style={styles.maincontainer}>
  <ScrollView horizontal={true}>
  <TouchableOpacity onPress={() =>
              navigation.navigate('EducationScreens3')} style={styles.container}>

   <View style={{position:"relative"}}>
  <Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc1.png')}/>
  <View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
    padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
  <Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Data Engineering {'\n'}Foundations Specialization</Text>
  </View>

  <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:10}}>
   
    

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

      <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
      <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
    </View>

  </TouchableOpacity>




  <View style={styles.container}>

   <View style={{position:"relative"}}>
  <Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc2.png')}/>
  <View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
    padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
  <Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Technical Support {'\n'}Professional</Text>
  </View>

  <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:10}}>
   
    

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

      <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
      <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
    </View>

  </View>

  
  <View style={styles.container}>

<View style={{position:"relative"}}>
<Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc1.png')}/>
<View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
 padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
<Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Technical Support{'\n'}Professional</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:10}}>

 

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


   <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
   <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
 </View>

</View>

<View style={styles.container}>

<View style={{position:"relative"}}>
<Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc1.png')}/>
<View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
 padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
<Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Technical Support  {'\n'}Professional</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>

 

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

   <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
   <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
 </View>

</View>


  </ScrollView>
</View>




<View style={styles.maincontainer}>
  <ScrollView horizontal={true}>
  <View style={styles.container}>

   <View style={{position:"relative"}}>
  <Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc3.png')}/>
  <View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
    padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
  <Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Cybersecurity and Its{'\n'}Ten Domains</Text>
  </View>

  <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:10}}>
   
    

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

      <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
      <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
    </View>

  </View>




  <View style={styles.container}>

   <View style={{position:"relative"}}>
  <Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc4.png')}/>
  <View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
    padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
  <Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Cybersecurity and Its {'\n'}Ten Domains</Text>
  </View>

  <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:10}}>
   
    

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

      <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
      <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
    </View>

  </View>

  
 
  <TouchableOpacity onPress={() =>
              navigation.navigate('EducationScreens6')} style={styles.container}>
<View style={{position:"relative"}}>
<Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc1.png')}/>
<View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
 padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
<Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Data Engineering {'\n'}Foundations Specialization</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:10}}>

 

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

   <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
   <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
 </View>
</TouchableOpacity>


<View style={styles.container}>

<View style={{position:"relative"}}>
<Image style={{width:"100%", borderRadius:20,height:120}} source={require('../../assets/edc1.png')}/>
<View style={{ position:"absolute", backgroundColor:"#FFFFFF", left:"63%",top:"5%",
 padding:5,borderRadius:15, width:"30%", justifyContent:"center", alignItems:"center"}}><Text style={{color:"#00A081",fontWeight:"bold"}}>$100</Text></View>
<Text style={{marginTop:10, color:"#000000", fontWeight:"bold",marginLeft:"3%"}}>Data Engineering {'\n'}Foundations Specialization</Text>
</View>

<View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>

 

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

   <Text style={{marginTop:5, fontSize:12}}>(10)</Text>
   <Text style={{color:"#9E9E9E",marginTop:5}}>Beginner</Text>
 </View>

</View>

   
  </ScrollView>

</View>

    </>



  );
}


const styles = StyleSheet.create({

    maincontainer: {
  

    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:25,


  },

  
  container:{
  
    backgroundColor:"white",
    elevation:5,
    borderRadius:20,
    shadowColor:"black",
    width:"32%",
    height:230,
    marginLeft:10,
    marginBottom:10


  },


})

export default Edu5;