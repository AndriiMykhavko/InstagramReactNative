import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import Comment from './Comment/Comment'
import { ICommentsSectionProps, IComment } from '../../../../../types'
import styles from './Styles'


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


export default CommentsSection