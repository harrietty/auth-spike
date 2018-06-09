import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk'
import config from './src/aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure(config);
const store = createStore(rootReducer, applyMiddleware(thunk))

class ReduxApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('RNAmplifyExample', () => ReduxApp);