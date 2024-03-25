import { View, Text, SafeAreaView, Platform, StyleSheet } from 'react-native';
import React from 'react';
import Main from './Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
