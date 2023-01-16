import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

const Button = ({ onPress, text }: any) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#A370F7',
    marginHorizontal: 20,
  },
})


export default Button;