import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const ViewProfile = ({
  username,
  color,
  animal,
  operatingSystem,
  language
}) => (
  <View>
    <Text>{username}'s Profile</Text>

    <View>

      <Text>
        Favorite Color: {color}
      </Text>

      <Text>
        Favorite Animal: {animal}
      </Text>

      <Text>
        Operating System of Choice: {operatingSystem}
      </Text>

      <Text>
        Favorite Programming Language: {language}
      </Text>

    </View>

  </View>
)

const mapStateToProps = state => ({
  username: state.username,
  color: state.color,
  animal: state.animal,
  operatingSystem: state.operatingSystem,
  language: state.language,
})

export default connect(mapStateToProps)(ViewProfile)