import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import './index.css'
import App from './App'
import store from './store'
//import registerServiceWorker from './registerServiceWorker'

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
     document.getElementById('root')
  )
}

render()
store.subscribe(render)
//registerServiceWorker();
