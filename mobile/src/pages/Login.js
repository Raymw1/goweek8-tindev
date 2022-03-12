import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  async function handleLogin() {
    if (!user) return;
    const {
      data: {_id},
    } = await api.post('/devs', {username: user});
    navigation.navigate('Main', {_id});
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <Image source={logo} alt="Tindev" />
      <TextInput
        style={styles.input}
        placeholder="Type you GitHub user"
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="send"
        onSubmitEditing={handleLogin}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#DF4723',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
