import { userMamageAPI } from '../../api/api';
// import types from './types'

export const actionCreator = (type: string, payload: any ) => ({
  type,
  payload 
})

export const setUserPhoto = (userName: string, image: any, imageName: string) => {
  userMamageAPI
  .cnangeUserPhoto(userName, image, imageName)
}