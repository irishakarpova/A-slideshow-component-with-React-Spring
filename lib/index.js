import React from 'react';
import ReactDOM from 'react-dom';
import App from '../trash/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null))), document.getElementById('root'));
reportWebVitals();