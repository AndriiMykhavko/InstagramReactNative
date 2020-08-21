import React from 'react'
import { reduxForm, Field } from "redux-form";
import { View, Text, StyleSheet } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator';
import { renderInput } from '../TextInput';
import { SignButtons } from '../SignButtons';

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
  }
});

export default reduxForm({form: 'SignIn'})(SignInForm)