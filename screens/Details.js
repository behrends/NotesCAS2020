import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text>DETAILANSICHT</Text>
      <Button
        title="Bearbeiten"
        onPress={() => alert('Gehe zu Edit Screen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
