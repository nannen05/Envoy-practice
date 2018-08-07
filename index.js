// index.js

'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import rootReducer from './reducers'

import Header from './components/header';
import Slider from './components/slider';
import Callout from './components/callout';
import Blog from './components/blog';
import News from './components/news';

import FIREBASE_DATA from "./firebase/firebaseKeys";

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))

store.subscribe(() => console.log('Look ma, Redux!!'))

const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
  <Provider store={store}>
  	<Router history={history}>
  		<div>
      	<Header/>
      	<Slider/>
       	<Callout/>
       	<Blog/>
       	<News/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
