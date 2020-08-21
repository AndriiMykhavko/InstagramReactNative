import React from 'react'
import { UserPhotoSection } from '../UserPhotoSection/UserPhotoSection'
import Post from '../Posts/Post/Post'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import HeaderContainer from '../Header/HeaderContainer'
import BottomNavigationContainer from '../BottomNavigation/BottomNavigationContainer'
import AddUserPhotoModal from './AddUserPhotoModal'
import { IProfileProps, IProfileDispatchRedux, IPost } from '../../../types'


const Profile: React.FC<IProfileProps & IProfileDispatchRedux> = (props)=> {
  let usersPost = props.posts.filter( (item: any) => item.ownerID === props.userID )
  let postsElements = usersPost.map( (post: IPost, index) => 
  <Post likes={post.likes} owner={post.owner} key={index}
        postComments={post.postComments} postID={post.postID} postImg={post.postImg}
        postData={post.postData} uploadTime={post.uploadTime} userID={props.userID}
        likePost={props.likePost} unlikePost={props.unlikePost} ownerImage={post.ownerImage}/> 
  )

  return(
    <View style={styles.profileWrapper}>
      <HeaderContainer />
      <ScrollView>
        <View style={styles.userInfoWrapper}>
          <UserPhotoSection userPhoto={props.userPhoto} ownerImageWrapper={styles.ownerImageWrapper} 
                            ownerIconOutline={styles.ownerIconOutline} ownerImage={styles.ownerImage}
                            ownerIconWrapper={styles.ownerIconWrapper} iconSize={75}/>
          <View style={styles.userTextAndInfoWrapper}>
            <Text style={styles.userInfoText}>{props.userName}</Text>
            <View>
              <AddUserPhotoModal userName={props.userName} />
            </View>
          </View>
        </View>
        {postsElements}
      </ScrollView>
      <BottomNavigationContainer navigation={props.navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  userInfoWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    marginBottom: 15,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },
  userInfoText: {
    fontSize: 30,
    fontFamily: 'BalooDa2-Regular',
    fontWeight: '100'
  },
  userTextAndInfoWrapper: {
    marginTop: 5
  },
  ownerIconOutline: {
    height: 112,
    width: 112,
    borderRadius: 100
  },
  ownerImageWrapper: {
    height: 100,
    width: 100,
  },
  ownerImage: {
    borderRadius: 100
  },
  ownerIconWrapper: {
    height: 100,
    width: 100,
    borderRadius: 100
  }
})

export default Profile