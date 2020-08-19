import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { UserPhotoSection } from '../UserPhotoSection/UserPhotoSection'

interface IProps{
  navigation: any,
  userPhoto: string
}

export default function BottomNavigation(props: IProps) {
  return (
    <View style={styles.bottomNavigationWrapper}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Main')} activeOpacity={0.6}>
        <FontAwesomeIcon style={styles.homeButton} icon={ faHome } size={ 32 }/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} activeOpacity={0.6}>
        <UserPhotoSection userPhoto={props.userPhoto} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNavigationWrapper: {
    backgroundColor: '#fff',
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderColor: '#DBDBDB',
    borderTopWidth: 2,
    alignItems: 'center'
  },
  homeButton: {
    color: '#262626'
  }
})
