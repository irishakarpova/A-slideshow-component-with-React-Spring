
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideShow from '../src/components/SlideShow'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme'

interface AppStateValue {
  serverData: Array <
    {
      id: string
      label: string
      path: string
    } 
  >
  containerMaxWidth: number
  containerRatio: number
  containerShadow: boolean
  imageShadow: boolean
  showNextPrev: boolean
}


export default (props: AppStateValue) : JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SlideShow {...props}/>
    </ThemeProvider>
  );
}

