import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator'
// import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { renderInput } from '../TextInput';
import { SignButtons } from '../SignButtons';


const SignInForm = (props: any) => {

  const { handleSubmit } = props;

  const onSubmit = (values: any) => console.log(values);

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
      {/* <Button color="#0095F6" title={'Sign In'} onPress={handleSubmit(onSubmit)} /> */}
      <SignButtons title="Sign In"  onPress={handleSubmit(onSubmit)} backgroundColor="#0095F6"/>
      <View style={styles.orView}>
        <Text style={styles.or}>OR</Text>
      </View>
      {/* <Button color="#DB4C3F" title={'Sing In with Google'} onPress={handleSubmit(onSubmit)} /> */}
      <SignButtons title="Sing In with Google"  onPress={handleSubmit(onSubmit)} backgroundColor="#DB4C3F" />
      <View style={styles.signUp}>
        <Text style={styles.signUpText}>If you dont have account, </Text> 
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.signUpTextSpan}>Sign Up</Text>
        </TouchableOpacity>
        {/* <Button title="SignUp "  onPress={() => props.navigation.navigate('SignUp')}/>  */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 32,
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

// export default reduxForm({form: 'test-form'})(SignIn);

const LoginReduxForm = reduxForm({form: 'SignIn'})(SignInForm)
//export default reduxForm({form: 'SignIn'})(SignInForm)


const SignIn = (props: any) => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return(
    <View style={signInStyles.root}>
      {/* <Text>Instagram</Text> */}
      <LoginReduxForm navigation={props.navigation}/>
    </View>
  )
}

const signInStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center'
  }
})

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {})(SignIn)