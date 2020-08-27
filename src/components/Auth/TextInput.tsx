import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './TextInputStyles'


export const renderInput = ({ input: { onChange, ...input }, meta, ...rest}) => {
  const hasError = meta.touched && meta.error;
  
  return <View>
          <TextInput style={[styles.formControl, hasError ? styles.formControlErrorInput : styles.formControlInput]} onChangeText={onChange} {...input} {...rest} />
          {hasError && <Text style={styles.formControlErrorText}>{meta.error}</Text>}
        </View>
};