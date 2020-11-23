import React, {useRef, useState} from "react";
import { AppBar, Toolbar} from "@material-ui/core";
import ColmenitaIcon from "../Custom/ColmenitaIcon/ColmenitaIcon";
import NavItem from "./NavItem";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "gatsby";
import {RMenu} from "../Custom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer  from "@material-ui/core/SwipeableDrawer"
import List from '@material-ui/core/List';

export default function Nav({scrolled, pageSelected}) {
  const useStyles = makeStyles(({palette})=>
    ({
      gradient: {
        background: 'linear-gradient(45deg, #F19800 30%, #FED10F 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
      appBar: {
        backgroundColor: 'rgba(0,0,0,0)',
        maxHeight: '80px',
        transition: 'all 300ms ease-out',
        '&.scrolled': {
          backgroundColor: palette.primary.main
        }
      },
      navBar: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& ul': {
          listStyleType: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',        
        }
      },
      HamburgerMenu: {
        display: 'flex',        
        border: 'none',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '38px',
        background: 'transparent',
        padding: '0',
        margin: '4px',
        '& div': {
          width: '15px',
          height: '5px',
          borderRadius: '1px',
          backgroundColor: palette.secondary.light,
          '&:focus': {
            transform: 'scale(1.01)',
          }
        },
        '& div:nth-child(2)': {
          width: '32px',
        }        
      },
      list: {
        width: 250,
        backgroundColor: 'rgba(0,0,0,.7)',
        color: palette.secondary.light,
        height: '100%'
      },
      drawerPaper: {
        backgroundColor: palette.primary.main,
      },
      drawerFooter: {
        position: 'fixed',
        bottom: 0,
        margin: '0 auto',
        width: 250,
        padding: '24px 0',
        textAlign: 'center',
      },
      drawerCopyright: {
        textAlign: 'center',
        color: '#F2F2F2',
        opacity: '.8',
        fontSize: '14px',        
      },
      drawerList: {
        paddingTop: '20px',
        '& li': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 -5px 10px -1px rgba(0,0,0,.2)`,
          '& a': {
            textDecoration: 'none',
            padding: 8,
            width: '100%',
            textAlign: 'center',
            color: palette.secondary.light,
            fontSize: 24,
            '&:hover': {
            color: palette.primary.main,
            backgroundColor: palette.secondary.light,
          },
          }
        }
      },
      drawerLogoRow: {
        textAlign: 'center',
        background: `linear-gradient(#fff, ${palette.secondary.main})`,
      }
    })
  );
  const classes = useStyles();
  const qsRef = useRef(null);
  const [qsMenu, setQsMenu] = useState(false);
  const [openedDrawer, setOpenedDrawer] = useState(false)
  const xs = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (value) => {
    setOpenedDrawer(typeof value === 'boolean' ? !openedDrawer : value)
  };

  const HamburgerMenu = () =>
    <button className={classes.HamburgerMenu} onClick={toggleDrawer} onKeyPress={toggleDrawer} aria-label="Toggle Drawable Menu">
      <div />
      <div />
      <div />
    </button>

  const ToolbarMenu = () => xs ?
    <HamburgerMenu />
    : <ul>
        <NavItem to="/" label="Quiénes Somos" pageSelected={pageSelected} ref={qsRef}
                 onClick={()=> setQsMenu(!qsMenu)}/>        
        <NavItem to="/testimonios" label="Obras" pageSelected={pageSelected}/>
        <NavItem to="/eventos" label="Eventos" pageSelected={pageSelected}/>
        <NavItem to="/blog" label="Blog" pageSelected={pageSelected}/>
        <NavItem to="/contacto" label="Contacto" pageSelected={pageSelected}/>
      </ul>

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List className={classes.drawerList}>
        {[
          {to: '/', label: 'Inicio'},
          {to: '/', label: 'Quiénes Somos'},
          {to: '/testimonios', label: 'Obras'},
          {to: '/eventos', label: 'Eventos'},
          {to: '/blog', label: 'Blog'},
          {to: '/contacto', label: 'Contacto'}
          ].map( link => (
          <li key={link.label}>
            <Link to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </List>
      <div className={classes.drawerFooter}>
        <span className={classes.drawerCopyright}>La Colmenita de Cuba ©2020</span>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar className={`${classes.appBar} ${scrolled ? 'scrolled' : ''}`} elevation={scrolled ? 4 : 0} >
        <Toolbar>
          <Link to="/">
            <ColmenitaIcon dark size={scrolled ? 70 : 80}/>
          </Link>
          <nav className={classes.navBar}>
            <ToolbarMenu />
          </nav>
          <RMenu anchor={qsRef} value={qsMenu} y-nudge={40}/>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor='right'
            open={openedDrawer}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
          >
            <Link to="/" className={classes.drawerLogoRow}>
              <ColmenitaIcon dark variant="svg" size={180}/>
            </Link>
            {list()}
          </SwipeableDrawer>
    </React.Fragment>
  )
}