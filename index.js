// index.js

'use strict';

import React from 'react';
import { render } from 'react-dom';
//import HelloWorld from './hello-world';
import Callout from './components/callout';
import Blog from './components/blog';

render(
  <div className="root">
   	<Callout/>
   	<Blog/>
  </div>,
  document.getElementById('root')
);