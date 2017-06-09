// index.js

'use strict';

import React from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Slider from './components/slider';
import Callout from './components/callout';
import Blog from './components/blog';
import News from './components/news';


render(
  <div>
  	<Header/>
  	<Slider/>
   	<Callout/>
   	<Blog/>
   	<News/>
  </div>,
  document.getElementById('root')
);