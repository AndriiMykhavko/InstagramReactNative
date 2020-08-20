import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator'
import { connect } from 'react-redux';
import { renderInput } from '../TextInput';
import { SignButtons } from '../SignButtons';
import { login, googleAuthentication } from '../../../redux/auth/action'

interface IDispatchRedux{
  login: (email: string, password: string) => void
} 

const SignInForm = (props: any) => {
  
  const { handleSubmit } = props;

  const onSubmit = (values: any) => props.login(values.email, values.password);

  return (
    <View style={styles.root}>
       <View style={styles.headerWrapper}>
        <Text style={styles.header}>Instagram</Text>
       </View>
      <View style={styles.marginBottom}>
        <Field
          name={'email'}
          props={{
            placeholder: 'Email'
          }}
          validate={[required, emailValidation]}
          component={renderInput}
        />
      </View>
      <View style={styles.marginBottom}>
        <Field
          name={'password'}
          props={{
            placeholder: 'Password',
            secureTextEntry: true
          }}
          validate={[required]}
          component={renderInput}
        />
      </View>
     
      <SignButtons title="Sign In"  onPress={handleSubmit(onSubmit)} backgroundColor="#0095F6"/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
    justifyContent: 'center'
  },
  marginBottom: {
    marginBottom: 30
  },
  headerWrapper: {
    alignItems: 'center',
    marginBottom: 30
  },
  header: {
    fontSize: 60,
    fontFamily: 'BalooDa2-Bold'
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4
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
});

const LoginReduxForm = reduxForm({form: 'SignIn'})(SignInForm)

const SignIn = (props: any) => {

  const login = (email: string, password: string) => {
    props.login(email, password)
  }
  const googleAuth = () => {
    return googleAuthentication()
  }

  return(
    <View style={signInStyles.root}>
      <LoginReduxForm navigation={props.navigation} login={login}/>

      <View style={styles.orView}>
        <Text style={styles.or}>OR</Text>
      </View>

      <View style={signInStyles.googleButtonWrapper}>
        <SignButtons title="Sing In with Google"  onPress={() => googleAuth()} backgroundColor="#DB4C3F" />
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

const signInStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center'
  },
  googleButtonWrapper: {
    marginHorizontal: 32
  }
})

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps: IDispatchRedux = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)