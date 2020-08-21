import React, { Component } from 'react'
import { registration } from '../../../redux/auth/action'
import SignUp from './SignUp'
import { IAuthProps, ISignUpDiapatchRedux } from '../../../../types.d'


export class SignUpContainer extends Component<IAuthProps & ISignUpDiapatchRedux>{

  registration = (name: string, email: string, password: string) => {
    registration(name, email, password)
  }

  render() {
    return (
      <SignUp navigation={this.props.navigation} registration={this.registration}/>
    )
  }
}


export default SignUpContainer