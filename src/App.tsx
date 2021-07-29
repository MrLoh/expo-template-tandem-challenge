import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}
    >
      <StatusBar style="auto" />
      <Text style={{ fontSize: 20, marginHorizontal: 60, marginBottom: 20, textAlign: 'center' }}>
        Welcome to the Tandem Code Challenge
      </Text>
      <Text>Good luck!</Text>
    </View>
  );
};

export default App;
