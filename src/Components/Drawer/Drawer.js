import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "gatsby";

export default function Drawer ({anchor}) {
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
    })
  );
  const classes = useStyles();

  const DrawerLink = ({to, label}) => 
    <li>
      <Link to={to}>
        {label}
      </Link>
    </li>

  return (
    <Drawer anchor="bottom" open={open} onClose={toggleDrawer(anchor, false)}>
      <DrawerLink to="/" label="Yoe" />
    </Drawer>
  )
}