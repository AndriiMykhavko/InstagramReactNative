import { managePostAPI } from '../../api/api';
import types from './types'
import storage from '@react-native-firebase/storage';

export const actionCreator = (type: string, payload: any ) => ({
  type,
  payload 
})


export const setPost = (postID: string, postData: any) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_POST, {postID, postData}))
}

export const turnOnNewPostNotification = (addedNewPost = true) => (dispatch: any) => {
  dispatch(actionCreator(types.TURN_ON_NEW_POST, {addedNewPost}))
}
export const turnOffNewPostNotification = (addedNewPost = false) => (dispatch: any) => {
  dispatch(actionCreator(types.TURN_OFF_NEW_POST, {addedNewPost}))
}

export const setNewPost = (postID: string, postData: any) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_NEW_POST, {postID, postData}))
}

export const resetInitialLoad = (stateOfLoad = false) => (dispatch: any) => {
  dispatch(actionCreator(types.RESET_INITIALE_LOAD, {stateOfLoad}))
}

export const resetNewPosts = () => ({
  type: types.RESET_NEW_POSTS,
});

export const likePost = (postID: string, userID: string) => (dispatch: any) => {
  managePostAPI
  .uploadWhoLikedPostData(postID, userID)
  .then(dispatch(actionCreator(types.ADD_NEW_LIKE_TO_POST, {postID, userID})))
  .catch(function(error: any) {
    console.error("Error adding like: ", error);
});
}

export const unlikePost = (postID: string, userID: string) => (dispatch: any) => {
  managePostAPI
  .uploadWhoDeletedLikedPostData(postID, userID)
  .then(dispatch(actionCreator(types.REMOVE_LIKE_FROM_POST, {postID, userID})))
  .catch(function(error: any) {
    console.error("Error remove like: ", error);
});
}

export const addCommetnIntoDB = (postID: string, owner: string, ownerImage: string, comment: string) => (dispatch: any) => {
  managePostAPI
  .uploadNewPostComment(postID, owner, ownerImage, comment)
  .then(dispatch(actionCreator(types.ADD_NEW_COMMENT_TO_POST, {postID, owner, comment, ownerImage})))
  .catch(function(error: any) {
    console.error("Error writing comment: ", error);
});
};

export const addPostIntoDB = (name: string, postImage: any, postText: string, userID: string, userPhoto: string, imageName: string) => (dispatch: any) => {
  managePostAPI
    .uploadImage(name, postImage, imageName)
    .on(
      "state_changed",
      () =>{},
      (error: any) => {
        console.log("Some error with image", error);
      },
      () => {
        storage()
          .ref("images")
          .child(name + '/' + postImage.name)
          .getDownloadURL()
          .then((url) => {
            const now = new Date().toUTCString()
            managePostAPI
            .uploadPostData( name, url, postText, now, userID, userPhoto )
            .then(
              function(docRef: any) {
                const postID = docRef.id
                const whoLikedPost = [] as string[]
                const postComments = [] as any[]
                const postImage = url
                const uploadTime = now
                const postData = {
                  name,
                  postImage,
                  postData: postText,
                  whoLikedPost,
                  postComments,
                  uploadTime,
                  userID,
                  userPhoto
                }
                dispatch(actionCreator(types.SET_POST, {postID, postData}))
              }
            )
            .catch(function(error: any) {
              console.error("Error writing post: ", error);
            });
          })
          .catch(function(error: any) {
            console.error("Error uploading photo: ", error);
        });
      }
    )
};