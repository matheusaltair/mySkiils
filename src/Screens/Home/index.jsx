import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Home = () => {
  const [newSkills, setNewSkills] = useState('')
  const [mySkills, setMySkills] = useState([])

  const handleAddSkills = () => {
    setMySkills([...mySkills, newSkills])
  }

  return (
    <>
      <SafeAreaView
        style={backgroundStyle}>
        <View
          style={styles.background}>
          <Text style={styles.H1}>Welcome, Matheus</Text>
          <TextInput value={newSkills} onChangeText={setNewSkills} style={styles.input} placeholder='Digite uma Skill' />
          <Button text='Add' onPress={handleAddSkills} />

          <Text style={styles.H2}>My Skills</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {mySkills.map(skills => (
              <Card key={skills} skills={skills} />
            ))
            }
          </ScrollView>
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
    marginTop: 30,
    marginLeft: 20,
    color: 'white'
  },
  H2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
    marginLeft: 20,
    color: 'white'
  },
  textButton: {
    fontSize: 13,
    color: 'white'
  },
  input: {
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 13,
    backgroundColor: '#1F1E25'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: '#A370F7'
  },
});

export default Home;
