import React, { Component } from 'react'
import Header from './Header'
import { logout } from '../../redux/auth/action'
import { connect } from 'react-redux'
// import { resetPosts } from '../../redux/posts/actions'

interface IReduxDispatch{
  logout: () => void,
  // resetPosts: () => void
}

class HeaderContainer extends Component<IReduxDispatch> {
  logout = () => {
    this.props.logout()
    // this.props.resetPosts()
  }

  render() {
    return (
      <Header logout={this.logout}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}
const masDispatchToProps: IReduxDispatch = {
  logout,
  // resetPosts
}

export default connect(mapStateToProps, masDispatchToProps)(HeaderContainer)