import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { IHeaderProps } from '../../../types'


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

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#DBDBDB',
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'BalooDa2-Bold'
  },
  logOutButton: {
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  logOutText: {
    color: '#fff',
    fontFamily: 'Sora-Regular'
  }
})