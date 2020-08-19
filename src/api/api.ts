import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


export const authAPI: any = {
  login(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email, password);
  },
  registration(email: string, password: string) {
    return auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return auth().signOut();
  },
  // googleAuth(){
  //   auth().getRedirectResult().then(function(result: any) {
  //     if (result.credential) {
  //       let token = result.credential.accessToken;
  //     }
  //     let user = result.user;
  //   });
  //   let provider = new firebase.auth.GoogleAuthProvider();
  //   provider.addScope('profile');
  //   provider.addScope('email');
  //   auth().signInWithRedirect(provider);
  // }
};

export const userMamageAPI: any = {
  cnangeUserPhoto(userName: string, image: any, imageName: string){
    storage().ref(`images/` + userName + `/` + imageName).putFile(image)
    .on(
      "state_changed",
      () =>{},
      (error: any) => {
        console.log(error);
      },
      () => {
        storage()
          .ref("images")
          .child(userName + '/' + imageName)
          .getDownloadURL()
          .then((url) => {
            const user = auth().currentUser;
              user?.updateProfile({
                photoURL: url
              })
              .then(
                // () => user.reload()
                () => user.getIdToken(true)
                
                // auth().updateCurrentUser(user);
                // auth().currentUser?.updateProfile
              ).catch(function(error: any) {
                console.log("Some error")
              });
          });
      }
    )
  }
}

export const managePostAPI: any = {
  uploadImage(name: string, image: any) {
    return storage().ref(`images/` + name + `/` + image.name).put(image)
  },
  uploadPostData(name: string, postImage: string, postData: string, uploadTime: string, userID: string, userPhoto: string) {
    return firestore().collection("usersPosts")
    .add({
      name: name,
      postImage: postImage,
      postData: postData,
      uploadTime: uploadTime,
      postComments: [],
      whoLikedPost: [],
      userID: userID,
      userPhoto: userPhoto
    });
  },
  uploadWhoLikedPostData(postID: string, userID: string) {
    return firestore().collection("usersPosts").doc(postID)
    .update({
      whoLikedPost: firestore.FieldValue.arrayUnion(userID)
    })
  },
  uploadWhoDeletedLikedPostData(postID: string, userID: string) {
    return firestore().collection("usersPosts").doc(postID)
    .update({
      whoLikedPost: firestore.FieldValue.arrayRemove(userID)
    })
  },
  uploadNewPostComment(postID: string, owner: string, ownerImage: string, comment: string,) {
    return firestore().collection("usersPosts").doc(postID)
    .update({
      postComments: firestore.FieldValue.arrayUnion({owner, ownerImage, comment})
    })
  }
}
