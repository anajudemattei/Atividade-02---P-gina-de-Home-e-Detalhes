import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function UserScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página do Usuário</Text>
      <Image
        style={styles.photo}
        source={{ uri: 'urlfoto' }}/>
      <Text style={styles.info}>Nome: Ana Julia</Text>
      <Text style={styles.info}>Email: ana.julia@gmail.com</Text>
      <Text style={styles.info}>Turma: TDS1</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  photo: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
  button: { width: '80%', padding: 10, backgroundColor: '#e357e0', alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});
