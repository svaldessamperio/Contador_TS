import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function FlexScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#39B2E6',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30, 
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30, 
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30, 
    },
});
