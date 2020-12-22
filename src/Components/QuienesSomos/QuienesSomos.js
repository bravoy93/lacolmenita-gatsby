import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(({palette, breakpoints, spacing})=>
    ({
      queEsLaColmenitaSection: {
        background: '#fff',
        color: palette.primary.main,
        textAlign: 'center',
        height: 450,
        paddingTop: 40,
        position: 'relative',
        width: '100%',
        '& h2': {
          fontFamily: '"La Colmenita"',
          [breakpoints.only('xs')]: {
            fontSize: 70,
            padding: '100px 20px'
          }
        },
      },
    })
  );

export default function QuienesSomos() {
  const classes = useStyles();

  return <>
    <CssBaseline />
    <div id='quienes-somos-section' className={classes.queEsLaColmenitaSection}>
    <Typography variant='h2'>
      ¿Qué es La Colmenita?
    </Typography>
    </div>
  </>

}