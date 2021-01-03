
import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import {useStyles} from './style'


export default function LinearDeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.rootProgress}>
      <LinearProgress />
    </div>
  );
}