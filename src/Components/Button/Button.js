import React from "react";
import MaterialButton from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gradient: {
    background: 'linear-gradient(45deg, #F19800 30%, #FED10F 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  navbar: {
    // backgroundColor: '#F19800',
    color: 'white',
    '&:hover': {
      backgroundColor: '#F1980094'
    }
  }
});

export default function Button({children, type=''}) {
  const classes = useStyles();
  return (
    <MaterialButton className={classes[type]}>
      {children}
    </MaterialButton>
  )
}