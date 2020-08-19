import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { UserPhotoSection } from '../../UserPhotoSection/UserPhotoSection'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import CommentsSection from './CommentsSection/CommentsSection'
import { IComment } from './CommentsSection/Comment/Comment'
import FitImage from 'react-native-fit-image'
import moment from "moment";
import PostCommentsModal from './PostCommentsModal'

export interface IPost{
  likes: string[],
  owner: string,
  postComments: IComment[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: any,
  userID: string,
  ownerImage: string,
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

export default function Post(props: IPost): JSX.Element {

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
        {/* <Image resizeMode={'contain'} style={styles.postPhoto} source={{uri: props.postImg}} /> */}
        <FitImage
          source={{ uri: props.postImg }}
          />
      </View>

      <View style={styles.postButtons}>

        <View style={styles.likesButtonWrapper}>
          {props.likes.length === 0 ?
          <TouchableOpacity onPress={() => likePost(props.postID, props.userID)}>
            <FontAwesomeIcon style={styles.likesButton} icon={ faHeartRegular } size={ 24 }/>
          </TouchableOpacity>
            : 
            props.likes.find((item) => {
            return item === props.userID
            }) === props.userID ? 
            <TouchableOpacity onPress={() => unlikePost(props.postID, props.userID)}>
              <FontAwesomeIcon style={styles.likesButtonActive} icon={ faHeart } size={ 24 }/>
            </TouchableOpacity>
            : 
            <TouchableOpacity onPress={() => likePost(props.postID, props.userID)}>
              <FontAwesomeIcon style={styles.likesButton} icon={ faHeartRegular } size={ 24 }/>
            </TouchableOpacity>
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

      <CommentsSection postComments={props.postComments} postID={props.postID} owner={props.owner} />

    </View>
  )
}

const styles = StyleSheet.create({
  postWrapper: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#fff',
    marginVertical: 15,
  },
  postOwnerInfo: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ownerNameWrapper: {
    marginLeft: 15
  },
  ownerNameText: {
    color: '#262626',
    fontFamily: 'NotoSansKR-Medium',
    fontWeight: "bold"
  },
  postPhotoWrapper: {
    justifyContent: 'center'
  },
  postButtons: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'column'
  },
  likesButtonWrapper: {
    width: 24
  },
  likesButton: {
    color: '#262626'
  },
  likesButtonActive: {
    color: '#ED4956'
  },
  likesCountWrapper: {
    marginTop: 10,
  },
  likesCount: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'NotoSansKR-Medium'
  },
  postData: {
    fontSize: 14
  },
  postCommentModal: {

  },
  postText: {
    fontFamily: 'Karla-Regular',
    paddingHorizontal: 15
  }
})