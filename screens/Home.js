import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Meine Notizen</Text>
      <Button
        title="Notiz 1"
        onPress={() => navigation.navigate('Details', { id: 1 })}
      />
      <Button
        title="Notiz 2"
        onPress={() => navigation.navigate('Details', { id: 2 })}
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
