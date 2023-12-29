import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '../../Components/HomeComponents/Cards';
import SMENavbar from '../../Components/SMEComponents/SMENavbar';

const Home = props => {
    return (
        <View>
            <View style={styles.container}>
                <Card />
            </View>
            <View style={{ marginTop: 30 }}>
                <SMENavbar />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 690,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default Home;