import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import SME from '../../Components/SMEComponents/SMEHeader';
import Navbar from '../../Components/SMEComponents/SMENavbar';
import { useNavigation } from '@react-navigation/native';

const RealDetails = props => {
const navigation=useNavigation()
  return (
    <ScrollView>
      <View style={styles.container} >
      <TouchableOpacity onPress={() => navigation.navigate('RealChart')}>
        <Image style={{ top: 50, left: 10, zIndex: 2 }}
          source={require('../../assets/arrowblack.png')}
        />
        <Image style={{}}
          source={require('../../assets/details1.png')}
        />
        </TouchableOpacity>
        <View>
          <Text style={{ padding: 20, fontSize: 19.33, fontWeight: 700 }}>Australia, Sydney</Text>
          <Text style={{ padding: 20, fontSize: 10, fontWeight: 400, top: -30, lineHeight: 17 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sagittis elit. Aenean </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, top: -20 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500 }}>Owner: </Text>
          </View>
          <View style={{ flexDirection: 'column', right: 100 }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500, color: '#9A9A9A' }}>John Doe </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, top: -40 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500 }}>Contract Address:     </Text>
          </View>
          <View style={{ flexDirection: 'column', right: 130 }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500, color: '#9A9A9A' }}>LINK </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, top: -60 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500 }}>Real Estate ID: </Text>
          </View>
          <View style={{ flexDirection: 'column', right: 75 }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500, color: '#9A9A9A' }}>534456434 </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, top: -80 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500 }}>Royalty Fee:</Text>
          </View>
          <View style={{ flexDirection: 'column', right: 128 }}>
            <Text style={{ fontSize: 15.2, fontWeight: 500, color: '#9A9A9A' }}>10% </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30, top: -80 }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textAlign: 'center', fontSize: 19.53, fontWeight: 600, color: '#00A081' }}>11%</Text>
            <Text style={{ textAlign: 'center', fontSize: 15.73, fontWeight: 400 }}>Rate</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textAlign: 'center', fontSize: 19.53, fontWeight: 600, color: '#00A081' }}>12 mo.</Text>
            <Text style={{ textAlign: 'center', fontSize: 15.73, fontWeight: 400 }}>Projected Term</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textAlign: 'center', fontSize: 19.53, fontWeight: 600, color: '#00A081' }}>64%</Text>
            <Text style={{ textAlign: 'center', fontSize: 15.73, fontWeight: 400 }}>Share Price</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, left: 5, top: -100 }}>
          <Image style={{ width: 350 }} source={require('../../assets/detailsimage.png')} />
        </View>
        <View style={{top:-159,padding:20}}>
          <Buttons title='Purchase Shares' navigate='TotalBalanceScreen' />
        </View>
        <View style={{top:-15}}>
        <Navbar/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white'
  },

})

export default RealDetails;