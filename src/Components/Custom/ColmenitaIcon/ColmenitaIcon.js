import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import {noDescriptionLight, noDescriptionDark, withDescriptionLight, withDescriptionDark} from "./SvgPaths"

export default function ColmenitaIcon({size=60, dark, description, variant='pixel-image'}) {
  const useStyles = makeStyles(({palette})=>
    ({
      logoPixelImage: {
        width: size,
        height: size,
        transition: 'all 200ms ease-out'
      },
      logoSVG: {
        fontSize: size,
        transition: 'all 300ms',
        fill: '#000'
      }
    })
    )

  const classes = useStyles();
  
  //for pixel-image variant
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

  const logoSvgPaths = {
    light : {
      withDescription: withDescriptionLight,
      withNoDescription: noDescriptionLight
    },
    dark: {
      withDescription: withDescriptionDark,
      withNoDescription: noDescriptionDark
    }
  };
  
  const logoThemeMode = dark ? 'dark' : 'light';
  const logoDescriptionMode = description ? 'withDescription' : 'withNoDescription';

  // pixel image config
  const logoId = logoIds[logoThemeMode][logoDescriptionMode];
  let logoPixelImageSrc = `https://lacolmenita.imgix.net/${logoId}.png?width=${size}&height=${size}&format=webp`
  let logoPixelImage = <img src={logoPixelImageSrc} alt="Logo de la Colmenita" className={classes.logoPixelImage}/>

  // SVG image config
  const svgPath = logoSvgPaths[logoThemeMode][logoDescriptionMode]

  let logoSVG = 
    <SvgIcon className={classes.logoSVG} viewBox='0 0 512 512'>
      {svgPath}
    </SvgIcon>

  const logo = variant === 'svg' ? logoSVG : logoPixelImage

  return logo
}