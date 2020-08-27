import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ISignInButtonProps } from '../../../types'
import styles from './SignInButtonStyles'


export const SignButtons = ({ onPress, title, backgroundColor }: ISignInButtonProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.SignInButtons, backgroundColor && { backgroundColor }]} activeOpacity={0.6}>
      <Text style={styles.SignInButtonsText}>{title}</Text>
    </TouchableOpacity>
  )
}