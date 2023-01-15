import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Card = ({ skills }) => {

  return (
    <View style={styles.skills}>
      <Text style={styles.H1}>{skills}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  H1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  skills: {
    backgroundColor: '#1F1E25',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default Card;