import React, { Component } from 'react'
import { connect } from 'react-redux'
import BottomNavigation from './BottomNavigation'

interface IProps{
  navigation: any,
  userPhoto: string
}

class BottomNavigationContainer extends Component<IProps> {
  render() {
    return (
      <BottomNavigation userPhoto={this.props.userPhoto} navigation={this.props.navigation} />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    userPhoto: state.auth.userPhoto
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigationContainer)