import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line no-undef
);

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
}
