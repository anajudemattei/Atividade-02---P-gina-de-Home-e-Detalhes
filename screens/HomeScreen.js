import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const saveData = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

const getData = async (key) => {
  return await SecureStore.getItemAsync(key);
};

const clearData = async (key) => {
  await SecureStore.deleteItemAsync(key);
};

export default function HomeScreen({ navigation }) {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState(null);
  const [message, setMessage] = useState(''); // Estado para a mensagem de texto salvo

  useEffect(() => {
    getData('texto').then((value) => {
      setSavedText(value);
    });
  }, []);

  const handleSave = async () => {
    if (text.trim() !== '') {
      await saveData('texto', text);
      setSavedText(text); // Atualiza o texto salvo
      setText(''); // Limpa o campo de entrada
      setMessage('Texto salvo com sucesso!'); // Define a mensagem de sucesso
      setTimeout(() => {
        setMessage(''); // Remove a mensagem após 3 segundos
      }, 3000);
    } else {
      alert('Por favor, digite algo antes de salvar.'); // Alerta caso o campo esteja vazio
    }
  };

  const handleClear = () => {
    setText(''); 
    setSavedText(null); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persistência e Navegação</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />

      <Text style={styles.redText}>
        Sem persistência: {savedText ? savedText : 'Nenhum texto salvo'}
      </Text>
      
      <Text style={styles.greenText}>
        Texto persistido: {savedText ? savedText : 'Nenhum texto salvo'}
      </Text>

      {/* Exibe a mensagem se existir */}
      {message !== '' && <Text style={styles.message}>{message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleClear}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detalhes')}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Usuário')}>
        <Text style={styles.buttonText}>Página do Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#ffb5ff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  button: { width: '80%', padding: 10, backgroundColor: '#e357e0', alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16 },
  redText: { color: 'red', fontSize: 16, marginBottom: 5 },
  greenText: { color: 'green', fontSize: 16, marginBottom: 10 },
  message: { color: 'blue', fontSize: 16, marginBottom: 10 }, // Estilo para a mensagem de texto salvo
});
