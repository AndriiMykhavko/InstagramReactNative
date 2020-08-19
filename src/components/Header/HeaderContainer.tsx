import React, { Component } from 'react'
import Header from './Header'
import { logout } from '../../redux/auth/action'
import { connect } from 'react-redux'

interface IReduxDispatch{
  logout: () => void
}

class HeaderContainer extends Component<IReduxDispatch> {
  logout = () => {
    this.props.logout()
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
  logout
}

export default connect(mapStateToProps, masDispatchToProps)(HeaderContainer)