import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function PositionScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}> 

            </View>
            <View style={styles.cajaNaranja}>

            </View>
            <View style={styles.cajaVerde}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#28C4D9",
        // justifyContent: "center",
        // alignItems: "center",
    },
    cajaMorada: {
        backgroundColor: "#8129d9",
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: "white",
        // top: 20,
        position: "absolute",
        right: 0,

    },
    cajaNaranja: {
        backgroundColor: "#e06602",
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        right: 0,
        bottom: 0,
    },
    cajaVerde: {
        backgroundColor: "#0de002",
        // height: 100,
        // width: 100,
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        left: 0,
        top: 0,
        ...StyleSheet.absoluteFillObject
    },
});


