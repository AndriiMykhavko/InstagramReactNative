import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { IAuthProps, ISignUpDiapatchRedux } from '../../../../types';
import SignUpForm from './SignUpForm';




const SignUp: React.FC<IAuthProps & ISignUpDiapatchRedux> = (props) => {
  return(
    <View style={signInStyles.root}>
      <View style={signInStyles.headerWrapper}>
        <Text style={signInStyles.header}>Instagram</Text>
       </View>

      <SignUpForm navigation={props.navigation} registration={props.registration}/>

      <View style={signInStyles.signIn}>
        <Text style={signInStyles.signInText}>If you have account, </Text> 
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={signInStyles.signInTextSpan}>Sign In</Text>
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
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 30
  },
  header: {
    fontSize: 60,
    fontFamily: 'BalooDa2-Bold'
  },
  signIn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signInText: {
    fontSize: 20
  },
  signInTextSpan: {
    color: '#00AEF9',
    fontWeight: 'bold',
    fontSize: 20
  }
})


export default SignUp