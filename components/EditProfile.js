import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, Text, Button, TextInput } from 'react-native'
import { editProfile } from '../redux/actions'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      color: '',
      animal: '',
      operatingSystem: '',
      language: ''
    }
  }
  handleSubmit = () => {
    const { username, password, color, animal, operatingSystem, language } = this.state
    this.props.editProfile({ username, password, color, animal, operatingSystem, language })
    
    // reset navigation back to Dashboard.js -- doesnt work as intended?
    const resetAction = NavigationActions.reset({
      index: 0,
      actions:[NavigationActions.navigate({ routeName: 'Dashboard' })]
    })
    this.props.navigation.navigate(resetAction)
  }
  render() {
    return (
      <View>
        <Text>Edit Profile</Text>
        <View>
          <TextInput
            placeholder="username"
            value={this.state.value}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <TextInput
            placeholder="color"
            value={this.state.color}
            onChangeText={(color) => this.setState({ color })}
          />
          <TextInput
            placeholder="animal"
            value={this.state.animal}
            onChangeText={(animal) => this.setState({ animal })}
          />
          <TextInput
            placeholder="fav operating system"
            value={this.state.operatingSystem}
            onChangeText={(operatingSystem) => this.setState({ operatingSystem })}
          />
          <TextInput
            placeholder="fav programming langauge"
            value={this.state.language}
            onChangeText={(language) => this.setState({ language })}
          />
        </View>
        <Button
          title="Submit Changes"
          color="#383838"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  username: state.username,
  color: state.color,
  animal: state.animal,
  operatingSystem: state.operatingSystem,
  language: state.language
})

const mapDispatchToProps = dispatch => ({
  editProfile: (fields) => dispatch(editProfile(fields))
})

export default connect(null, mapDispatchToProps)(EditProfile)