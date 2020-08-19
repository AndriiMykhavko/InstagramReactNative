import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { UserPhotoSection } from '../../../../UserPhotoSection/UserPhotoSection'

export interface IComment{
  comment: string,
  owner: string,
  ownerImage: string
}

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

const styles = StyleSheet.create({
  commentWrapper: {
    marginBottom: 20,
    flexDirection: 'row'
  },
  commentTextWrapper: {
    paddingTop: 10,
    marginLeft: 10
  },
  commentText: {
    fontFamily: 'Karla-Regular'
  },
  commentOwner: {
    fontWeight: 'bold',
    marginLeft: 15
  }
})
