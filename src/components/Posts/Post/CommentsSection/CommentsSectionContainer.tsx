import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCommetnIntoDB } from '../../../../redux/posts/actions'
import CommentsSection from './CommentsSection'
import { ICommentsSectionContainerProps, ICommentsSectionContainerDispatchRedux } from '../../../../../types'


export class CommentsSectionContainer extends Component<ICommentsSectionContainerProps & ICommentsSectionContainerDispatchRedux> {

  addCommetnIntoDB = (newCommentData: string) => {
    this.props.addCommetnIntoDB(this.props.postID, this.props.owner, this.props.ownerImage, newCommentData)
  }


  render() {
    return (
      <CommentsSection postComments={this.props.postComments} postID={this.props.postID} owner={this.props.owner} addCommetnIntoDB={this.addCommetnIntoDB}/>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ownerImage: state.auth.userPhoto
})

const mapDispatchToProps: ICommentsSectionContainerDispatchRedux = {
  addCommetnIntoDB
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSectionContainer)
