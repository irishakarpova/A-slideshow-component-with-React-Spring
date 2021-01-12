import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useStyles } from '../style';
export default function LinearDeterminate() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.rootProgress
  }, /*#__PURE__*/React.createElement(LinearProgress, null));
}