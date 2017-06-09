// index.js

'use strict';

import React from 'react';
import { render } from 'react-dom';
//import HelloWorld from './hello-world';
import Callout from './components/callout';

render(
  <div className="root">
   	<Callout/>
  </div>,
  document.getElementById('root')
);