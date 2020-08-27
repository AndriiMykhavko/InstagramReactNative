import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { UserPhotoSection } from '../../UserPhotoSection/UserPhotoSection'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import FitImage from 'react-native-fit-image'
import moment from "moment";
import PostCommentsModal from './PostCommentsModal'
import CommentsSectionContainer from './CommentsSection/CommentsSectionContainer'
import {  IPost, IPostDispatchRedux } from '../../../../types'
import styles from './Styles'


const Post:React.FC<IPost & IPostDispatchRedux> = (props) => {

  const renderHeartButton = (like: boolean) => {
    return(
      <TouchableOpacity onPress={() => like ? unlikePost(props.postID, props.userID) :  likePost(props.postID, props.userID)}>
            <FontAwesomeIcon style={ like ? styles.likesButtonActive : styles.likesButton} icon={ like ? faHeart : faHeartRegular } size={ 24 }/>
      </TouchableOpacity>
    )
 }

  const likePost = (postID: string, userID: string) => {
    props.likePost(postID, userID)
  }
  const unlikePost = (postID: string, userID: string) => {
    props.unlikePost(postID, userID)
  }

  const postDate = moment(props.uploadTime).fromNow()

  return (
    <View style={styles.postWrapper}>

      <View style={styles.postOwnerInfo}>
        <UserPhotoSection userPhoto={props.ownerImage} />
        <View style={styles.ownerNameWrapper}>
          <Text style={styles.ownerNameText}>{props.owner}</Text>
        </View>
      </View>

      <View style={styles.postPhotoWrapper}>
        <FitImage
          source={{ uri: props.postImg }}
          />
      </View>

      <View style={styles.postButtons}>

        <View style={styles.likesButtonWrapper}>
          {
            renderHeartButton(props.likes.find((item) => {
              return item === props.userID
              }) === props.userID)
          }
        </View>

        <View style={styles.likesCountWrapper}>
          <Text style={styles.likesCount}>{props.likes.length} likes</Text>
        </View>

        <View >
          <Text>
            {postDate}
          </Text>
        </View>

      </View>

      { props.postComments.length > 3
        && 
        <View style={styles.postCommentModal}>
          <PostCommentsModal postComments={props.postComments} />
        </View>
      }

      <View>
        <Text style={styles.postText}> <Text style={styles.ownerNameText}>{props.owner}</Text> {props.postData} </Text>
      </View>


      <CommentsSectionContainer postComments={props.postComments} postID={props.postID} />

    </View>
  )
}


export default Post