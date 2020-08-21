import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import HeaderContainer from '../Header/HeaderContainer'
import BottomNavigationContainer from '../BottomNavigation/BottomNavigationContainer'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { turnOffNewPostNotification, resetNewPosts, setPost  } from '../../redux/posts/actions'
import PostsContainer from '../Posts/PostsContainer'
import { INewPostMap, IMainContainerProps, IMainContainerDispatchRedux } from '../../../types'


class  MainContainer extends React.Component<IMainContainerProps & IMainContainerDispatchRedux> {

  addingNewPostToState = () => {
    this.props.newPosts.map((post: INewPostMap) => {
      this.props.setPost(post.postID, post.postData)
    })
    this.props.resetNewPosts()
    this.props.turnOffNewPostNotification()
  }

  render() {
    return (
      <View style={styles.mainWrapper}>

        <HeaderContainer />

        { this.props.addedNewPost && 
          <View style={styles.position}>
          <TouchableOpacity style={styles.addedNewPost} 
            onPress={() => {this.addingNewPostToState(); this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true})}} >
              <Text style={styles.addedNewPostText}>Added new post</Text>
            </TouchableOpacity>
            </View>
          }

        <ScrollView ref='_scrollView'>
          <View style={styles.mainContent}> 
          
            <PostsContainer />

          </View>
        </ScrollView>
        <BottomNavigationContainer navigation={this.props.navigation}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    position: 'relative'
  },
  mainContent: {
    alignItems: 'stretch'
  },
  addedNewPost: {
  margin: 15,
  backgroundColor: '#fff',
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderColor: '#DBDBDB',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 5,
  },
  addedNewPostText: {
    fontFamily: 'Sora-Regular'
  },
  position: {
    position: 'absolute',
    left: '30%',
    top: '10%',
    zIndex:100
  }
})

const mapStateToProps = (state: any) => ({
  addedNewPost: state.postsPage.addedNewPost,
  newPosts: state.postsPage.newPosts
})

const mapDispatchToProps: IMainContainerDispatchRedux ={
  turnOffNewPostNotification,
  resetNewPosts,
  setPost
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContainer)