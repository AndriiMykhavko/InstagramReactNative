import React from 'react'
import { Text, View, TouchableOpacity} from 'react-native';
import { IAuthProps, ISignUpDiapatchRedux } from '../../../../types';
import SignUpForm from './SignUpForm';
import styles from './Styles'


const SignUp: React.FC<IAuthProps & ISignUpDiapatchRedux> = (props) => {
  return(
    <View style={styles.root}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Instagram</Text>
       </View>

      <SignUpForm registration={props.registration}/>

      <View style={styles.signIn}>
        <Text style={styles.signInText}>If you have account, </Text> 
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={styles.signInTextSpan}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default SignUp