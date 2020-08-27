import React from 'react'
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { View, Text } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator';
import { renderInput } from '../../../components/TextInput/TextInput';
import { SignButtons } from '../../../components/SignButton/SignButtons';
import { ISignInFormProps } from '../../../../types';
import styles from './FormStyles'


const SignInForm: React.FC<InjectedFormProps<{}, ISignInFormProps> & ISignInFormProps> = (props) => {
  
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

      <View>
        <Text style={styles.submitError}>{props.error}</Text>
      </View>
     
      <SignButtons title="Sign In"  onPress={handleSubmit(onSubmit)} backgroundColor="#0095F6"/>
      
    </View>
  );
};


export default reduxForm<{}, ISignInFormProps>({form: 'SignIn'})(SignInForm)