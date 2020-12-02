import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Details({ navigation, route }) {
  const id = route.params?.id;
  return (
    <View style={styles.container}>
      <Text>{'DETAILANSICHT ' + id}</Text>
      <Button
        title="Bearbeiten"
        onPress={() => navigation.navigate('Edit')}
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
