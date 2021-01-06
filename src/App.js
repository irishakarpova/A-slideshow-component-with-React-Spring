
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideShow from './components/SlideShow'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <SlideShow/>
    </ThemeProvider>
  );
}
export default App;
