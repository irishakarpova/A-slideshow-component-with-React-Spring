
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideShow from './components/SlideShow'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SlideShow 
        imageRatio={props.containerRatio}
        containerMaxWidth={ props.container } 
        containerShadow={props.containerShadow}
        imageShadow={props.imageShadow}
        serverData={props.serverData} 
        showNextPtev={props.showNextPtev} />
    </ThemeProvider>
  );
}
export default App;
