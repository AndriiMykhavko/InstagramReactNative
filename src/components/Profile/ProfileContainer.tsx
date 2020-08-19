import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { IPost } from '../Posts/Post/Post'
import { likePost, unlikePost } from '../../redux/posts/actions'

export interface IReduxState{
  userName: string,
  userPhoto: string,
  userID: string,
  posts: IPost[],
  isAuth: boolean,
  navigation: any
}

interface IDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

class ProfileContainer extends React.Component<IReduxState & IDispatchRedux>{

  likePost = (postID: string, userID: string) => {
    this.props.likePost(postID, userID)
  }
  unlikePost = (postID: string, userID: string) => {
    this.props.unlikePost(postID, userID)
  }

  render() {
    return(
      <>
      <Profile posts={this.props.posts} userName={this.props.userName} userPhoto={this.props.userPhoto} 
      userID={this.props.userID} likePost={this.likePost} unlikePost ={this.unlikePost}
      isAuth={this.props.isAuth} navigation={this.props.navigation}/>
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    userName: state.auth.name,
    userPhoto: state.auth.userPhoto,
    posts: state.postsPage.posts,
    userID: state.auth.userID,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps: IDispatchRedux = {
  likePost,
  unlikePost
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)