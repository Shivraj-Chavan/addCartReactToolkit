import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Comp/Main';
import { Provider } from 'react-redux';

import store from './Store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  <Main/>
  </Provider>
);

