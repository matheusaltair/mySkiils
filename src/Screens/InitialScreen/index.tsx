import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
import Button from '../../components/Button';

const InitialScreen = () => {
  const { navigate } = useNavigation()
  const [name, setName] = useState('')

  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.centeredView}>
          <View>
            <View style={styles.centeredText}>
              <Text style={styles.H1}>Welcome, enter your name</Text>
            </View>
            <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='Pease enter your name' />
          </View>
          <Button text='Confirm' onPress={() => navigate('Home', { name: name })} />
        </View>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#121015'
  },
  H1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginHorizontal: 28
  },
  centeredText: {
    alignItems: 'center'
  },
  input: {
    borderRadius: 10,
    marginTop: 40,
    paddingHorizontal: 13,
    marginHorizontal: 20,
    backgroundColor: '#1F1E25'
  },
});

export default InitialScreen;
