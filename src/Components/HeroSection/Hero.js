import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Icon from '@mdi/react'
import { mdiDramaMasks, mdiArrowRight } from '@mdi/js';
import Mask from '../Custom/Masks/Mask';

const useStyles = makeStyles(({palette, breakpoints, spacing})=>
    ({
      heroSection: {
        overflow: 'hidden',
        height: '100vh',
        width: '100%',
        paddingTop: 100, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'end',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://lacolmenita.imgix.net/D0IoDXY.jpg?format=webp")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        textAlign: 'center',
        '& h1': {
          fontFamily: '"La Colmenita"',
          color: palette.secondary.light,
          [breakpoints.only('xs')]: {
            fontSize: 70,
            padding: '100px 20px'
          }
        },
        '& p': {
          padding: '28px 65px',
          color: '#FFF',
          fontFamily: '"Segoe Script"',
          fontSize: 20
        },
        '& button': {
          color: palette.secondary.light,
          padding: '8px 30px',
          border: `${palette.secondary.light} 2px solid`,
          fontWeight: 600,
          fontSize: 16,
          transition: "all 200ms ease-in",
          '& .hero-btn': {
            display: '',
            marginLeft: spacing(2)
          },
        },
        '& button:hover': {          
          color: '#FFF',
          '& .hero-btn': {
            display: 'none'
          },
        },        
      },
      heroMask: {
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
      }
    })
  );

  


export default function Hero() {
  const classes = useStyles()
  const [maskWidth, setMaskWidth] = React.useState(0);
  const onResizeUpdate = React.useEffect(()=>{
    // window.addEventListener('resize', () => console.log('resized!', window));
    setMaskWidth(window.innerWidth);
    window.addEventListener('resize', () => setMaskWidth(window.innerWidth));
    return () => setMaskWidth(window.innerWidth)
  }, [])

  // const onMount = React.useEffect(()=>{
    
  // })

  return <React.Fragment>
    <CssBaseline />
    <div className={classes.heroSection}>
      <Typography variant="h1">
        La Colmenita de Cuba
      </Typography>
      <Hidden xsDown={true}>
        <Typography>
          La Colmenita es un proyecto pedagógico y artístico donde niñas y niños jugando al teatro, la música y la danza, priorizan la formación de valores humanos.
        </Typography>
      </Hidden>
      <Button>
        Nuestras Obras 
        {/* <Icon path={mdiArrowRight}
        title="Nuestras Obras"
        className="hero-btn"
        size={1}
        color="#FED10F"/> */}
      </Button>
      <div className={classes.heroMask}>
        <Mask size={maskWidth}/>
      </div>      
    </div>
    {/* <div className={classes.parent}>
      <img className={classes.img} src="https://lacolmenita.imgix.net/D0IoDXY.jpg?format=webp" alt="Logo de la Colmenita"/>
      <div className={classes.overlay}/>      
      <div className={classes.content}> 
      <Typography variant="h1">
        La Colmenita
      </Typography>
      </div>
    </div> */}
  </React.Fragment>
}