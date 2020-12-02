import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import * as Icon from '@expo/vector-icons';

export default function NoteListItem({ title, onPress, onDelete }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Pressable onPress={onDelete}>
        <Icon.MaterialCommunityIcons
          name="delete"
          size={20}
          color="lightgray"
        />
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 42,
    fontWeight: '100',
  },
});
