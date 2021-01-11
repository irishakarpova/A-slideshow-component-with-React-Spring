import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import {images} from './images'

ReactDOM.render(
    <ThemeProvider  theme={theme}>
      <React.StrictMode>
          <App 
            serverData={images}
            containerMaxWidth={600}
            containerRatio={1.4} 
            containerShadow={true}
            imageShadow={true}
            showNextPrev={true}
          />
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
