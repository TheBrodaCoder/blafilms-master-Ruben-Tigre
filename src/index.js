import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import movieReducer from './reducers/movieReducer'
import searchReducer from './reducers/searchReducer'

const reducer = combineReducers({
  movies: movieReducer,
  search: searchReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root'),
)
