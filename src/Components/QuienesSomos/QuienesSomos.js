import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {ColmeIllustration} from '../Custom'

const useStyles = makeStyles(({palette, breakpoints, spacing})=>
    ({
      queEsLaColmenitaSection: {
        background: '#fff',
        color: palette.primary.main,
        padding: '40px 16px',
        // paddingTop: 40,
        position: 'relative',
        width: '100%',
        '& h2': {
          fontFamily: '"La Colmenita"',
          paddingBottom: spacing(4),
          textAlign: 'center',
          [breakpoints.only('xs')]: {
            fontSize: 70,
          }
        },
        '& p': {
          textAlign: 'right',
          padding: spacing(2),
          [breakpoints.down('sm')]: {
            textAlign: 'center',
          },
          '& a': {
            fontWeight: 900,
            color: palette.secondary.main,
            textDecoration: 'none',            
            transition: 'all 300ms',
            '&:hover': {
              // color: palette.secondary.light,
              textShadow: '0 1px 4px rgba(0,0,0,.2)',
            },
            '&:active': {
              color: palette.secondary.light,
              textShadow: '0 1px 4px rgba(0,0,0,.2)',
            }
          }
        },
        '& svg': {
          width: 230
        }
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
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8} align="center" justify="center">
          <Typography>
            Fundado el 14 de febrero de 1990, somos un proyecto pedagógico y artístico integrado, en su mayoría, por niñas y niños de 5 a 14 años que, jugando al teatro, la música y la danza, priorizamos la formación de valores humanos.
          </Typography>
          <Typography>
            Contamos con amplio repertorio en el cual la música desempeña un papel decisivo, sobre todo por ser las niñas y niños actores, los que sobre el escenario interpretan en vivo todas las canciones.
          </Typography>
          <Typography>
            Llevamos nuestra obra a los rincones más recónditos de la geografía cubana, priorizando las presentaciones en los poblados más necesitados. Así mismo visitamos centros de salud y escuelas especiales, e integramos niñas y niños con discapacidades mentales y físico motoras a nuestros espectáculos, como terapia especial de cariño.        </Typography>
          <Typography>
            En el 2007 La Colmenita fue declarada Embajadora de Buena Voluntad de la <a href="https://www.unicef.org" target="_blank" rel="noreferrer">UNICEF</a> como reconocimiento a la labor comunitaria y humana que desempeña para y con las niñas y niños.
          </Typography>
        </Grid>
        <Hidden smDown={true}>
          <Grid item lg={4} align="center" justify="center">
            <ColmeIllustration illustration='kidAsking'/>
          </Grid>
        </Hidden>        
      </Grid>
    </div>
  </>

}