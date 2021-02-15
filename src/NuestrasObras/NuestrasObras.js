import React, { useState, useEffect, useRef, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Hidden } from "@material-ui/core";
import {LineDivider} from '../Components/Custom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Img from "gatsby-image";
import { HomeContext } from "../pages";
import styled from "@emotion/styled"

  

export default function NuestrasObras() {  
  const [obras, setObras] = useState([])
  const hexagonObraRef = useRef(null);
  const [obraHexagonHeight, setObraHexagonHeight] = useState(500);
  const {obrasImages} = useContext(HomeContext)

  const fetchData = () => {    
    setObras([
      {
        title: 'Abracadabra',
        description: 'Obra dedicada a los 5 héroes cubanos.',
        creationDate: '24-01-2011',
        image: obrasImages.abracadabra,
        pictures: [],
        youtubeUrl: ''
      },
      {
        title: 'La Cenicienta según Los Beatles',
        description: 'Adaptacion del original de la cenicienta a lo cubano.',
        creationDate: '24-01-2011',
        image: obrasImages.cenicienta,
        pictures: [],
        youtubeUrl: ''
      },
      {
        title: 'Ricitos Valdés y Los Tres Ositos',
        description: 'Obra cubana de Ricitos de Oros y los tres ositos.',
        creationDate: '24-01-2011',
        image: obrasImages.ricitos,
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
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,     
          width: '100%',
          height: 500,
          overflow: 'hidden',
          visibility: 'hidden',
          zIndex: 1,
          transition: 'all 300ms',
          '&:hover': {
            transform: 'scale(1.05)'
          },
          [breakpoints.only('xs')]: {
            marginTop: 0,
          },
          '& .obra-title-container': {
            padding: 20,
            position: 'absolute',
            zIndex: '1',            
            color: palette.secondary.light,
            visibility: 'visible',
            width: '100%',
            [breakpoints.up('xl')]: {
              fontSize: 65,
            },
            [breakpoints.down('sm')]: {
              fontSize: 30,
            },
            '& h3': {
              textOverflow: 'ellipsis',
              fontFamily: '"La Colmenita"',      
            },   
          },                     
          '& button': {
            position: 'absolute',
            zIndex: '1',
            color: palette.secondary.light,
            border: 'solid 2px',
            position: 'absolute',
            bottom: 'calc(50% - 100px)',
            visibility: 'visible',
            transition: 'all 300ms',
            '&:hover': {
              color: '#FFF'
            },
            [breakpoints.up('xl')]: {
              fontSize: 20,
              bottom: 'calc(50% - 150px)',
            },
            [breakpoints.only('xs')]: {
              display: 'none'
            }
          },
          '& .hexagon-inside': {
            width: '100%',
            height: 500,
            transform: 'rotate(120deg)',
            overflow: 'hidden',
            '& .hexagon-inside-inside': {          
              width: '100%',
              height: 500,              
              transform: 'rotate(120deg)',
              visibility: 'visible',
              display: 'flex',
              overflow: 'hidden',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              '& .obra-image': {    
                position: 'absolute!important',
                transform: 'rotate(120deg)',
                height: obraHexagonHeight,
                transition: 'all 300ms',
                inset: 0,
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
          marginBottom: -54,     
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
    },
    gridContainer: {
      margin: '0 auto',
      maxWidth: 1366,
      width: '100%',
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

  const StyledObra = styled.div`
    @media (max-width: 615px) {
      display: ${({ active }) => active ? '' : 'none'};      
      margin-bottom: -120px;
    }
  `

  const Obra = ({ title, image, active }) => 
    <StyledObra active={active}>
<div className="hexagon-obra" ref={hexagonObraRef}>
      <div className="obra-title-container">
      <Typography variant='h3'>
        {title}
      </Typography>
      </div>
      <Button variant="outlined">Ver Detalles</Button> 
      <div className="hexagon-inside">
        <div className="hexagon-inside-inside">
          <Img className="obra-image" fluid={image} alt={title} />
          <div className="hexagonImgOverlay" />
        </div>      
      </div>
    </div> 
    </StyledObra>    

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
      <Grid container justify="center" spacing={4} className={classes.gridContainer}>
        {obras.map(({title, image}, i) => 
        <Grid item xs={12} sm={6} md={4} align="center" key={i}>
            <Obra active={i === 0} title={title} image={image.childImageSharp.fluid}/>
        </Grid>
        )}
        <Typography classes={{root:classes.nuestrasObrasCta}}>
          Y mucho más! <a onClick={e => scrollToSection('nuestras-obras-section', -65, e)} href="#">Ver Todas</a>
        </Typography>        
      </Grid>      
    </div>
    </>

}