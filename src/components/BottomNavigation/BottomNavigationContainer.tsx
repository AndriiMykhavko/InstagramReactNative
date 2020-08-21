import React, { Component } from 'react'
import { connect } from 'react-redux'
import BottomNavigation from './BottomNavigation'
import { IBottonNavigationProps } from '../../../types'


class BottomNavigationContainer extends Component<IBottonNavigationProps> {
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


export default connect(mapStateToProps, {})(BottomNavigationContainer)