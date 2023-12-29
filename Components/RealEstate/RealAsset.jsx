import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RealAsset = props => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.circlepercentagecontainer}>
          <Image style={{}}
            source={require('../../assets/circlepercent.png')}
          />

          <View style={styles.imgtxts}>
            <Text style={{ fontSize: 11 }}>Assets Value</Text>
          </View>

          <View style={styles.imgprice}>
            <Text style={{ fontSize: 20 }}>$900K</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <View style={styles.nearcirclepercent}>
            <Image style={{ marginTop: 9 }}
              source={require('../../assets/greendot.png')}
            />
            <Text style={{ marginLeft: 10, marginTop: 3, }}>Houses</Text>
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: "bold" }}>12%</Text>
          </View>

          <View style={styles.nearcirclepercent}>
            <Image style={{ marginTop: 9 }}
              source={require('../../assets/bluedot.png')}
            />
            <Text style={{ marginLeft: 10, marginTop: 3, }}>Apartments</Text>
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: "bold" }}>50%</Text>
          </View>

          <View style={styles.nearcirclepercent}>
            <Image style={{ marginTop: 9 }}
              source={require('../../assets/greydot.png')}
            />
            <Text style={{ marginLeft: 10, marginTop: 3, }}>Offices</Text>
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}>10%</Text>
          </View>

          <View style={styles.nearcirclepercent}>
            <Image style={{ marginTop: 9 }}
              source={require('../../assets/blackdot.png')}
            />
            <Text style={{ marginLeft: 10, marginTop: 3, }}>Lands</Text>
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}>8%</Text>
          </View>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center"

  },

  circlepercentagecontainer: {
    position: "relative",
  },

  imgtxts: {
    position: "absolute",
    top: "36%",
    left: "27%",
  },

  imgprice: {
    position: "absolute",
    top: "50%",
    left: "28%",
  },

  container2: {
    flexDirection: "column",
  },

  nearcirclepercent: {
    flexDirection: "row",
    marginTop: 7,
    left: 20
  }

})

export default RealAsset;