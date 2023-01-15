import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

const Button = ({ onPress, text }) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 13,
    color: 'white'
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
})


export default Button;