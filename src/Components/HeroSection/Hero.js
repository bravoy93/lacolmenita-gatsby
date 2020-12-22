import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden, CssBaseline } from "@material-ui/core";
import ShapeDivider from "../Custom/ShapeDivider/ShapeDivider";
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

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
            padding: '10px 20px',
            lineHeight: 0.9,
          }
        },
        '& .hero-description': {
          padding: '28px 65px',
          color: '#FFF',
          fontFamily: '"Segoe Script"',
          fontSize: 20,
          // [breakpoints.only('xs')]: {
          //   fontSize: 18,
          //   padding: 16
          // }
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
        '& .hexagon': {          
          width: 200,
          height: 100,
          transform: 'rotate(90deg)',
          margin: '0 200px',
          overflow: 'hidden',
          visibility: 'hidden',
          position: 'absolute',
          bottom: 40,
          zIndex: 1,
          cursor: 'pointer',
          '& .hexagon-inside': {
            width: 200,
            height: 100,
            transform: 'rotate(120deg)',
            overflow: 'hidden',
            '& .hexagon-inside-inside': {          
              width: 200,
              height: 100,
              background: 'rgba(0,0,0,.3)',
              transform: 'rotate(120deg)',
              visibility: 'visible',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              '& span': {     
                position: 'absolute',
                transform: 'rotate(30deg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: palette.secondary.light,
                lineHeight: 0,
                '& .btn-text': {
                  fontSize: '14px!important',
                  margin: -2,
                  position: 'absolute',
                  bottom: -15,
                  '&:hover': {
                    color: '#FFF',
                  },               
                },
                '& .btn-icon': {
                  position: 'absolute',
                  top: 15
                },                
              },
              '& .btn-hexgon': {
                transform: 'rotate(120deg)',
                fill: palette.secondary.light
              },
            },          
          },        
        },        
      },
    })
  );

  


export default function Hero() {
  const classes = useStyles()

  return <React.Fragment>
    <CssBaseline />
    <div className={classes.heroSection}>
      <Typography variant="h1">
        La Colmenita de Cuba
      </Typography>
      <Hidden xsDown={true} implementation="css">
        <Typography className='hero-description'>
          La Colmenita es un proyecto pedagógico y artístico donde niñas y niños jugando al teatro, la música y la danza, priorizan la formación de valores humanos.
        </Typography>
        <Button>
          Nuestras Obras 
          {/* <Icon path={mdiArrowRight}
          title="Nuestras Obras"
          className="hero-btn"
          size={1}
          color="#FED10F"/> */}
        </Button>
      </Hidden>      
      <div className="hexagon" onClick={() => alert('CLicked!')}>
        <div className="hexagon-inside">
          <div className="hexagon-inside-inside">
            <svg className="btn-hexgon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.6 99.6"><path d="M20.8,69.8a4.1,4.1,0,0,0,0,4l25,43.6a4,4,0,0,0,3.5,2H99.6a4,4,0,0,0,3.4-2l25.3-43.8a4.1,4.1,0,0,0,0-4l-25-43.7a4,4,0,0,0-3.5-2L49.5,24a3.8,3.8,0,0,0-3.4,2L20.8,69.8m-1.8-1L44.3,25a6,6,0,0,1,5.2-3l50.3-.2a6,6,0,0,1,5.2,3l25.1,43.7a6.4,6.4,0,0,1,0,6h0l-25.3,43.8a6.2,6.2,0,0,1-5.2,3H49.3a5.8,5.8,0,0,1-5.2-3L19,74.8A6.4,6.4,0,0,1,19,68.8Z" transform="translate(-18.2 -21.8)"/></svg>
            <span>
              <Typography className="btn-text">CONÓCENOS <br/>MEJOR</Typography>              
              <Icon className='btn-icon' path={mdiArrowDown} size={1} color="#FED10F"/>
            </span>
          </div>          
        </div>
      </div>
      <ShapeDivider color="#FFF"/>
    </div>
  </React.Fragment>
}