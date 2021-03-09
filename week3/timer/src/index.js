import React from 'react';
import { render } from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import App from './App'
import configureStore from './redux/store';
import initialState from './redux/initialState';

const store = configureStore(initialState);

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render( <App /> ,document.getElementById('root') );


