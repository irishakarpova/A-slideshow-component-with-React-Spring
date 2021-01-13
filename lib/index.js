import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { images } from './images';
ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, {
  containerRatio: 1.2,
  containerMaxWidth: 800,
  containerShadow: true,
  imageShadow: true,
  serverData: images,
  showNextPrev: true
}))), document.getElementById('root'));
reportWebVitals();