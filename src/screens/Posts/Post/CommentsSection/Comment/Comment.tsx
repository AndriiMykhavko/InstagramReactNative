import React from 'react'
import { View, Text } from 'react-native'
import { UserPhotoSection } from '../../../../../components/UserPhotoSection/UserPhotoSection'
import { IComment } from '../../../../../../types'
import styles from './Styles'


export default function Comment(props: IComment): JSX.Element {
  return (
    <View style={styles.commentWrapper}>

      <UserPhotoSection userPhoto={props.ownerImage}/>

      <View style={styles.commentTextWrapper}>
        <Text style={styles.commentText}> <Text style={styles.commentOwner}>{props.owner}</Text> {props.comment} </Text>
      </View>
      
    </View>
  )
}
