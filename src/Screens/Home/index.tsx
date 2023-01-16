import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert
} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import skillsImage from '../../assets/images/skillsImage.png';
import { FlatList } from 'react-native-gesture-handler';

interface SkillData {
  id: string,
  name: string
}

const Home = ({ route }: any) => {
  console.log(route)
  const { name } = route.params
  const [newSkills, setNewSkills] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [noSkills, setNoSkills] = useState(true)
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const currentTime = new Date().getDate()

    if (currentTime < 12) {
      setGreeting('Good Morning')
    }
    else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good Night')
    }
  }, []);

  const handleAddSkills = () => {
    setNoSkills(false)

    const data = {
      id: String(new Date().getTime()),
      name: newSkills
    }

    setMySkills([...mySkills, data])
  }

  const handleRemoveSkill = (id: string) => {
    Alert.alert('Remove', 'Are you sure you want to remove the Skill?', [
      {
        text: 'No',
        onPress: () => console.log('no'),
        style: 'cancel',
      },
      {
        text: 'Yes', onPress: () => setMySkills(mySkills.filter(
          skill => skill.id !== id
        ))
      },
    ]);

  }

  return (
    <>
      <SafeAreaView style={styles.background}>
        <View>
          <Text style={styles.H1}>Welcome, {name}</Text>
          <Text style={styles.H4}>{greeting}</Text>
          <TextInput value={newSkills} onChangeText={setNewSkills} style={styles.input} placeholder='Enter a Skill' />
          <Button title='Add' onPress={handleAddSkills} />

          <Text style={styles.H3}>My Skills</Text>
          {!noSkills ?
            <FlatList
              showsVerticalScrollIndicator={false}
              data={mySkills}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Card skills={item.name} onLongPress={() => handleRemoveSkill(item.id)} />
              )}
            />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    color: 'white'
  },
  H2: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'white'
  },
  H3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
    marginLeft: 20,
    color: 'white'
  },
  H4: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 20,
    color: 'grey'
  },
  input: {
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 13,
    backgroundColor: '#1F1E25'
  },
  noSkill: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 130,
    height: 130,
    marginLeft: 30
  }
});

export default Home;
