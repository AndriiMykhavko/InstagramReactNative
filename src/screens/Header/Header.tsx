import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { IHeaderProps } from '../../../types'
import styles from './Styles'


export default function Header(props: IHeaderProps) {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>Instagram</Text>
      <TouchableOpacity style={styles.logOutButton} onPress={props.logout}>
        <Text style={styles.logOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

