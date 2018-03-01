import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import user from './reducer'

const store = createStore(user, devToolsEnhancer())

export default store
