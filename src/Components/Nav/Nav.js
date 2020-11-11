import React, {useRef} from "react";
import { AppBar, Toolbar} from "@material-ui/core";
import MenuIcon from "./MenuIcon";
import NavItem, {NavLinkStyles} from "./NavItem";
import { makeStyles } from '@material-ui/core/styles';
// import Button from "../Button/Button";
import Button from "@material-ui/core/Button"
import {Link} from "gatsby";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {RSpacer, RMenu} from "../Custom"

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
        transition: 'all 300ms ease-out',
        '&.scrolled': {
          backgroundColor: palette.primary.main
        }
      },
      navBar: {
        width: '100%',
        '& ul': {
          listStyleType: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }
      }
    })
    )

  const classes = useStyles();
  const qsRef = useRef(null);

  const [qsMenu, setQsMenu] = React.useState(false)

  return (
    <React.Fragment>
      <AppBar className={`${classes.appBar} ${scrolled ? 'scrolled' : ''}`} elevation={scrolled ? 4 : 0} >
        <Toolbar>
          <Link to="/">
            <MenuIcon dark size={60}/>
          </Link>
         <nav className={classes.navBar}>
           <ul>
             <NavItem to="/quienes-somos" label="Quiénes Somos" pageSelected={pageSelected} ref={qsRef}
                      onClick={()=> setQsMenu(!qsMenu)}/>
             <NavItem to="/noticias" label="Noticias" pageSelected={pageSelected}/>
             <NavItem to="/testimonios" label="Testimonios" pageSelected={pageSelected}/>
             <NavItem to="/eventos" label="Eventos" pageSelected={pageSelected}/>
             <NavItem to="/blog" label="Blog" pageSelected={pageSelected}/>
             <NavItem to="/contacto" label="Contacto" pageSelected={pageSelected}/>
           </ul>
         </nav>
          <RMenu anchor={qsRef} value={qsMenu} y-nudge={40}/>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}