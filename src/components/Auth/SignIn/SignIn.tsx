import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SignButtons } from '../SignButtons';
import { ISignInDispatchRedux, IAuthProps } from '../../../../types';
import SignInForm from './SignInForm';

const SignIn: React.FC<IAuthProps & ISignInDispatchRedux> = (props) => {

  const googleAuth = () => {
    return props.googleAuthentication()
  }

  return(
    <View style={signInStyles.root}>
      <SignInForm login={props.login}/>

      <View style={signInStyles.orView}>
        <Text style={signInStyles.or}>OR</Text>
      </View>

      <View style={signInStyles.googleButtonWrapper}>
        <SignButtons title="Sing In with Google"  onPress={googleAuth} backgroundColor="#DB4C3F" />
      </View>

        <View style={signInStyles.signUp}>
          <Text style={signInStyles.signUpText}>If you dont have account, </Text> 
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={signInStyles.signUpTextSpan}>Sign Up</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}

const signInStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center'
  },
  googleButtonWrapper: {
    marginHorizontal: 32
  },
  orView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  or: {
   fontWeight: 'bold',
   fontSize: 20
  },
  signUp: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signUpText: {
    fontSize: 20
  },
  signUpTextSpan: {
    color: '#00AEF9',
    fontWeight: 'bold',
    fontSize: 20
  }
})


export default SignIn