import React from "react";
import { AppBar, Toolbar} from "@material-ui/core";
import MenuIcon from "./MenuIcon";
import NavItem, {NavLinkStyles} from "./NavItem";
import { makeStyles } from '@material-ui/core/styles';
import Button from "../Button/Button";
import RSpacer from "../Custom/RSpacer"
import {Link} from "gatsby"

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
        backgroundColor: scrolled ? palette.primary.main : 'rgba(0,0,0,0)',
        transition: 'all 100ms ease-out'
      }
    })
    )

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} elevation={scrolled ? 4 : 0} >
        <Toolbar>
         <Link to="/">
           <MenuIcon dark size={scrolled ? 60 : 80}/>
         </Link>
         <RSpacer />
         <NavItem to="/" label="Quiénes Somos" pageSelected={pageSelected}/>
         <NavItem to="/noticias" label="Noticias" pageSelected={pageSelected}/>
         <NavItem to="/testimonios" label="Testimonios" pageSelected={pageSelected}/>
         <NavItem to="/eventos" label="Eventos" pageSelected={pageSelected}/>
         <NavItem to="/blog" label="Blog" pageSelected={pageSelected}/>
         <NavItem to="/contacto" label="Contacto" pageSelected={pageSelected}/>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}