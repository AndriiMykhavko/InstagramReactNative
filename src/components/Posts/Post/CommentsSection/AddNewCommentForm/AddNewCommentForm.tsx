import React from 'react'
import { reduxForm, Field, InjectedFormProps, reset } from 'redux-form'
import { View, Text, StyleSheet } from 'react-native'
import { CommentFormInput } from '../../../../Common/FormControl/CommentFormInput'
import { required } from '../../../../../utils/validators/validator'
import { TouchableOpacity } from 'react-native-gesture-handler'


interface IProps{
  addNewComment: (value: any) => void,
  handleSubmit: any,
  invalid: boolean
}

function AddNewCommentForm(props: any): JSX.Element {

  const { handleSubmit } = props;

  const onSubmit = (value: any) => {
    props.addNewComment(value.newCommentData)
  }

  return (
    <View style={styles.addCommentWrapper}>

      <View style={styles.textInput}>
        <Field name='newCommentData' props={{ placeholder: 'Add your comment...'}} validate={[required]} component={CommentFormInput} />
      </View>
      
      <TouchableOpacity style={styles.sendButtonWrapper} disabled={props.invalid} onPress={handleSubmit(onSubmit)}>
        <Text style={[styles.publishButtonText, props.invalid ? styles.disabledButton : styles.activeBuuton ]}>Publish</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  disabledButton: {
    color: '#9cd6fc'
  },
  activeBuuton: {
    color: '#0F9BF7'
  },
  publishButtonText: {
    fontWeight: 'bold'
  },
  textInput: {
    width: '85%'
  },
  sendButtonWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 10
  },
  addCommentWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 200
  }
})

export default reduxForm({form: "addPostCommentForm", enableReinitialize: true, shouldValidate: () => true})(AddNewCommentForm);