import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function NoteListItem({ title }) {
  return (
    <Text style={{ fontSize: 42, fontWeight: '100' }}>{title}</Text>
  );
}
