import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { SignButtons } from '../../../components/SignButton/SignButtons';
import { ISignInDispatchRedux, IAuthProps } from '../../../../types';
import SignInForm from './SignInForm';
import styles from './Styles'

const SignIn: React.FC<IAuthProps & ISignInDispatchRedux> = (props) => {

  const googleAuth = () => {
    return props.googleAuthentication()
  }

  return(
    <View style={styles.root}>
      <SignInForm login={props.login}/>

      <View style={styles.orView}>
        <Text style={styles.or}>OR</Text>
      </View>

      <View style={styles.googleButtonWrapper}>
        <SignButtons title="Sing In with Google"  onPress={googleAuth} backgroundColor="#DB4C3F" />
      </View>

        <View style={styles.signUp}>
          <Text style={styles.signUpText}>If you dont have account, </Text> 
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.signUpTextSpan}>Sign Up</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}


export default SignIn