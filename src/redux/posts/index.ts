import types from './types'
// import { IPost } from '../../components/main/Posts/post/post'

const initialState = {
  // posts: [] as IPost[],
  posts: [] as any,
  initialeLoad: true,
  addedNewPost: false,
  newPosts: [] 
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_POST: {
      const payload = action.payload
      let newPost = {
        postID: payload.postID,
        owner: payload.postData.name,
        postImg: payload.postData.postImage,
        postData: payload.postData.postData,
        likes: payload.postData.whoLikedPost,
        postComments: payload.postData.postComments,
        uploadTime: payload.postData.uploadTime,
        ownerID: payload.postData.userID,
        ownerImage: payload.postData.userPhoto
      }
      return {
        ...state,
        posts: [newPost, ...state.posts ],
      };
    }
    case types.TURN_ON_NEW_POST: {
      return {
        ...state,
        addedNewPost: action.payload.addedNewPost
      }
    }
    case types.TURN_OFF_NEW_POST: {
      return {
        ...state,
        addedNewPost: action.payload.addedNewPost
      }
    }
    case types.SET_NEW_POST: {
      const payload = action.payload
      return {
        ...state,
        newPosts: [payload, ...state.newPosts ],
      }
    }
    case types.RESET_INITIALE_LOAD: {
      return {
        ...state,
        initialeLoad: action.payload.stateOfLoad
      }
    }
    case types.RESET_NEW_POSTS: {
      return{
        ...state,
        newPosts: []
      }
    }
    case types.ADD_NEW_LIKE_TO_POST: {
      const payload = action.payload
      const index = state.posts.findIndex((item: any) => {
        return item.postID === payload.postID
      })
      const posts = [...state.posts]
      if(index > -1){
        posts[index].likes.push(payload.userID)
      }
      return {
        ...state,
        posts: posts
      }
    }
    case types.REMOVE_LIKE_FROM_POST: {
      const payload = action.payload
      const index = state.posts.findIndex((item: any) => {
        return item.postID === payload.postID
      })
      const posts = [...state.posts]
      const indexOfLike = posts[index].likes.indexOf(payload.userID);
      if (indexOfLike > -1) {
        posts[index].likes.splice(indexOfLike, 1);
      }
      return {
        ...state,
        posts: posts
      }
    }
    case types.ADD_NEW_COMMENT_TO_POST: {
      const payload = action.payload
      const index = state.posts.findIndex((item: any) => {
        return item.postID === payload.postID
      })
      const posts = [...state.posts]
      const comment = {
        owner: payload.owner,
        ownerImage: payload.ownerImage, 
        comment: payload.comment
      } 
      if(index > -1){
        posts[index].postComments.push(comment)
      }
      return {
        ...state,
        posts: posts
      }
    }
    default:
      return state;
  }
};