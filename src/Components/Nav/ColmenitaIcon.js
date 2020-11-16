import React from "react";
import { makeStyles } from '@material-ui/core/styles';

export default function ColmenitaIcon({size=60, dark, description}) {
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
  
  const logoIds = {
    light : {
      withDescription: 't1fAPd4',
      withNoDescription: '0ApEG16'
    },
    dark: {
      withDescription: 'gaTifPU',
      withNoDescription: 'xQmREuC',
    }
  };

  const logoThemeMode = dark ? 'dark' : 'light';
  const logoDescriptionMode = description ? 'withDescription' : 'withNoDescription';
  const logoId = logoIds[logoThemeMode][logoDescriptionMode];

  let logo = `https://lacolmenita.imgix.net/${logoId}.png?width=${size}&height=${size}&format=webp`

  return <img src={logo} alt="Logo de la Colmenita" className={classes.root}/>
}