
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SlideShow from './components/SlideShow'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

interface AppStateValue {
  serverData: Array <
    {
      id: string
      label: string
      path: string
    } 
  >
  containerRatio: number
  containerMaxWidth: number
  containerShadow: boolean
  imageShadow: boolean
  showNextPrev: boolean
}

export default (props: AppStateValue) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SlideShow {...props}/>
    </ThemeProvider>
  );
}

