import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Edit() {
  const [input, setInput] = useState(title);

  return (
    <View style={styles.container}>
      <Text>EDIT</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button
        title="Speichern"
        onPress={() => alert('TODO: navigate to Home')}
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
  input: {
    padding: 15,
    borderWidth: 1,
    width: '80%',
  },
});
