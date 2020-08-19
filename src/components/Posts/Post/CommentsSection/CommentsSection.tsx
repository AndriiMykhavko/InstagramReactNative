import React from 'react'
import { View, StyleSheet } from 'react-native'
import Comment, { IComment } from './Comment/Comment'
import AddNewCommentFormContainer from './AddNewCommentForm/AddNewCommentFormContainer'

interface IProps{
  postComments: IComment[],
  postID: string,
  owner: string,
}

export default function CommentsSection(props: IProps): JSX.Element {

  let postComments = props.postComments.slice(-3).reverse().map( (commentData: IComment, index) => 
    <Comment  key={index} owner={commentData.owner} ownerImage={commentData.ownerImage} comment={commentData.comment}/>
  )

  return (
    <View style={styles.addCommentSection}>

      <View>
        <AddNewCommentFormContainer postID={props.postID}/>
      </View>

      <View style={styles.commentWrapper}>
        {postComments}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  addCommentSection: {
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    borderStyle: 'solid'
  },
  commentWrapper: {
    marginBottom: 15,
    marginTop: 5,
    marginHorizontal: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    borderStyle: 'solid'
  }
})
