import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {ColmeIllustration} from '../Components/Custom'
import Layout from '../Components/Layout/Layout'

const useStyles = makeStyles(({palette, breakpoints})=>
    ({
      pageNotFound: {
        background: `linear-gradient(white, #FED10F)`,
        color: '#000',
        padding: 20,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '& h1': {          
          [breakpoints.only('xs')]: {
            fontSize: 60,
          }
        },
        '& h2': {
          fontSize: 420,
          padding: 20,
          [breakpoints.only('xs')]: {
            fontSize: 150,
          }
        },
        '& svg': {
          width: 190
        }
      },
      btnGradient: {
        background: 'linear-gradient(45deg, #F19800 30%, #FED10F 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'black',
        fontFamily: 'Asap',
        fontWeight: 700,
        marginTop: 40,
        height: 48,
        padding: '0 30px',
      }
    })
  );

export default function NotFoundPage() {
  const classes = useStyles();

  return <Layout pageSelected="/404" coloredNavbar={true}>
      <CssBaseline />
      <div className={classes.pageNotFound}>      
      <Grid container justify="center" alignItems="center" align="center">        
        <Grid item container justify="center" >
          <Typography variant="h1" component="h2">
            404
          </Typography>
          <Hidden xsDown={true}>
            <ColmeIllustration illustration='kidAsking'/>
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">
            Página no encontrada
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.btnGradient} size="large" href="/">
            Página principal
          </Button>
        </Grid>
      </Grid>
    </div>
    </Layout>

}