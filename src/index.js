import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import App from './containers/App'

let store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
  );

const root = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(root);

render(
  <Provider store={store}>
   <App />
  </Provider>, root)