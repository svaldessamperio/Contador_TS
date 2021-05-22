import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function BoxObjectModelScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textBox}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    textBox: {
        fontSize: 20,
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 50,

    },
});
