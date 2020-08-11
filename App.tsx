/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import SignIn from './src/components/Auth/SignIn/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/components/Auth/SignUp/SignUp';
import Main from './src/components/Main/Main';
import auth from '@react-native-firebase/auth';
import { logInUser } from './src/redux/auth/action'
import IsUserAuth from './src/components/Auth/IsAuth/IsUserAuth';

const Stack = createStackNavigator();

interface IProps{
  isAuth: boolean
}

interface IDispatchRedux{
  logInUser: (displayName: string, userID: string, userPhoto: string, isAuth?: boolean) => void
}

class App extends React.Component<IProps & IDispatchRedux>{
  // componentDidMount() {
  //   auth().onAuthStateChanged(
  //     (user) => {
  //       if (user !== null) {
  //         console.log(user.displayName)
  //         //this.props.logInUser(user.displayName, user.uid, user.photoURL);
  //       }
  //       // if (user && user.displayName === null) {
  //       //   auth().updateCurrentUser(user);
  //       // }
  //     }
  // )
  // }

  render() {
    return(
      // <Provider store={store}>
        <NavigationContainer>
            {/* <Stack.Navigator> */}
              <IsUserAuth />
              {/* {!this.props.isAuth ? 
                <>
                 <Stack.Screen name="SignIn" component={SignIn} />
                 <Stack.Screen name="SignUp" component={SignUp} />
                </>
                :
                <>
                  <Stack.Screen name="Main" component={Main} />
                </>
              } */}
              {/* <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} /> */}
              {/* <SignIn /> */}
            {/* </Stack.Navigator> */}
        </NavigationContainer>
      // </Provider>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps: IDispatchRedux = {
  logInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
