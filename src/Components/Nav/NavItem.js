import React from "react";
import {Link} from "gatsby";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: {
    textDecoration: 'none',
    fontSize: '18px',
    color: theme.palette.secondary.main,
    borderRadius: '3px',
    padding: '8px 16px',
    margin: '0 4px',
    transition: 'all 300ms ease-in',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main}40`,
      borderColor: theme.palette.secondary.main,
      transition: 'backgroundColor 600ms ease-out',
      borderBottom: `solid 2px ${theme.palette.secondary.main}`,       
    }
  },
  selectedMaterial: {
    paddingTop: '19px',
    paddingBottom: '19px',
    borderBottom: `solid 2px ${theme.palette.secondary.main}`,   
    borderRadius: '0',
    backgroundColor: 'rgba(0,0,0,0)!important',
    transition: 'all 600ms ease-out',
  },
  selected: {
    backgroundColor: `${theme.palette.secondary.main}40`,
    borderColor: theme.palette.secondary.main,
    transition: 'backgroundColor 600ms ease-out',
    borderBottom: `solid 2px ${theme.palette.secondary.main}`,      
  },
  })
);

export default function NavItem({label, to, pageSelected}) {
  const classes = useStyles();
  const selected = pageSelected === to;

  return <Link to={to} className={`${classes.root} ${selected ? classes.selected : null}`}>{label}</Link>
}

export { useStyles as NavLinkStyles }