import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AuthScreenStyle'

//Components

import DefaultInput from './../Components/DefaultInput';

class AuthScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
          <Text>Sign Up</Text>
          <DefaultInput placeholder="Email"/>
          <DefaultInput placeholder="Password"/>
          <DefaultInput placeholder="Confirm Password"/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
