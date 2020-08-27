import { authAPI } from "../../api/api";
import types from './types'
import { stopSubmit } from "redux-form";


export const actionCreator = (type: string, payload: any ) => ({
  type,
  payload 
})

export const logInUser = (displayName: string, userID: string, userPhoto: string, isAuth = true) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_USER_AUTH, {displayName, userID, userPhoto, isAuth}))
}

export const login = (email: string, password: string) => (dispatch: any) => {
  authAPI
    .login(email, password)
    .catch((error: any) => 
      dispatch(stopSubmit('SignIn', {_error: 'Email or password is wrong.'}))
    );
}

export const logoutUser = (displayName = '', userID = '', userPhoto = null, isAuth = false) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_USER_AUTH, {displayName, userID, userPhoto, isAuth}))
}

export const registration = ( name: string, email: string, password: string) => {
  authAPI
    .registration(email, password)
    .then((response: any) => {
      if(response.user) {
        response.user.updateProfile({
          displayName: name,
        })
      }
    })
    .catch((error: any) => console.log(error));
};

export const googleAuthentication = () => {
  authAPI
  .googleAuth()
}

export const logout = () => (dispatch: any) => {
  authAPI.logout().then(dispatch(logoutUser()));
};
