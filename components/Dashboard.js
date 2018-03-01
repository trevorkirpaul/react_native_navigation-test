import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { signOut } from '../redux/actions'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profileComplete: false
    }
  }
  // lifecycle
  componentDidMount() {
    const username = this.props.username || ''
    this.setState(() => ({
      username
    }))
    // init check if profile is complete, should always return false
    if (this.props.profileComplete === true) {
      const { profileComplete } = this.props
      this.setState({ profileComplete })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth === false) {
      // if no auth, wipe nav state
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
      })
      this.props.navigation.dispatch(resetAction)
    }

    // check if profile has been completed
    // return true if user has completed form
    // from EditProfile.js
    if (nextProps.profileComplete === true) {
      const { profileComplete } = nextProps
      this.setState({ profileComplete })
    }
  }
  // methods
  handleSignOut = () => {
    this.props.signOut()
  }
  handleEditProfile = () => {
    this.props.navigation.navigate('EditProfile')
  }
  handleViewProfile = () => {
    this.props.navigation.navigate('ViewProfile')
  }
  render() {
    const { username, profileComplete } = this.state
    return (
      <View>
        <Text>Dashboard</Text>
        {
          username && <Text>Welcome, {username}</Text>
        }
        <Button
          title="Edit Profile"
          color="#33673B"
          onPress={this.handleEditProfile}
        />
        
        <Button
          title="View Profile"
          color="#623CEA"
          onPress={this.handleViewProfile}
          disabled={!this.state.profileComplete}
        />

        <Button
          title="Sign Out"
          color="#CC3F0C"
          onPress={this.handleSignOut}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username,
  auth: state.auth,
  profileComplete: state.profileComplete
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)