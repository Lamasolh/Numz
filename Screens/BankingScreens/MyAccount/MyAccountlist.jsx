import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import SMEHeader from '../../../Components/SMEComponents/SMEHeader'
import SMENavbar from '../../../Components/SMEComponents/SMENavbar'

const SMEBody = props => {
  const navigation = useNavigation()
  return (
    <>

      <ScrollView>

        <View style={{
          flexDirection: 'column',
          flex: 1,

        }}>

          <SMEHeader title="Create Account " navigate="page1" />

          <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('CreateA')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/person.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Personal Account</Text>
                </View>

              </View>

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Venture')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/sub.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Sub Account</Text>
                </View>

              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Startup')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/ei5.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Savings Account</Text>
                </View>

              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Contract')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/join.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Joint Account</Text>
                </View>

              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LegalDoc')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/buss.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Business Account</Text>
                </View>

              </View>

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Legal')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/vault.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Vault Account</Text>
                </View>

              </View>

            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Cases')}>



              <View style={styles.list}>

                <View>
                  <Image style={{ marginTop: 15, marginLeft: 15, }}
                    source={require('../../../assets/student.png')}
                  />
                </View>


                <View>

                  <Text style={{ color: "#007961", marginLeft: 15, marginTop: 10, }}>Student Account</Text>
                </View>

              </View>

            </TouchableOpacity>
          </View>
          <View style={styles.smeanimationbottom}>

            <Image style={{}}
              source={require('../../../assets/smeanimation.png')}
            />

          </View>
        </View>
        <SMENavbar />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",

  },

  list: {
    borderBottomWidth: 1,
    borderColor: "#0000001C",
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },

  smeanimationbottom: {

    position: "relative",
    top: "5%",
  }

})

export default SMEBody;