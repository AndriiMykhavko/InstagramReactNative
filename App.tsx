/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './src/components/Main/MainContainer';
import auth from '@react-native-firebase/auth';
import { logInUser } from './src/redux/auth/action'
import firestore from '@react-native-firebase/firestore';
import { resetInitialLoad, setPost, setNewPost, turnOnNewPostNotification } from './src/redux/posts/actions'
import ProfileContainer from './src/components/Profile/ProfileContainer'
import { GoogleSignin } from '@react-native-community/google-signin';
import { IAppProps, IAppReduxDispatch } from './types';
import SignInContainer from './src/components/Auth/SignIn/SignInContainer';
import { SignUpContainer } from './src/components/Auth/SignUp/SignUpContainer';

GoogleSignin.configure({
  webClientId: '688161539775-n58725fv2efnj8oj8vsftjj6ns85gt8g.apps.googleusercontent.com',
});

const Stack = createStackNavigator();

class App extends React.Component<IAppProps & IAppReduxDispatch>{
  componentDidMount() {

    auth().onIdTokenChanged(
      (user) => {
        if (user !== null) {
          this.props.logInUser(user?.displayName!, user.uid, user?.photoURL!);
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
                 <Stack.Screen name="SignIn" component={SignInContainer} />
                 <Stack.Screen name="SignUp" component={SignUpContainer} />
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

const mapDispatchToProps: IAppReduxDispatch = {
  logInUser,
  resetInitialLoad,
  setPost,
  setNewPost,
  turnOnNewPostNotification 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
