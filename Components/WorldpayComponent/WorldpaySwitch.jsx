import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import BigButtons from '../HomeComponents/GeneralComponents/Inputs/Button/BigButton';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';
const WPaycard = props => {
    //const navigation=useNavigation();

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <>
       
        
      <View style={styles.container}>

        <View>

            <Text style={{color:"#737373"}}>{props.switch1}</Text>
        </View>

        <View style={{}}>
        <Switch     
        style={{ transform: "scale(1.2)"}}
        trackColor={{false: '#00A081', true: '#D1D1D1'}}
        thumbColor={isEnabled ? 'white' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />

        </View>
    
     </View>
     


     <View style={styles.container}>

        <View>

            <Text style={{color:"#737373"}}>{props.switch2}</Text>
        </View>

        <View style={{}}>
        <Switch     
        style={{ transform: "scale(1.2)"}}
        trackColor={{false: '#00A081', true: '#D1D1D1'}}
        thumbColor={isEnabled2 ? 'white' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
        />

        </View>
    
     </View>


    </>



  );
}


const styles = StyleSheet.create({

  container: {
  
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"

  },
  
 

})

export default WPaycard;