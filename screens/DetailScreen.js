import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useIsFocused } from '@react-navigation/native';

const getData = async (key) => {
  return await SecureStore.getItemAsync(key);
};

export default function DetailScreen({ navigation }) {
  const [savedText, setSavedText] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getData('texto').then((value) => {
        setSavedText(value);
      });
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>

      <Text style={styles.redText}>
        Sem persistência: {savedText ? savedText : 'Nenhum texto salvo'}
      </Text>

      <Text style={styles.greenText}>
        Persistência: {savedText ? savedText : 'Nenhum texto salvo'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#ffb5ff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  redText: { color: 'red', fontSize: 16, marginBottom: 5 },
  greenText: { color: 'green', fontSize: 16, marginBottom: 10 },
  backLink: { fontSize: 16, color: '#e357e0', marginBottom: 10 },
  button: { width: '80%', padding: 10, backgroundColor: '#e357e0', alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});
