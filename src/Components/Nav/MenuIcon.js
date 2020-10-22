import React from "react";
import { makeStyles } from '@material-ui/core/styles';

export default function MenuIcon({size=60, dark}) {
  const useStyles = makeStyles(({palette})=>
    ({
      root: {
        width: size,
        height: size,
        transition: 'all 200ms ease-out'
      }
    })
    )

  const classes = useStyles();

  const logoLight = `https://lacolmenita.imgix.net/0ApEG16.png?width=${size}&height=${size}&format=webp`;
  const logoDark = `https://lacolmenita.imgix.net/xQmREuC.png?width=${size}&height=${size}&format=webp`;

  let logo = dark? logoDark : logoLight

  return <img src={logo} alt="Logo de la Colmenita" className={classes.root}/>
}