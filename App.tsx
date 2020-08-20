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
import MainContainer from './src/components/Main/MainContainer';
import auth from '@react-native-firebase/auth';
import { logInUser } from './src/redux/auth/action'
import firestore from '@react-native-firebase/firestore';
import { resetInitialLoad, setPost, setNewPost, turnOnNewPostNotification } from './src/redux/posts/actions'
import ProfileContainer from './src/components/Profile/ProfileContainer'
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '688161539775-n58725fv2efnj8oj8vsftjj6ns85gt8g.apps.googleusercontent.com',
});

const Stack = createStackNavigator();

interface IProps{
  isAuth: boolean,
  initialeLoad: boolean,
  userID: string
}

interface IDispatchRedux{
  logInUser: (displayName: string, userID: string, userPhoto: string, isAuth?: boolean) => void,
  resetInitialLoad: () => void,
  setPost: ( id: string, data: any[] ) => void,
  setNewPost: ( id: string, data: any[] ) => void,
  turnOnNewPostNotification: () => void
}

class App extends React.Component<IProps & IDispatchRedux>{
  componentDidMount() {

    auth().onIdTokenChanged(
      (user) => {
        if (user !== null) {
          this.props.logInUser(user.displayName, user.uid, user.photoURL);
        }
        if (user && user.displayName === null) {
          user.getIdToken(true)
        }
      }
    )

    firestore().collection("usersPosts")
      .orderBy("uploadTime", "asc").onSnapshot((snapshot) => {
        if(this.props.initialeLoad){
          snapshot.docs.map((doc) => {
            this.props.setPost(doc.id, doc.data())
          })
         this.props.resetInitialLoad()
        } else {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                 if(change.doc.data().userID != this.props.userID) {
                  this.props.setNewPost(change.doc.id, change.doc.data())
                  this.props.turnOnNewPostNotification()
                 }
            }
            if (change.type === "modified") {
                console.log("Modified: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed: ", change.doc.data());
            }
        });
        }
    });

  }

  render() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
              {!this.props.isAuth ? 
                <>
                 <Stack.Screen name="SignIn" component={SignIn} />
                 <Stack.Screen name="SignUp" component={SignUp} />
                </>
                :
                <>
                  <Stack.Screen name="Main" component={MainContainer} />
                  <Stack.Screen name="Profile" component={ProfileContainer} />
                </>
              }
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    isAuth: state.auth.isAuth,
    initialeLoad: state.postsPage.initialeLoad,
    userID: state.auth.userID
  }
}

const mapDispatchToProps: IDispatchRedux = {
  logInUser,
  resetInitialLoad,
  setPost,
  setNewPost,
  turnOnNewPostNotification 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
