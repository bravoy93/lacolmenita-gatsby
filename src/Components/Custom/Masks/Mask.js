import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { bottomHexagonLight,bottomHexagonDark } from "./SvgPaths"

export default function Mask({size=1366, dark}) {
  const useStyles = makeStyles(() =>
    ({
      maskSVG: {
        fontSize: size ? size : '100vw',
        height: 141,
        overflowX: 'hidden',
        // position: 'absolute'
      }
    })
    )

  const classes = useStyles();
  
  const maskSvgPaths = {
    light : bottomHexagonLight,
    dark: bottomHexagonDark
  };  
  const maskThemeMode = dark ? 'dark' : 'light';
  const svgPath = maskSvgPaths[maskThemeMode]

  return (
    <SvgIcon className={classes.maskSVG} viewBox='0 0 1366 141'>
      {svgPath}
    </SvgIcon>
  )
}