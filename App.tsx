/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


class App extends React.Component{
  render() {
    return(
      <NavigationContainer>
        <Text>Hello!!!</Text>
      </NavigationContainer>
    )
  }
}

export default App;
