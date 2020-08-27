import React from 'react'
import { View, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { IUserPtotoProps } from '../../../types'
import styles from './Styles'

export const UserPhotoSection: React.FC<IUserPtotoProps> = (props) => {
  return(
    <View>
        <View style={[styles.ownerIconOutline, props.ownerIconOutline]}>
          {
            props.userPhoto ? 
              <View style={[styles.ownerImageWrapper, props.ownerImageWrapper ]}>
                <Image style={[styles.ownerImage, props.ownerImage]} source={{uri: props.userPhoto}} />
              </View>
            : 
              <View style={[styles.ownerIconWrapper, props.ownerIconWrapper]}>
                <FontAwesomeIcon style={styles.ownerIcon} icon={ faUser } size={ props.iconSize ? props.iconSize : 24 }/>
              </View> 
          }
        </View>
    </View>
  )
}