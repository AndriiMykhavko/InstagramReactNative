import React, { Component } from 'react'
import { connect } from 'react-redux'
import {reset} from 'redux-form'
import { addCommetnIntoDB } from '../../../../../redux/posts/actions'
import AddNewCommentForm from './AddNewCommentForm'

interface IProps{
  postID: string,
  owner: string,
  ownerImage: string
}

interface IDispatchRedux{
  addNewComment: (postID: string, owner: string, ownerImage: string, formData: any) => void
}

export class AddNewCommentFormContainer extends Component<IProps & IDispatchRedux> {

  addNewComment = (newCommentData: string) => {
    this.props.addNewComment(this.props.postID, this.props.owner, this.props.ownerImage, newCommentData)
  }

  render() {
    return (
      <AddNewCommentForm addNewComment={this.addNewComment} />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    owner: state.auth.name,
    ownerImage: state.auth.userPhoto
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    addNewComment: (postID: string, owner: string, ownerImage: string, newCommentText: string) => {
      dispatch(addCommetnIntoDB(postID, owner, ownerImage, newCommentText));
      dispatch(reset('addPostCommentForm'));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCommentFormContainer)
