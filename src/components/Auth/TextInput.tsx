import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';


export const renderInput = ({ input: { onChange, ...input }, meta, ...rest}) => {
  const hasError = meta.touched && meta.error;
  
  return <View>
          <TextInput style={[inputStyles.formControl, hasError ? inputStyles.formControlErrorInput : inputStyles.formControlInput]} onChangeText={onChange} {...input} {...rest} />
          {hasError && <Text style={inputStyles.formControlErrorText}>{meta.error}</Text>}
        </View>
};

const inputStyles = StyleSheet.create({
  formControl: {
    fontSize: 15,
    fontFamily: 'Rowdies',
  },
  formControlErrorInput: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  formControlInput: {
    borderColor: '#DBDBDB',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  formControlErrorText: {
    color: 'red',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
})