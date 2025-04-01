import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function UserScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Página do Usuário</Text>
        <Image style={styles.userImage} source={require('../assets/img/user.jpg')} />
        <Text style={styles.info}>Nome: Ana Julia</Text>
        <Text style={styles.info}>Email: ana.julia@gmail.com</Text>
        <Text style={styles.info}>Turma: TDS1</Text>
        <Text style={styles.info}>Linguagens:</Text>
        <View style={styles.languagesContainer}>
          <View style={styles.languageRow}>
            <Image style={styles.languageImage} source={require('../assets/img/css.png')} />
            <Image style={styles.languageImage} source={require('../assets/img/git.png')} />
            <Image style={styles.languageImage} source={require('../assets/img/html.png')} />
            <Image style={styles.languageImage} source={require('../assets/img/js.png')} />
          </View>
          <View style={styles.languageRow}>
            <Image style={styles.languageImage} source={require('../assets/img/nextjs.png')} />
            <Image style={styles.languageImage} source={require('../assets/img/nodejs.png')} />
            <Image style={styles.languageImage} source={require('../assets/img/postgree.png')} />
            <Image style={styles.languageImage} source={require('../assets/img/postman.png')} />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: '#ffb5ff' }, 
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  photo: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
  button: { width: '80%', padding: 10, backgroundColor: '#e357e0', alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16 },
  languagesContainer: { marginTop: 20, marginBottom: 20 },
  languageRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  languageImage: { width: 50, height: 50, marginHorizontal: 10 },
  userImage: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
});
