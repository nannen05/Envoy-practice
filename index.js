// index.js

'use strict';

import React from 'react';
import { render } from 'react-dom';
import Callout from './components/callout';
import Blog from './components/blog';
import News from './components/news';


render(
  <div className="root">
   	<Callout/>
   	<Blog/>
   	<News/>
  </div>,
  document.getElementById('root')
);