import { authAPI } from "../../api/api";
import types from './types'


export const actionCreator = (type: string, payload: any ) => ({
  type,
  payload 
})

export const logInUser = (displayName: string, userID: string, userPhoto: string, isAuth = true) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_USER_AUTH, {displayName, userID, userPhoto, isAuth}))
}

export const login = (email: string, password: string) =>  {
  authAPI
    .login(email, password)
    .then((response: any) => {
      if(response.user.email.length !== 0) {
      }
    })
    .catch((error: any) => console.log(error));
}

export const logoutUser = (displayName = '', userID = '', userPhoto = null, isAuth = false) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_USER_AUTH, {displayName, userID, userPhoto, isAuth}))
}

export const registration = ( name: string, email: string, password: string) => {
  authAPI
    .registration(email, password)
    .then((response: any) => {
      console.log(response)
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
