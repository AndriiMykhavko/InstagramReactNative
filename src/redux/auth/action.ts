import { authAPI } from "../../api/api";
import types from './types'


export const actionCreator = (type: string, payload: any ) => ({
  type,
  payload 
})

export const logInUser = (displayName: string, userID: string, userPhoto: string, isAuth = true) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_USER_AUTH, {displayName, userID, userPhoto, isAuth}))
}

export const logoutUser = (displayName = '', userID = '', userPhoto = null, isAuth = false) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_USER_AUTH, {displayName, userID, userPhoto, isAuth}))
}

export const registration = ( name: string, email: string, password: string) => (dispatch: any) => {
  authAPI
    .registration(email, password)
    .then((response: any) => {
      if(response.user) {
        response.user.updateProfile({
          displayName: name,
        })
      }
      // console.log(response)
      // debugger
    })
    .catch((error: any) => console.log(error));
};

export const googleAuth = () => {
  authAPI
  .googleAuth()
  .then( (response: any) => console.log(response))
}

export const logout = () => (dispatch: any) => {
  authAPI.logout().then(dispatch(logoutUser()));
};
