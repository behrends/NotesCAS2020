import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NoteListItem from '../components/NoteListItem';

const data = [
  { id: '1', title: 'Erste Notiz' },
  { id: '2', title: 'Andere Notiz' },
  { id: '3', title: 'Noch eine Notiz' },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            onPress={() =>
              navigation.navigate('Details', { id: item.id })
            }
          />
        )}
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
  list: {
    width: '100%',
    padding: 10,
  },
});
