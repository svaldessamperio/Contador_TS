import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function HolaMundoScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>HOLA MUNDO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 40,
  },
});
