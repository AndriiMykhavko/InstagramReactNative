import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import HeaderContainer from '../Header/HeaderContainer'
import BottomNavigationContainer from '../BottomNavigation/BottomNavigationContainer'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { turnOffNewPostNotification, resetNewPosts, setPost  } from '../../redux/posts/actions'
import PostsContainer from '../Posts/PostsContainer'


interface IProps{
  newPosts: any[],
  addedNewPost: boolean,
  navigation: any
}

interface IDispatcRedux{
  setPost: (postID: string, postData: any[]) => void,
  resetNewPosts: () => void,
  turnOffNewPostNotification: () => void
}

class  MainContainer extends React.Component<IProps&IDispatcRedux> {
  addingNewPostToState = () => {
    this.props.newPosts.map((post) => {
      this.props.setPost(post.postID, post.postData)
    })
    // window.focus()
    // window.scrollTo( 0, 0 )
    this.props.resetNewPosts()
    this.props.turnOffNewPostNotification()
  }

  render() {
    return (
      <View style={styles.mainWrapper}>
        <HeaderContainer />
        <ScrollView>
          <View style={styles.mainContent}> 

          { this.props.addedNewPost && 
            <TouchableOpacity style={styles.addedNewPost} 
            onPress={() => {this.addingNewPostToState; 
            this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true})}} ref='_scrollView'>
              <Text style={styles.addedNewPostText}>Added new post</Text>
            </TouchableOpacity>
          }
          
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
    backgroundColor: '#FAFAFA'
  },
  mainContent: {
    // alignItems: 'center'
    alignItems: 'stretch'
  },
  addedNewPost: {
  // position: sticky;
  // top: 10px;
  margin: 15,
  backgroundColor: '#fff',
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderColor: '#DBDBDB',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 5
  },
  addedNewPostText: {
    fontFamily: 'Sora-Regular'
  }
})

const mapStateToProps = (state: any) => ({
  addedNewPost: state.postsPage.addedNewPost,
  newPosts: state.postsPage.newPosts
})

const mapDispatchToProps: IDispatcRedux ={
  turnOffNewPostNotification,
  resetNewPosts,
  setPost
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContainer)