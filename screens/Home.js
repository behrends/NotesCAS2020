import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Meine Notizen</Text>
      <Button
        title="Notiz 1"
        onPress={() => alert('Gehe zu Notiz 1')}
      />
      <Button
        title="Notiz 2"
        onPress={() => alert('Gehe zu Notiz 2')}
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
