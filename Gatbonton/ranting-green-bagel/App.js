import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
export default function App() {
   const [goal, setGoal] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Prelim  Activity
      </Text>
        <TextInput style={styles.input} placeholder="My Goal"/> 
      <Button title="SUBMIT" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },


});
