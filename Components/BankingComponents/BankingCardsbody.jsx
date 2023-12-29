import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Bankingcompcards2 = props => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.maincontainer}>
        {/* <View style={styles.container}>




        <View style={styles.insidecard}>

      <View style={styles.cardinsidecard}>
        <Image style={{  transform:"scale(1.1)" }}
         source={props.imageUri}
        />
        </View>  

      
        </View>

        <View><Text style={{marginTop:5,fontSize:12, color:"#007961"}}>{props.title}</Text></View>
        <View><Text style={{marginTop:5,fontSize:10, color:"#898989"}}>{props.txt}</Text></View>
             
      </View> */}
        <TouchableOpacity onPress={() => navigation.navigate(props.navigate1)} style={styles.container}>




          <View style={styles.insidecard}>

            <View style={styles.cardinsidecard}>
              <Image style={{  }}
                source={props.imageUri}
              />
            </View>


          </View>

          <View><Text style={{ marginTop: 5, fontSize: 12, color: "#007961" }}>{props.title}</Text></View>
          <View><Text style={{ marginTop: 5, fontSize: 10, color: "#898989" }}>{props.txt}</Text></View>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate(props.navigate2)} style={styles.container}>




          <View style={styles.insidecard}>

            <View style={styles.cardinsidecard}>
              <Image style={{ }}
                source={props.imageUri2}
              />
            </View>


          </View>

          <View><Text style={{ marginTop: 5, fontSize: 12, color: "#007961" }}>{props.title2}</Text></View>
          <View><Text style={{ marginTop: 5, fontSize: 10, color: "#898989" }}>{props.txt2}</Text></View>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(props.navigate3)} style={styles.container}>




          <View style={styles.insidecard}>

            <View style={styles.cardinsidecard}>
              <Image style={{  }}
                source={props.imageUri3}
              />
            </View>


          </View>

          <View><Text style={{ marginTop: 5, fontSize: 12, color: "#007961" }}>{props.title3}</Text></View>
          <View><Text style={{ marginTop: 5, fontSize: 10, color: "#898989" }}>{props.txt3}</Text></View>

        </TouchableOpacity>
      </View>
    </>



  );
}


const styles = StyleSheet.create({

  maincontainer: {

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    padding: 10,

  },
  container: {

    backgroundColor: "#CAECE5",
    width: "33%",
    height: 130,
    borderRadius: 15,

    padding: 10,
    marginLeft: 7,

  },
  insidecard: {

    width: "65%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    position: "relative",

  },

  cardinsidecard: {


    position: "absolute",
    top: "25%",
    left: "30%",

  }


})

export default Bankingcompcards2;