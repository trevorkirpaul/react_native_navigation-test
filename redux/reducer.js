const initState = {
  auth: false,
  loading: false,
  error: false,
  username: '',
  profileComplete: false
}

export default(state = initState, action) => {
  switch(action.type) {
    case '@@CLICK:SIGN_IN':
    return {
      ...state,
      auth: false,
      loading: true,
      error: false,
      username: ''
    }

    case '@@SIGN_IN':
    return {
      ...state,
      loading: false,
      error: false,
      auth: true,
      username: action.username
    }

    case '@@SIGN_OUT':
    return {
      loading: false,
      error: false,
      auth: false,
    }

    case '@@ERROR:SIGN_IN':
    return {
      loading: false,
      error: true,
    }

    case '@@EDIT_PROFILE':
    return {
      ...state,
      profileComplete: action.profileComplete,
      username: action.username,
      password: action.password,
      color: action.color,
      animal: action.animal,
      operatingSystem: action.operatingSystem,
      language: action.language,
      loading: action.loading,
      error: action.error,
    }
    default:
    return state;
  }
}