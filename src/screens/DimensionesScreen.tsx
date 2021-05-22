import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'

export default function DimensionesScreen() {
    const { width, height } = useWindowDimensions();
    return (
        <View>
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
        </View>
            <Text style={{ textAlign:'center', fontWeight: 'bold', fontSize: 20 }}>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaNaranja: {
        backgroundColor: 'orange',
    },
    cajaMorada: {
        backgroundColor: 'purple',
        width: '50%',
        height: '50%',
    },

});
