import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import configStore from './redux/store'
import HomeScreen from './components/Home'
import Dashboard from './components/Dashboard'
import EditProfile from './components/EditProfile'
import ViewProfile from './components/ViewProfile'

// const store = configStore()

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Dashboard: {
    screen: Dashboard
  },
  EditProfile: {
    screen: EditProfile
  },
  ViewProfile: {
    screen: ViewProfile
  }
}, { initialRouteName: 'Home' })

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configStore}>
        <RootStack />
      </Provider>
    )
  }
}

