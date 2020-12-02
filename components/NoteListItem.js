import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function NoteListItem({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ fontSize: 42, fontWeight: '100' }}>{title}</Text>
    </Pressable>
  );
}
