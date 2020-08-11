// import * as firebase from "firebase";
import auth from '@react-native-firebase/auth';


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
  //   firebase.auth().signInWithRedirect(provider);
  // }
};

// export const userMamageAPI: any = {
//   cnangeUserPhoto(userName: string, image: any){
//     firebase.storage().ref(`images/` + userName + `/` + image.name).put(image)
//     .on(
//       "state_changed",
//       (snapshot:any) =>{},
//       (error: any) => {
//         console.log(error);
//       },
//       () => {
//         firebase.storage()
//           .ref("images")
//           .child(userName + '/' + image.name)
//           .getDownloadURL()
//           .then((url) => {
//             const user = firebase.auth().currentUser;
//             if(user != null){
//               user.updateProfile({
//                 photoURL: url
//               }).then(function() {
//                 firebase.auth().updateCurrentUser(user);
//               }).catch(function(error) {
//                 alert("Some error")
//               });
//             }
//           });
//       }
//     )
//   }
// }

// export const managePostAPI: any = {
//   uploadImage(name: string, image: any) {
//     return firebase.storage().ref(`images/` + name + `/` + image.name).put(image)
//   },
//   uploadPostData(name: string, postImage: string, postData: string, uploadTime: string, userID: string, userPhoto: string) {
//     // return firebase.firestore().collection("usersPosts").doc()
//     return firebase.firestore().collection("usersPosts")
//     .add({
//       name: name,
//       postImage: postImage,
//       postData: postData,
//       uploadTime: uploadTime,
//       postComments: [],
//       whoLikedPost: [],
//       userID: userID,
//       userPhoto: userPhoto
//     });
//   },
//   uploadWhoLikedPostData(postID: string, userID: string) {
//     return firebase.firestore().collection("usersPosts").doc(postID)
//     .update({
//       whoLikedPost: firebase.firestore.FieldValue.arrayUnion(userID)
//     })
//   },
//   uploadWhoDeletedLikedPostData(postID: string, userID: string) {
//     return firebase.firestore().collection("usersPosts").doc(postID)
//     .update({
//       whoLikedPost: firebase.firestore.FieldValue.arrayRemove(userID)
//     })
//   },
//   uploadNewPostComment(postID: string, owner: string, ownerImage: string, comment: string,) {
//     return firebase.firestore().collection("usersPosts").doc(postID)
//     .update({
//       postComments: firebase.firestore.FieldValue.arrayUnion({owner, ownerImage, comment})
//     })
//   }
//   // async getAllPosts() {
//   //   const snapshot = await firebase.firestore().collection('usersPosts').get()
//   //   return snapshot.docs.map(doc => console.log(doc.data()));
//   // }
// }
