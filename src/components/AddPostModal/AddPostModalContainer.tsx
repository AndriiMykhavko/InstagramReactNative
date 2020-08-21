import React from'react'
import AddPostModal from './AddPostModal'
import { connect } from 'react-redux'
import { addPostIntoDB } from '../../redux/posts/actions'
import { IAddPostModalDispathRedux, IAddPostModalProps } from '../../../types'


class AddPostModalContainer extends React.Component<IAddPostModalProps & IAddPostModalDispathRedux> {
  addPostIntoDB = (userName: string, postImage: any, postData: string, userID: string, userPhoto: string, imageName: string) => {
    this.props.addPostIntoDB(userName, postImage, postData, userID, userPhoto, imageName)
  }
  
  render() {
    return(
      <AddPostModal  name={this.props.name} userPhoto={this.props.userPhoto} userID={this.props.userID} addPostIntoDB={this.addPostIntoDB}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.auth.name,
    userPhoto: state.auth.userPhoto,
    userID: state.auth.userID
  }
}

const mapDispatchToProps: IAddPostModalDispathRedux = {
  addPostIntoDB
}

export default connect (mapStateToProps, mapDispatchToProps)(AddPostModalContainer)