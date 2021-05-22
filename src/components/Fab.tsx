import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'bl' | 'br';
    onPress: () => void;
}

export default function Fab({ title, position = 'br', onPress }: Props) {


    const ios = () => {
        return (
            <TouchableOpacity
                onPressIn={ onPress }
                style={ [styles.TouchFAB, position === 'br'? styles.TouchFABR : styles.TouchFABL] }
            >
                <View 
                    style={styles.viewFAB}> 
                    <Text 
                        style={styles.txtFAB}
                    >
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {

        return (
            <View style={ [styles.TouchFAB, position === 'br'? styles.TouchFABR : styles.TouchFABL]}
            >
            <TouchableNativeFeedback 
                onPressIn={ onPress }
                background={TouchableNativeFeedback.Ripple('black',true,35)}
            >
                <View 
                    style={styles.viewFAB}> 
                    <Text 
                        style={styles.txtFAB}
                    >
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        )
    }

    return (
        Platform.OS === 'ios' ? ios() : android()
    )
}

const styles = StyleSheet.create({

    TouchFABR: {
        right: 25,
    },
    TouchFABL: {
        left: 25,
    },
    TouchFAB: {
        position: 'absolute',
        bottom: 25,
    },
    viewFAB: {
        backgroundColor: '#5856D6',
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    txtFAB: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
