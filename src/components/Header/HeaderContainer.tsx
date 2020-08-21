import React, { Component } from 'react'
import Header from './Header'
import { logout } from '../../redux/auth/action'
import { connect } from 'react-redux'
import { IHeaderProps } from '../../../types'


class HeaderContainer extends Component<IHeaderProps> {
  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <Header logout={this.logout}/>
    )
  }
}

const masDispatchToProps: IHeaderProps = {
  logout
}

export default connect(null, masDispatchToProps)(HeaderContainer)