import React from'react'
import AddPostModal from './AddPostModal'
import { connect } from 'react-redux'
import { addPostIntoDB } from '../../redux/posts/actions'

interface IProps {
  name: string,
  userPhoto: string,
  userID: string
}

interface IDispatchRedux{
  addPostIntoDB: (userName: string, postImage: any, postData: string, userID: string, userPhoto: string) => void
}

class AddPostModalContainer extends React.Component<IProps & IDispatchRedux> {
  addPostIntoDB = (userName: string, postImage: any, postData: string, userID: string, userPhoto: string) => {
    this.props.addPostIntoDB(userName, postImage, postData, userID, userPhoto)
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

const mapDispatchToProps: IDispatchRedux = {
  addPostIntoDB
}

export default connect (mapStateToProps, mapDispatchToProps)(AddPostModalContainer)