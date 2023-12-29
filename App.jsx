import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from "./Navigation/MainNavigation/MainNavigation";
import { useState } from 'react';
import { Animated } from "react-native";
import FreelencerScreens7 from "./Screens/FreelencerScreens7/FreelencerScreens7";


export default function App() {

  const navigation = useState()
  const av = new Animated.Value(0);
  av.addListener(() => { return });
  
  return (
    <View style={styles.container}>
      <MainNavigation />
      {/* <FreelencerAttachfilesScreens/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
