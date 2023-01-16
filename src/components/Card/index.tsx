import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CardProps extends TouchableOpacityProps {
  skills: string
}

const Card = ({ skills, ...rest }: CardProps) => {

  return (
    <TouchableOpacity style={styles.skills} {...rest}>
      <Text style={styles.H1}>{skills}</Text>
    </TouchableOpacity>
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