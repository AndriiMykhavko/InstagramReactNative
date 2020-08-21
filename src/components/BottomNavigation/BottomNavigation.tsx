import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { UserPhotoSection } from '../UserPhotoSection/UserPhotoSection'
import AddPostModalContainer from '../AddPostModal/AddPostModalContainer'
import { IBottonNavigationProps } from '../../../types'


export default function BottomNavigation(props: IBottonNavigationProps) {
  return (
    <View style={styles.bottomNavigationWrapper}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Main')} activeOpacity={0.6}>
        <FontAwesomeIcon style={styles.homeButton} icon={ faHome } size={ 32 }/>
      </TouchableOpacity>

      <View>
        <AddPostModalContainer />
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} activeOpacity={0.6}>
        <UserPhotoSection userPhoto={props.userPhoto} ownerIconOutline={styles.ownerIconOutline}/>
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
  },
  ownerIconOutline: {
    borderColor: '#262626',
    borderWidth: 3
  }
})
