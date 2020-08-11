import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import { required, emailValidation } from '../../../utils/validators/validator'
// import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { renderInput } from '../TextInput';
import { SignButtons } from '../SignButtons';


const SignUn = (props: any) => {

  const { handleSubmit } = props;

  const onSubmit = (values: any) => console.log(values);

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

export default reduxForm({form: 'test-form'})(SignUn);

// const SignInForm = (props: any) => {
//     return (
//         <ScrollView keyboardShouldPersistTaps={'handled'}>
//           <View>
//             <Field placeholder="Email" validate={[required, emailValidation]} name={"email"} component={TextInput} />
//           </View>
//           <View>
//             <Field placeholder="Password" validate={[required]} name={"password"} component={TextInput} />
//           </View>
//           {/* <TouchableOpacity style={formStyles.formButton} onPress={props.handleSubmit(submit) >
//             <Text >Sign In</Text>
//           </TouchableOpacity> */}
//           <Button title={'Sign In'} onPress={props.handleSubmit(submit)} />
//         </ScrollView>
//     )
// }

// const formStyles = StyleSheet.create({
//   formButton: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10
//   },
// })

// const LoginReduxForm = reduxForm({form: 'login'})(SignInForm)
//export default reduxForm({form: 'login'})(SignInForm)

// const SignIn = (props: any) => {
//   const onSubmit = (formData: any) => {
//     console.log(formData)
//   }

//   return(
//     <View>
//       <Text>Instagram</Text>
//       {/* <LoginReduxForm onSubmit={onSubmit}/> */}
//     </View>
//   )
// }

// const signInStyles = StyleSheet.create({

// })

// const mapStateToProps = (state: any) => ({

// })

// // export default connect(mapStateToProps, {})(SignIn)