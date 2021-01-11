
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideShow from './components/SlideShow'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SlideShow 
        containerRatio={props.containerRatio}
        containerMaxWidth={ props.container } 
        containerShadow={props.containerShadow}
        imageShadow={props.imageShadow}
        serverData={props.serverData} 
        showNextPrev={props.showNextPrev} />
    </ThemeProvider>
  );
}
export default App;
