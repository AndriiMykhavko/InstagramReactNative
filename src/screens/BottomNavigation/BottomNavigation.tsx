import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { UserPhotoSection } from '../../components/UserPhotoSection/UserPhotoSection'
import AddPostModalContainer from '../AddPostModal/AddPostModalContainer'
import { IBottonNavigationProps } from '../../../types'
import styles from './Styles'


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