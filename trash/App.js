
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideShow from '../src/components/SlideShow'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme'

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
        showNextPrev={props.showNextPrev} />
    </ThemeProvider>
  );
}
export default App;
