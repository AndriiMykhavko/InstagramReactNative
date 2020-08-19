import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'
import { likePost, unlikePost } from '../../redux/posts/actions'
import { IPost } from './Post/Post'

interface IReduxState{
  posts: IPost[],
  userID: string,
}

interface IDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

class PostsContainer extends Component<IReduxState & IDispatchRedux>{

  likePost = (postID: string, userID: string) => {
    this.props.likePost(postID, userID)
  }
  unlikePost = (postID: string, userID: string) => {
    this.props.unlikePost(postID, userID)
  }

  render() {
    return (
      <Posts posts={this.props.posts} userID={this.props.userID} likePost={this.likePost} unlikePost={this.unlikePost} />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    posts: state.postsPage.posts,
    userID: state.auth.userID
  }
}

const mapDispatchToProps = {
  likePost,
  unlikePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)