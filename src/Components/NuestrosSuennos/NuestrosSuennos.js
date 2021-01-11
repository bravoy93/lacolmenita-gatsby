import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ShapeDivider from '../Custom/ShapeDivider/ShapeDivider';
import Icon from '@mdi/react';
import {ColmeIllustration} from '../Custom'
import {
  mdiTeach,
  mdiDramaMasks,
  mdiClipboardText,
  mdiSeal,
  mdiCharity,
  mdiHumanGreetingProximity,
  mdiSprout,
  mdiHumanGreeting,
  mdiWatch,
  mdiCached
} from '@mdi/js';

const SUENNOS = {
  firstRow: [
    {
      icon: mdiTeach,
      title: 'Educación',
      text: 'Contribuir a la educación ética y estética de sus públicos internos y externos, a través de puestas en escena novedosas de clásicos de la cultura cubana y universal, mediante el uso de códigos actuales compartidos por ellos.'
    },
    {
      icon: mdiDramaMasks,
      title: 'Arte',
      text: 'Fomentar el aprendizaje de las diversas manifestaciones artísticas en los miembros de la Compañía a través del juego y la participación de los mismos en el proceso de creación.'
    },
  ],
  secondRow: [
    {
      icon: mdiClipboardText,
      title: 'Proyectos de Vida',
      text: 'Formar apreciadores del arte que sean capaces de incorporar ésta a sus proyectos de vida futura.'
    },
    {
      icon: mdiSeal,
      title: 'Calidad',
      text: 'Ofrecer un producto pedagógico - cultural - promotor de salud de calidad a sus públicos objetivos.'
    },
    {
      icon: mdiHumanGreetingProximity,
      title: 'Promotores',
      text: 'Formar promotores que garanticen la réplica de la experiencia en el ámbito nacional e internacional.'
    },
    {
      icon: mdiCharity,
      title: 'Desarrollo de Sentimientos',
      text: 'Desarrollar sentimientos de solidaridad, amor al trabajo y unión familiar entre sus miembros.'
    }
  ],
  thirdRow: [
    {
      icon: mdiSprout,
      title: 'Cultura Ecológica',
      text: 'Fortalecer la cultura ecológica entre sus miembros a través de la educación en los principios de amor y conservación de la naturaleza y una alimentación sana y equilibrada.'
    },
    {
      icon: mdiHumanGreeting,
      title: 'Espacios de Participación',
      text: 'Propiciar espacios de participación que favorezcan la creatividad y capacidad de improvisación de niños(as) y adolescentes de ambos sexos.'
    },
    {
      icon: mdiWatch,
      title: 'Tiempo',
      text: 'Favorecer el uso adecuado del tiempo libre de los niños, niñas y adolescentes de ambos sexos que integran el proyecto, mediante la realización de actividades que les garanticen una recreación sana, segura y culta.'
    }
  ],
  fourthRow: [
    {
      icon: mdiCached,
      title: 'Autorregulación de Conducta',
      text: 'Potenciar el papel activo y autorregulador de la conducta de sus miembros, fundamentalmente de aquellos con necesidades especiales; con el fin de desarrollar estilos de vida sanos que garanticen su bienestar y calidad de vida.'
    },
  ],
}

export default function NuestrosSuennos() {

  const useStyles = makeStyles(({palette, breakpoints, spacing})=>
    ({
      nuestrosSuennosSection: {
        background: 'linear-gradient(45deg, #000, #0D0D0D)',
        color: '#FFF',
        padding: '100px 90px',        
        position: 'relative',
        width: '100%',
        [breakpoints.down('xs')]: {
          padding: '30px 16px'
        },
        '& h2': {
          paddingTop: spacing(3)
        },
        '& h3': {
          fontSize: 36,
          paddingBottom: spacing(2)
        },
        '& p': {
          lineHeight: 1.8
        },
        '& .colmenita-kid-asking': {
          position: 'absolute',
          bottom: 0,
          width: 300,
          zIndex: 2
        }
      },
      suennos: {
        paddingTop: 55,
        paddingBottom: 55
      },
      suennosContainer: {
        margin: '0 auto',        
        maxWidth: 1440,
      }
    })
  );

  const classes = useStyles();

  const Suenno = ({icon, title, text}) => <Grid item xs>
    <Icon size={3} path={icon} color='#FED10F'/>
    <Typography variant="h3">
      {title}
    </Typography>
    <Typography>
      {text}
    </Typography>
  </Grid>

  const SuennoRow = ({row}) => SUENNOS[row].map(({icon, title, text}, i) => <Suenno icon={icon} title={title} text={text} key={i}/>)

  return <>
    <CssBaseline />
    <div id='nuestros-suennos-section' className={classes.nuestrosSuennosSection}>      
      <Grid container className={classes.suennosContainer}>
        <Grid container spacing={6} className={classes.suennos}>
          <Grid item xs>
            <Typography variant='h2'>
              Día tras día trabajamos soñando con...
            </Typography>
          </Grid>
          <SuennoRow row='firstRow' />
        </Grid>
        <Grid container spacing={6} className={classes.suennos}>
          <SuennoRow row='secondRow' />
        </Grid>
        <Grid container spacing={6} className={classes.suennos}>
          <SuennoRow row='thirdRow' />
        </Grid>
        <Grid container spacing={6} className={classes.suennos}>
          <SuennoRow row='fourthRow' />
          <Grid item xs={4} alignItems="flex-end">
            <ColmeIllustration illustration='kidAsking'/>
          </Grid>
        </Grid>
      </Grid>      
      <ShapeDivider top invert color="#FFF" />
      <ShapeDivider color="#FFF" />
    </div>    
  </>

}