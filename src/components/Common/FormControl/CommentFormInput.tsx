import React from 'react'
import { View, TextInput } from 'react-native'

export const CommentFormInput = ({ input: { onChange }, ...restInput}) => {
  return(
    <View>
      <TextInput multiline={true} onChangeText={onChange} {...restInput}/>
    </View>
  )
}