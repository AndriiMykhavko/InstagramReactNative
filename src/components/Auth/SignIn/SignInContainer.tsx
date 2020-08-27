import React, { Component } from 'react'
import { login, googleAuthentication } from '../../../redux/auth/action'
import SignIn from './SignIn'
import { ISignInDispatchRedux, IAuthProps } from '../../../../types'
import { connect } from 'react-redux'

class SignInContainer extends Component<IAuthProps & ISignInDispatchRedux> {

  login = (email: string, password: string) => {
    this.props.login(email, password)
  }

  googleAuthentication = () => {
    googleAuthentication()
  } 

  render() {
    return (
      <SignIn navigation={this.props.navigation} login={this.login} googleAuthentication={this.googleAuthentication}/>
    )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(SignInContainer)