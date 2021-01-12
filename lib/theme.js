'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('@material-ui/core/styles');

var theme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'light',
    contrastThreshold: 3,
    tonalOffset: 0.2
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 950,
      xl: 1400
    }
  }

});

exports.default = theme;