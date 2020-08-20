import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator'
import { connect } from 'react-redux';
import { renderInput } from '../TextInput';
import { SignButtons } from '../SignButtons';
import { registration } from '../../../redux/auth/action'

interface IDispatchRedux{
  registration: (name: string, email: string, password: string) => void
}

const SignUpForm = (props: any) => {

  const { handleSubmit } = props;

  const onSubmit = (values: any) => props.registration(values.name, values.email, values.password);

  return (
    <View style={styles.root}>
       <View style={styles.headerWrapper}>
        <Text style={styles.header}>Instagram</Text>
       </View>
       <View style={styles.marginBottom}>
        <Field
          name={'name'}
          props={{
            placeholder: 'Name'
          }}
          validate={[required]}
          component={renderInput}
        />
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
      <SignButtons title="Sign Up"  onPress={handleSubmit(onSubmit)} backgroundColor="#0095F6"/>
      <View style={styles.signIn}>
        <Text style={styles.signInText}>If you have account, </Text> 
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={styles.signInTextSpan}>Sign In</Text>
        </TouchableOpacity>
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
  signIn: {
    alignItems: 'center',
    marginTop: 10,
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
});

const SignUpReduxForm = reduxForm({form: 'test-form'})(SignUpForm);

const formStyles = StyleSheet.create({
  formButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
})

const SignUp = (props: any) => {
  const registration = (name: string, email: string, password: string) => {
    props.registration(name, email, password)
  }

  return(
    <View style={signInStyles.root}>
      <SignUpReduxForm navigation={props.navigation} registration={registration}/>
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

const mapDispatchToProps: IDispatchRedux = {
  registration
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)