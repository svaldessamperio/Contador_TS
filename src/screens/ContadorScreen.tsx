import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

export default function ContadorScreen() {

    const [cont, setCont] = useState(10);

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainText}>Contador: {cont}</Text>
            {/* <Button
                title='Sumar'
                onPress={() => setCont(cont + 1)}
            /> */}
            <Fab 
                title = '+'
                onPress = {() => setCont(cont + 1)}
            />
            <Fab 
                title = '-'
                position='bl'
                onPress = {() => setCont(cont - 1)}
            />            

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
    },
    mainText: {
        textAlign: 'center', 
        fontSize: 45,
        // position: 'relative', valor por defecto en react-native para todos los componentes
        top: -15,
    },
});