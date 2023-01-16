import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {

  return (
    <TouchableOpacity style={styles.button}
      {...rest}>
      <Text style={styles.textButton}>{title}</Text>
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