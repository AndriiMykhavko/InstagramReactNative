import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseStorageTypes } from "@react-native-firebase/storage";

export interface IAppProps{
  isAuth: boolean,
  initialeLoad: boolean,
  userID: string
}

export interface IAppReduxDispatch{
  logInUser: (displayName: string, userID: string, userPhoto: string, isAuth?: boolean) => void,
  resetInitialLoad: () => void,
  setPost: ( id: string, data: Record<string, IPostDocData> ) => void,
  setNewPost: ( id: string, data: Record<string, IPostDocData> ) => void,
  turnOnNewPostNotification: () => void
}

export interface IPostDocData{
  whoLikedPost: string[],
  name: string,
  postComments: IComment[],
  postImg: string,
  postData: string,
  uploadTime: string,
  userID: string,
  ownerImage: string
}

export interface IComment{
  comment: string,
  owner: string,
  ownerImage: string
}

export interface IPosts{
  likes: string[],
  owner: string,
  postComments: IComment[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: any,
  userID: string,
  ownerImage: string,
}

export interface IUserPtotoProps{
  userPhoto: string,
  ownerImageWrapper?: any,
  ownerIconOutline?: any,
  ownerImage?: any,
  ownerIconWrapper?: any,
  iconSize?: number
}

interface IPostsContainerProps{
  posts: IPost[],
  userID: string
}

export interface IPost{
  likes: string[],
  owner: string,
  postComments: IComment[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: any,
  userID: string,
  ownerImage: string
}

export interface IPostDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

export interface IProfileProps{
  userName: string,
  userPhoto: string,
  userID: string,
  posts: IPost[],
  isAuth: boolean,
  navigation: any
}

export interface IProfileDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

export interface IAddPhotoModalProps{
  userName: string
}

export interface IPostCommentsModalProps{
  postComments: IComment[]
}

export interface ICommentsSectionProps{
  postComments: IComment[],
  postID: string,
  owner: string,
  addCommetnIntoDB: (newCommentText: string) => void
}

export interface ICommentsSectionContainerProps{
  postID: string,
  owner: string,
  ownerImage: string,
  postComments: IComment[],
}

export interface ICommentsSectionContainerDispatchRedux{
  addCommetnIntoDB: (postID: string, owner: string, ownerImage: string, newCommentText: string) => void
}

export interface IMainContainerProps{
  newPosts: [],
  addedNewPost: boolean,
  navigation: any
}

export interface IMainContainerDispatchRedux{
  setPost: (postID: string, postData: IPostDocData) => void,
  resetNewPosts: () => void,
  turnOffNewPostNotification: () => void
}

export interface INewPostMap{
  postID: string,
  postData: IPostDocData
}

export interface IHeaderProps{
  logout: () => void
}

export interface IBottonNavigationProps{
  navigation: any,
  userPhoto: string
}

export interface ISignInButtonProps{
  title: string,
  onPress: any,
  backgroundColor: string
}

export interface IAuthProps{
  navigation: any
}

export interface ISignUpDiapatchRedux{
  registration: (name: string, email: string, password: string) => void
}

export interface ISignInDispatchRedux{
  login: (email: string, password: string) => void,
  googleAuthentication: () => void
}

export interface IAddPostModalProps{
  name: string,
  userPhoto: string,
  userID: string,
}

export interface IAddPostModalDispathRedux{
  addPostIntoDB: (userName: string, postImage: any, postData: string, userID: string, userPhoto: string, imageName: string) => void
}

export interface ISignInFormProps{
  login: (email: string, password: string) => void
}

export interface IAuth{
  login: (email: string, password: string) => Promise<FirebaseAuthTypes.UserCredential>,
  registration: (email: string, password: string) => Promise<FirebaseAuthTypes.UserCredential>,
  logout: () => Promise<void>,
  googleAuth: () => void
}

export interface IUserManage{
  cnangeUserPhoto: (userName: string, image: any, imageName: string) => void
}

export interface IManagePost{
  uploadImage: (name: string, image: any, imageName: string) => FirebaseStorageTypes.Task,
  uploadPostData: (name: string, postImage: string, postData: string, uploadTime: string, userID: string, userPhoto: string) => Promise<FirebaseFirestoreTypes.DocumentReference>,
  uploadWhoLikedPostData: (postID: string, userID: string) => Promise<void>,
  uploadWhoDeletedLikedPostData: (postID: string, userID: string) => Promise<void>,
  uploadNewPostComment: (postID: string, owner: string, ownerImage: string, comment: string) => Promise<void>
}