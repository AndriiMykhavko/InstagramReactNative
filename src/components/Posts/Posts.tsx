import React from 'react'
import Post, { IPost } from './Post/Post'
import { SafeAreaView, FlatList } from 'react-native'

interface IProps{
  posts: IPost[],
  userID: string,
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

export default function Posts(props: IProps) {
  let postsElements = props.posts.map( (post: IPost, index) => 
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
