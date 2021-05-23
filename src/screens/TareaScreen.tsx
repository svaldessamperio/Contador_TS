import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default class TareaScreen extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.cajaMorada}/>
                <View style={styles.cajaNaranja}/>
                <View style={styles.cajaAzul}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#28425b',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#7b07bf',
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#f29c13',
    },
    cajaAzul: {
        alignSelf: 'stretch',
        // width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#2f91ed',
    },
});
