import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {serverUrl} from './config'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}> 
    <ThemeProvider  theme={theme}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
