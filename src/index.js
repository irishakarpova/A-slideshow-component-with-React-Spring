import React from 'react';
import ReactDOM from 'react-dom';
import App from '../trash/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

ReactDOM.render(
    <ThemeProvider  theme={theme}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
