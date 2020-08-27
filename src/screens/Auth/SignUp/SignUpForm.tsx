import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { View } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator';
import { renderInput } from '../../../components/TextInput/TextInput';
import { SignButtons } from '../../../components/SignButton/SignButtons';
import { ISignUpDiapatchRedux } from '../../../../types';
import styles from './FormStyles'


const SignUpForm: React.FC<InjectedFormProps<{}, ISignUpDiapatchRedux> & ISignUpDiapatchRedux> = (props: any) => {

  const { handleSubmit } = props;

  const onSubmit = (values: any) => props.registration(values.name, values.email, values.password);

  return (
    <View style={styles.root}>
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
    </View>
  );
};


export default reduxForm<{}, ISignUpDiapatchRedux>({form: 'test-form'})(SignUpForm);