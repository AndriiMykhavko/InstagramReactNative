import React from 'react'
import Post from './Post/Post'
import { IPost } from '../../../types.d'
import { SafeAreaView, FlatList } from 'react-native'
import { IPostsContainerProps, IPostDispatchRedux } from '../../../types'

const Posts: React.FC<IPostsContainerProps & IPostDispatchRedux> = (props) => {
  let postsElements = props.posts.map( (post, index) => 
  <Post likes={post.likes} owner={post.owner} key={index}
        postComments={post.postComments} postID={post.postID} postImg={post.postImg}
        postData={post.postData} uploadTime={post.uploadTime} userID={props.userID}
        likePost={props.likePost} unlikePost={props.unlikePost} ownerImage={post.ownerImage}/> 
  )

  let postsElementsData = props.posts

  const renderItem = ({ item }) => (
    <Post likes={item.likes} owner={item.owner} postComments={item.postComments} 
          postID={item.postID} postImg={item.postImg} postData={item.postData}
          uploadTime={item.uploadTime} userID={props.userID} likePost={props.likePost}
          unlikePost={props.unlikePost} ownerImage={item.ownerImage} />
  )

  return (
    <SafeAreaView >
      <FlatList data={postsElementsData} renderItem={renderItem} keyExtractor={item => item.postID}/>
    </SafeAreaView>
  )
}

export default Posts