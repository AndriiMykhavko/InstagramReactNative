import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface IProps{
  title: string,
  onPress: any,
  backgroundColor: string
}

export const SignButtons = ({ onPress, title, backgroundColor }: IProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.SignInButtons, backgroundColor && { backgroundColor }]} activeOpacity={0.6}>
      <Text style={styles.SignInButtonsText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  SignInButtons: {
    backgroundColor: "#0095F6",
    padding: 10,
    borderRadius: 3,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  SignInButtonsText: {
    color: '#fff',
    fontFamily: 'Rowdies',
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 17
  }
})
