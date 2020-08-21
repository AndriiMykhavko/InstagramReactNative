import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import Comment from './Comment/Comment'
import { ICommentsSectionProps, IComment } from '../../../../../types'


const CommentsSection: React.FC<ICommentsSectionProps> = (props) => {

  let postComments = props.postComments.slice(-3).reverse().map( (commentData: IComment, index) => 
    <Comment  key={index} owner={commentData.owner} ownerImage={commentData.ownerImage} comment={commentData.comment}/>
  )

  const [commnetData, onChangeCommentText] = React.useState('')

  const addCommetn = (newCommentText: string) => {
    props.addCommetnIntoDB(newCommentText)
    onChangeCommentText('')
  }

  return (
    <View style={styles.addCommentSection}>

      <View style={styles.addCommentWrapper}>

        <View style={styles.textInput}>
          <TextInput multiline={true} placeholder={'Add your comment...'} value={commnetData} onChangeText={text => onChangeCommentText(text)}/>
        </View>

        <TouchableOpacity style={styles.publishButtonWrapper} disabled={!commnetData} onPress={() => addCommetn(commnetData)}>
          <Text style={[styles.publishButtonText, !commnetData ? styles.disabledButton : styles.activeButton]}>Publish</Text>
        </TouchableOpacity>

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
  },
  addCommentWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 200
  },
  textInput: {
    width: '85%'
  },
  publishButtonWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 10
  },
  publishButtonText: {
    fontWeight: 'bold'
  },
  disabledButton: {
    color: '#9cd6fc'
  },
  activeButton: {
    color: '#0F9BF7'
  }
})


export default CommentsSection