import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import NoteListItem from '../components/NoteListItem';

const data = [
  { id: '1', title: 'Erste Notiz' },
  { id: '2', title: 'Andere Notiz' },
  { id: '3', title: 'Noch eine Notiz' },
];

export default function Home({ navigation }) {
  const [notes, setNotes] = useState(data);

  function deleteNote(id) {
    let newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={notes}
        renderItem={({ item }) => (
          <NoteListItem
            title={item.title}
            onPress={() =>
              navigation.navigate('Details', { id: item.id })
            }
            onDelete={() => deleteNote(item.id)}
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
