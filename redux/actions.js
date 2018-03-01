const users = [
  { username: 'trevor', password: 'pass' },
  { username: 'pikachu', password: 'pass' }
]

export const startSignIn = () => ({
  type: '@@CLICK:SIGN_IN',
  loading: true,
  error: false
})

export const signIn = ({ username, password }) => ({
  type: '@@SIGN_IN',
  username,
  password
})

export const signOut = () => ({
  type: '@@SIGN_OUT',
})

export const editProfile = ({
  username,
  password,
  color,
  animal,
  operatingSystem,
  language
}) => ({
  type: '@@EDIT_PROFILE',
  profileComplete: true,
  loading: false,
  error: false,
  username,
  password,
  color,
  animal,
  operatingSystem,
  language
})