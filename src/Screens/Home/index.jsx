import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import skillsImage from '../../assets/images/skillsImage.png'

const Home = () => {
  const [newSkills, setNewSkills] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [noSkills, setNoSkills] = useState(true)

  const handleAddSkills = () => {
    setNoSkills(false)
    setMySkills([...mySkills, newSkills])
  }

  return (
    <>
      <SafeAreaView style={styles.background}>
        <View>
          <Text style={styles.H1}>Welcome, Matheus</Text>
          <TextInput value={newSkills} onChangeText={setNewSkills} style={styles.input} placeholder='Digite uma Skill' />
          <Button text='Add' onPress={handleAddSkills} />

          <Text style={styles.H3}>My Skills</Text>
          {!noSkills ?
            <ScrollView showsVerticalScrollIndicator={false}>
              {mySkills.map(skills => (
                <Card key={skills} skills={skills} />
              ))
              }
            </ScrollView>
            :
            <View style={styles.noSkill}>
              <Image source={skillsImage} style={styles.image} />
              <Text style={styles.H2}>No skill registered
              </Text>
            </View>
          }

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
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    color: 'white'
  },
  H2: {
    fontFamily: 'PTSansNarrow-Regular',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'white'
  },
  H3: {
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
  noSkill: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 130,
    height: 130
  }
});

export default Home;
