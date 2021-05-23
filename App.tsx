import React from 'react';
import { SafeAreaView } from 'react-native';
import ContadorScreen from './src/screens/ContadorScreen';
import HolaMundoScreen from './src/screens/HolaMundoScreen';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import DimensionesScreen from './src/screens/DimensionesScreen';
import PositionScreen from './src/screens/PositionScreen';
import FlexScreen from './src/screens/FlexScreen';
import TareaScreen from './src/screens/TareaScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425b'}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>
    </SafeAreaView>
  )
}


