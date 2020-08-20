import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface IProps{
  userPhoto: string,
  ownerImageWrapper?: any,
  ownerIconOutline?: any,
  ownerImage?: any,
  ownerIconWrapper?: any,
  iconSize?: number
}

export const UserPhotoSection = (props: IProps) => {
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

const styles = StyleSheet.create({
  ownerIconOutline: {
    borderColor: 'darkgrey',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 42,
    padding: 5,
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ownerImageWrapper: {
    height: 32,
    width: 32
  },
  ownerImage: {
      width: '100%',
      height: '100%',
      borderRadius: 20
  },
  ownerIconWrapper: {
    backgroundColor: '#DBDBDB',
    borderRadius: 20,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ownerIcon: {
    color: '#fff'
  }
})