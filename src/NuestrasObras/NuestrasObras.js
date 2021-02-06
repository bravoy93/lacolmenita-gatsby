import React, { useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden } from "@material-ui/core";
import {LineDivider} from '../Components/Custom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

  

export default function NuestrasObras() {  
  const [obras, setObras] = useState([])
  const hexagonObraRef = useRef(null);
  const [obraHexagonHeight, setObraHexagonHeight] = useState(500);

  const fetchData = () => {    
    setObras([
      {
        title: 'Abracadabra',
        description: 'Obra dedicada a los 5 héroes cubanos.',
        creationDate: '24-01-2011',
        imageSrc: 'https://lacolmenita.imgix.net/i7Iusd7.jpg?format=webp',
        pictures: [],
        youtubeUrl: ''
      },
      {
        title: 'La Cenicienta según Los Beatles',
        description: 'Adaptacion del original de la cenicienta a lo cubano.',
        creationDate: '24-01-2011',
        imageSrc: 'https://lacolmenita.imgix.net/Jz931rJ.jpg?format=webp',
        pictures: [],
        youtubeUrl: ''
      },
      {
        title: 'Ricitos Valdés y Los Tres Ositos',
        description: 'Obra cubana de Ricitos de Oros y los tres ositos.',
        creationDate: '24-01-2011',
        imageSrc: 'https://lacolmenita.imgix.net/bXyZKAZ.jpg?format=webp',
        pictures: [],
        youtubeUrl: ''
      },
    ])
  }

  useEffect(() => {
    setObraHexagonHeight(hexagonObraRef.current && (hexagonObraRef.current.clientWidth + 100) || 500)
    fetchData();    
    return () => {
      setObraHexagonHeight(hexagonObraRef.current && (hexagonObraRef.current.clientWidth + 100) || 500)
      fetchData(); 
    }
  },[hexagonObraRef]);

   

  const useStyles = makeStyles(({palette, breakpoints, spacing})=>
    ({
      nuestrasObrasSection: {
        background: '#fff',
        color: palette.primary.main,
        padding: '100px 90px',
        position: 'relative',
        width: '100%',
        [breakpoints.down('xs')]: {
          padding: '30px 16px'
        },    
        '& h2': {
          textAlign: 'center',
          [breakpoints.only('xs')]: {
            fontSize: 70,
          }
        },
        '& .hexagon-obra': {
          marginTop: 50,     
          width: '100%',
          height: obraHexagonHeight,
          overflow: 'hidden',
          visibility: 'hidden',
          zIndex: 1,
          transition: 'all 300ms',
          '&:hover': {
            transform: 'scale(1.05)'
          },
          '& .hexagon-inside': {
            width: '100%',
            height: obraHexagonHeight,
            transform: 'rotate(120deg)',
            overflow: 'hidden',
            '& .hexagon-inside-inside': {          
              width: '100%',
              height: obraHexagonHeight,              
              transform: 'rotate(120deg)',
              visibility: 'visible',
              display: 'flex',
              overflow: 'hidden',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              '& img': {    
                position: 'absolute',
                transform: 'rotate(120deg)',
                height: obraHexagonHeight,
                transition: 'all 300ms',
                '&:hover': {
                  height: obraHexagonHeight + 10,
                }                      
              },
              '& .hexagonImgOverlay': {
                width: '100%',
                height: '100%',
                background: 'linear-gradient(300deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, .2), rgba(0, 0, 0, .5), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
                position: 'absolute',
                left: 0,
                top: 0,
              },
              '& h3': {
                fontFamily: '"La Colmenita"',
                color: palette.secondary.light,
                transform: 'rotate(120deg)',
                [breakpoints.up('xl')]: {
                  fontSize: 65
                },
                [breakpoints.only('sm')]: {
                  fontSize: 30
                }
              },              
              '& button': {
                color: palette.secondary.light,
                border: 'solid 2px',
                position: 'absolute',
                bottom: '60%',
                left: '5%',
                transform: 'rotate(120deg)',
                transition: 'all 300ms',
                '&:hover': {
                  color: '#FFF'
                },
                [breakpoints.up('xl')]: {
                  left: '10%',
                  fontSize: 20
                }
              },
            },          
          },        
        },
      },
      nuestrasObrasDescription: {
        margin: '0 auto',
        padding: '0 12px',
        color: '#000',
        fontFamily: '"Segoe Script"',
        fontSize: 20,
        maxWidth: 800,          
        textAlign: 'center',
        [breakpoints.only('xs')]: {
          fontSize: 18,
        }
      },
      nuestrasObrasCta: {
        fontSize: 25,
        paddingTop: spacing(4),
        '& a': {
          fontWeight: 900,
          color: palette.secondary.main,
          textDecoration: 'none',            
          transition: 'all 300ms',
          '&:hover': {
            textShadow: '0 1px 4px rgba(0,0,0,.2)',
            fontSize: 27,
          },
          '&:active': {
            color: palette.secondary.light,
            textShadow: '0 1px 4px rgba(0,0,0,.2)',
          }
        }
      }
    })
  );

  const scrollToSection = (section, additional, e) => {
    e.preventDefault();
    const anchor = document.getElementById(`${section}`).offsetTop + additional;
    window.scroll({
      top: anchor,
      left: 0,
      behavior: 'smooth'
    });
  }

  const annosColmenita = () => new Date().getFullYear() - 1990;

  const HexagonElement = ({children, actionElement}) => 
    <div className="hexagon-obra" ref={hexagonObraRef}>
      {actionElement}
      <div className="hexagon-inside">
        <div className="hexagon-inside-inside">          
          {children}
        </div>      
      </div>
    </div> 

  const classes = useStyles();

  return <>
    <CssBaseline />
    <div id='nuestras-obras-section' className={classes.nuestrasObrasSection}>
      <Typography variant='h2'>
        Nuestras Obras
      </Typography>
      <LineDivider />
      <Typography classes={{root:classes.nuestrasObrasDescription}} >
        Más de {annosColmenita()} años han dejado una estela de quehacer melífero y de amor traducido en más de 30 obras
      </Typography>  
      <Grid container justify="center" spacing={4}>
        {obras.map(({title, imageSrc}, i) => 
        <Grid item xs={12} sm={6} md={4} align="center" key={i}>
          <Hidden xsDown={false} smDown={true}>
          <HexagonElement>
            <img src={imageSrc} alt={`Imagen de obra ${title}`} />
            <div className="hexagonImgOverlay" />
            <Typography variant='h3'>
              {title}
            </Typography>
            <Button variant="outlined">Ver Detalles</Button>  
          </HexagonElement>
          </Hidden>          
        </Grid>
        )}
        <Typography classes={{root:classes.nuestrasObrasCta}}>
          Y mucho más! <a onClick={e => scrollToSection('nuestras-obras-section', -65, e)} href="#">Ver Todas</a>
        </Typography>        
      </Grid>      
    </div>
    </>

}