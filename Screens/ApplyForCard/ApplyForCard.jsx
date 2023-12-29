import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SMENavbar from "../../Components/SMEComponents/SMENavbar";
import ApplyForCardComponents from "../../Components/ApplyForCardComponents/ApplyForCardComponents";
const ApplyCards = props => {
    return (
        <View>
            <ScrollView>

                <View style={styles.container}>

                    <ApplyForCardComponents switch1="Domiciliation Salary" switch2="SMS Serivce"/>
                 
                </View>
                
          
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 5,
      
    }
})

export default ApplyCards;