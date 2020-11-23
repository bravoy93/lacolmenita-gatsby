import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import {noDescriptionLight} from "./SvgPaths"

export default function ColmenitaIcon({size=60, dark, description, variant='pixel-image'}) {
  const useStyles = makeStyles(({palette})=>
    ({
      logoPixelImage: {
        width: size,
        height: size,
        transition: 'all 200ms ease-out'
      },
      logoSVG: {
        fontSize: size
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

  const logoThemeMode = dark ? 'dark' : 'light';
  const logoDescriptionMode = description ? 'withDescription' : 'withNoDescription';
  const logoId = logoIds[logoThemeMode][logoDescriptionMode];

  let logoPixelImageSrc = `https://lacolmenita.imgix.net/${logoId}.png?width=${size}&height=${size}&format=webp`
  let logoPixelImage = <img src={logoPixelImageSrc} alt="Logo de la Colmenita" className={classes.logoPixelImage}/>

  // const LogoSvgPath = () => noDescriptionLight

  let logoSVG = 
    <SvgIcon className={classes.logoSVG} viewBox='0 0 512 512'>
      {noDescriptionLight}
    </SvgIcon>

  const logo = variant === 'svg' ? logoSVG : logoPixelImage

  return logo
}