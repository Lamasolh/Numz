import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View }
    from 'react-native';
import { SwipeListView } from
    'react-native-swipe-list-view';
import SMEHeader from '../../../Components/SMEComponents/SMEHeader'
import SMENavbar from '../../../Components/SMEComponents/SMENavbar'
import Buttons from '../../../Components/HomeComponents/GeneralComponents/Inputs/Button/Button';
import BigButton3 from '../../../Components/HomeComponents/GeneralComponents/Inputs/Button/BigButton3';

const LegalDoc = props => {

    // Initialize the state with a list of items 
    state = {
        itemList: [
            { key: '1', description: 'Item 1' },
            { key: '2', description: 'Item 2' },
            { key: '3', description: 'Item 3' },
            { key: '4', description: 'Item 4' },
            { key: '5', description: 'Item 5' },
            { key: '6', description: 'Item 5' },
            { key: '7', description: 'Item 5' },
        ],
    };



    // Function to delete an item from the list 
    deleteItem = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...state.itemList];
        const prevIndex = state.itemList
            .findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setState({ itemList: newData });
    };

    // Function to handle row open event 
    onRowOpen = rowKey => {
        console.log('Opened row with key:', rowKey);
    };

    // Function to render each list item 
    renderItem = rowData => (
        <TouchableOpacity
            // onPress={() => console.log('Item touched')}
            style={styles.itemContainer}
        >
            <TextInput placeholder='Financial Legal DOC' style={{ backgroundColor: 'white', width: '85%', alignItems: 'flex-start', height: 55 }} />


        </TouchableOpacity>
    );

    // Function to render hidden swipe actions 
    renderHiddenItem = (rowData, rowMap) => (
        <View style={styles.hiddenContainer}>
            <TouchableOpacity
                style={[styles.hiddenButton, styles.deleteButton]}
                onPress={() => deleteItem(rowMap, rowData.item.key)}
            >
                <Image source={require('../../../assets/delete.png')} />
            </TouchableOpacity>
        </View>
    );


    return (
      <>
            <View style={styles.container}>

                <SMEHeader title="Legal Documents" navigate="Home" />
                {/* SwipeListView */}

                <SwipeListView
                    data={state.itemList}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={5}
                    rightOpenValue={-150}
                    previewRowKey={'0'}
                    previewOpenValue={40}
                    previewOpenDelay={2000}
                    onRowDidOpen={onRowOpen}
                />
                <BigButton3 title="ADD" />
            </View>
            <SMENavbar />
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',

        paddingHorizontal: 15,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'green',
        margin: 20,
        textAlign: 'center',
    },
    subheading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Dark Gray 
        margin: 10,
        textAlign: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF', // White 
        borderColor: 'rgba(0, 160, 129, 1)', // Lighter Gray 
        borderWidth: 1,
        height: 60,
        width: '100%',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 20,
    },
    itemText: {
        color: '#333', // Dark Gray 
        fontSize: 16,
        fontWeight: 'bold',
    },
    hiddenContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: '#FFF',
        height: 80,
        borderRadius: 20,
    },
    hiddenButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 80,
    },
    deleteButton: {
        borderRadius: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LegalDoc; 