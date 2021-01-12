import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Hidden } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ShapeDivider from '../Custom/ShapeDivider/ShapeDivider';
import {ColmeIllustration} from '../Custom'

const beesStandardSize = 100;

const SUENNOS = {
  firstRow: [
    {
      title: 'Educación',
      text: 'Contribuir a la educación ética y estética de sus públicos internos y externos, a través de puestas en escena novedosas de clásicos de la cultura cubana y universal, mediante el uso de códigos actuales compartidos por ellos.',
      illustration: 'beeReading',
      size: beesStandardSize,
      colsConfig: {sm: 6}
    },
    {
      title: 'Arte',
      text: 'Fomentar el aprendizaje de las diversas manifestaciones artísticas en los miembros de la Compañía a través del juego y la participación de los mismos en el proceso de creación.',
      illustration: 'beeDramaMask',
      size: beesStandardSize + 20,
      colsConfig: {sm: 6}
    },
  ],
  secondRow: [
    {
      title: 'Proyectos de Vida',
      text: 'Formar apreciadores del arte que sean capaces de incorporar ésta a sus proyectos de vida futura.',
      illustration: 'beeJourney',
      size: beesStandardSize - 10,
      colsConfig: {sm: 6}
    },
    {
      title: 'Calidad',
      text: 'Ofrecer un producto pedagógico - cultural - promotor de salud de calidad a sus públicos objetivos.',
      illustration: 'beeQuality',
      size: beesStandardSize - 15,
      colsConfig: {sm: 6}
    },
    {
      title: 'Promotores',
      text: 'Formar promotores que garanticen la réplica de la experiencia en el ámbito nacional e internacional.',
      illustration: 'beeReading', //pendiente
      size: beesStandardSize,
      colsConfig: {sm: 6}
    },
    {
      title: 'Desarrollo de Sentimientos',
      text: 'Desarrollar sentimientos de solidaridad, amor al trabajo y unión familiar entre sus miembros.',
      illustration: 'beeReading', //pendiente
      size: beesStandardSize,
      colsConfig: {sm: 6}
    }
  ],
  thirdRow: [
    {
      title: 'Cultura Ecológica',
      text: 'Fortalecer la cultura ecológica entre sus miembros a través de la educación en los principios de amor y conservación de la naturaleza y una alimentación sana y equilibrada.',
      illustration: 'beeNature', //pendiente
      size: beesStandardSize - 20,
      colsConfig: {sm: 12}
    },
    {
      title: 'Espacios de Participación',
      text: 'Propiciar espacios de participación que favorezcan la creatividad y capacidad de improvisación de niños(as) y adolescentes de ambos sexos.',
      illustration: 'beeSinging',
      size: beesStandardSize + 15,
      colsConfig: {sm: 6}
    },
    {
      title: 'Tiempo',
      text: 'Favorecer el uso adecuado del tiempo libre de los niños, niñas y adolescentes de ambos sexos que integran el proyecto, mediante la realización de actividades que les garanticen una recreación sana, segura y culta.',
      illustration: 'beeWriting',
      size: beesStandardSize + 5,
      colsConfig: {sm: 6}
    }
  ],
  fourthRow: [
    {
      title: 'Autoregulación de Conducta',
      text: 'Potenciar el papel activo y autorregulador de la conducta de sus miembros, fundamentalmente de aquellos con necesidades especiales; con el fin de desarrollar estilos de vida sanos que garanticen su bienestar y calidad de vida.',
      illustration: 'beeReading', //pendiente
      size: beesStandardSize,
      colsConfig: {sm: 12}
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
          paddingTop: spacing(3),
          [breakpoints.down('md')]: {
            paddingTop: spacing(1),
            paddingBottom: spacing(1),
            textAlign: 'center'
          },
        },
        '& h3': {
          fontSize: 36,
          paddingTop: beesStandardSize + spacing(2), //para garantizar el espacio de las abjeitas
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
        paddingBottom: 55,
        margin: 0,
        [breakpoints.down('sm')]: {
          paddingTop: 0,
          paddingBottom: 0
        },
      },
      suennosContainer: {
        margin: '0 auto',        
        maxWidth: 1440,
        [breakpoints.down('sm')]: {
          paddingBottom: spacing(5)
        }
      }
    })
  );

  const classes = useStyles();

  const Suenno = ({illustration, title, text, size, colsConfig}) => 
    <Grid item xs={12} sm={colsConfig.sm} md>
      <ColmeIllustration illustration={illustration} size={size} styleProps={{position: 'absolute'}}/>
      <Typography variant="h3">
        {title}
      </Typography>
      <Typography>
        {text}
      </Typography>
    </Grid>

  /**
   * 
   * @param {row} string => Row name in the collection 
   * @param {colsConfig} Array => config of columns
   */

  const SuennoRow = ({row}) => 
    SUENNOS[row].map(({illustration, title, text, size, colsConfig}, i) => 
      <Suenno illustration={illustration} 
        title={title} 
        text={text} 
        size={size} 
        colsConfig={colsConfig}
        key={i}/>
      )

  return <>
    <CssBaseline />
    <div id='nuestros-suennos-section' className={classes.nuestrosSuennosSection}>      
      <Grid container className={classes.suennosContainer}>
        <Grid container spacing={6} className={classes.suennos}>
          <Grid item xs={12} md>
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
          <Hidden smDown={true}>
            <Grid item xs={4}>
              <ColmeIllustration illustration='kidAsking'/>
            </Grid>
          </Hidden>          
        </Grid>
      </Grid>      
      <ShapeDivider top invert color="#FFF" />
      <ShapeDivider color="#FFF" />
    </div>    
  </>

}