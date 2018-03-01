import React, { Component } from 'react'
import { View, Text, TextInput, Button  } from 'react-native'
import { connect } from 'react-redux'
import { signIn } from '../redux/actions'

const styles = {
  container: {
    padding: 10,
    backgroundColor: '#e8e8e8',
  },
  title: {
    fontSize: 25,
    color: '#383838'
  },
  input: {
    borderColor: '#383838',
    borderWidth: 1,
    padding: 5,
    margin: 5
  }
}

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleSignIn = () => {
    const { username, password } = this.state
    this.props.signIn({ username, password })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.$username) {
      this.props.navigation.navigate('Dashboard')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login App</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="username"
            textValue={this.state.username}
            onChangeText={(username) => this.setState({ username }) }
          />
          <TextInput
          secureTextEntry={true}
            style={styles.input}
            placeholder="password"
            textValue={this.state.password}
            onChangeText={(password) => this.setState({ password }) }
          />
        </View>
        <Button
          title="Sign in"
          color="#383838"
          onPress={this.handleSignIn}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  $auth: state.auth,
  $loading: state.loading,
  $error: state.error,
  $username: state.username
})

const mapDispatchToProps = dispatch => ({
  signIn: (fields) => dispatch(signIn(fields))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)