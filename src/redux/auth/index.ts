import types from './types'

const initialState = {
  isAuth: false,
  name: '',
  userID: '',
  userPhoto: null
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_USER_AUTH: {
      const payload = action.payload
      return {
        isAuth: payload.isAuth,
        name: payload.displayName,
        userID: payload.userID,
        userPhoto: payload.userPhoto
      };
    }
    default:
      return state;
  }
};