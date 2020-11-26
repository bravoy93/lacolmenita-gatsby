import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
  heroSection: {
    height: '200vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      fontFamily: '"La Colmenita"'
    }
  }
});

export default function Hero() {
  const classes = useStyles()

  return <React.Fragment>
    <CssBaseline />
    <div className={classes.heroSection}>
    <Typography variant="h1">
      La Colmenita
    </Typography>
  </div>
  </React.Fragment>
}