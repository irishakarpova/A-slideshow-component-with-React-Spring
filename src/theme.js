import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#C0C3C6',
        main: '#2A3743',
        dark: '#404E5C'
      },
      secondary: {
        main: '#C69A50',
        light: '#fafafa',
      },
      text: {
        primary: "#2A3743", 
        secondary: "#93969a"
      }, 
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 850,
        lg: 950,
        xl: 1400,
      },
    },

  });

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  export default theme
