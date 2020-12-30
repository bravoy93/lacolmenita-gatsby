import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"

const SHAPES = {
  triangle: () => <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>,
  tilt: () => <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>,
  arrow: () => <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>,
  split: () => <path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" className="shape-fill"></path>,
  book: () => <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>,
  sky: () => <path d="M1200,11.1l-4.4-.2h0A68.6,68.6,0,0,0,1150,28.3a18.4,18.4,0,0,0-25.4-5.9,16.4,16.4,0,0,0-5.5,5.3,49.2,49.2,0,0,0-67.2,15.7,19.1,19.1,0,0,0-26.8,1l-.7.9A89.4,89.4,0,0,0,904.9,79.1a17.5,17.5,0,0,0-11.3.7,31.5,31.5,0,0,0-44.4-5.6,32.3,32.3,0,0,0-7.3,7.9A47.2,47.2,0,0,0,785,94.3a22.4,22.4,0,0,0-29-12.7,22.2,22.2,0,0,0-12.4,12.2,14.9,14.9,0,0,0-17.3,1,13.9,13.9,0,0,0-17.8-8.3,9.7,9.7,0,0,0-2.3,1.1,57.2,57.2,0,0,0-80.1-5A25.9,25.9,0,0,0,594,76.7a18.2,18.2,0,0,0-35.2-9.5,12.8,12.8,0,0,0-16.9,6.1v.2a38.2,38.2,0,0,0-54,2.7,37.6,37.6,0,0,0-7.5,12.2,27.8,27.8,0,0,0-34.7-6.5,66.1,66.1,0,0,0-109,6.9,19.9,19.9,0,0,0-27.6,2.8,40.5,40.5,0,0,0-54.4,11.7,21.8,21.8,0,0,0-11.9-3.5h-.2a35.2,35.2,0,0,0-47.3-15.3l-.8.4A91.2,91.2,0,0,0,80.6,70.1a27.6,27.6,0,0,0-18-6.4h-.8A39.9,39.9,0,0,0,15.9,30.6,38.3,38.3,0,0,0,0,36.9V120H1200Z" className="shape-fill"/>,
  waves: () => <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>,
  mountains: () => <><g opacity="0.65"><path d="M0,.5v120H333C210.5,93.4,61.6,28.6,0,.5Z" className="shape-fill"/><path d="M1068,52.3c-29.3,13.2-97.4,44-156.8,68.2H1200V16.6C1153.5,19.8,1106.9,34.8,1068,52.3Z" className="shape-fill"/></g><path d="M1200,4.3c-120.9-4.7-281.3,55.9-350.4,74-112,29.3-151.7,33.4-326.4,0C306,36.7,211.2,4.9,62.4,19.9c-19.3,2-40.3,4.7-62.4,7.9v92.7H1200Z" className="shape-fill"/><path d="M1200,107.4a360.9,360.9,0,0,1-78-14.1C1005,57.7,931.2,75.4,865.2,91c-96.2,22.7-187.2,32.3-318,8.7-136.5-24.8-180-18.5-328.8-3.5C105.5,107.6,29.9,82.7,0,70.1v50.4H1200Z" className="shape-fill" opacity="0.65"/><path d="M1026,22.8C917.4-9,831.5,82.9,705.6,91c-64.5,4.1-170.8-43.3-282-62.4-84-14.5-210,11-363.6,42.2-18,3.6-38.3,4.8-60,4.1v45.6H1200V93.9S1128.7,52.9,1026,22.8Z" className="shape-fill" opacity="0.65"/><g opacity="0.65"><polygon points="1178 120.5 1179.6 120.5 1179.6 118.6 1178 120.5" className="shape-fill"/><path d="M1113.2,120.5c-85-43.6-178.5-29.8-288.8-52.6C687.6,39.6,630,37.3,502.8,74.8,393,107.2,20.7,120.4,20.4,120.5Z" className="shape-fill"/></g></>
}

const DEFAULT_SHAPE_CONFIG = {
  variant: 'triangle',
  width: '100%',
  height: {
    xl: 105,
    lg: 105,
    md: 105,
    sm: 90,
    xs: 50
  }
}

export default function ShapeDivider({
    variant,
    width,
    height,
    top,
    dark,
    color,
    invert,
    flip,
    children
  }) {

  const sidePosition = top ? 'top' : 'bottom';

  const xAxisTransform = invert ? 'rotateX(180deg)' : '';  
  const yAxisTransform = flip ? 'rotateY(180deg)' : '';
  const transform = xAxisTransform || yAxisTransform ? {transform: `${xAxisTransform} ${yAxisTransform}` } : undefined

  const shapeHeight = breakpoint => typeof height === 'object'
    ? height[breakpoint] || DEFAULT_SHAPE_CONFIG.height[breakpoint]
    : height;

  const useStyles = makeStyles(({palette, breakpoints}) =>
    ({
      shapeDivider: {
        position: 'absolute',
        [sidePosition]: 0, //bottom by default
        left: 0,
        width,
        overflow: 'hidden',
        lineHeight: 0,
        ...transform,
        '& svg': {
          position: 'relative',
          display: 'block',
          width: 'calc(100% + 1.3px)',
          height: typeof height === 'object' ? height.lg : height,
          [breakpoints.only('xl')]: {
            height: shapeHeight('xl'),
          },
          [breakpoints.only('md')]: {
            height: shapeHeight('md'),
          },
          [breakpoints.only('sm')]: {
            height: shapeHeight('sm'),
          },
          [breakpoints.only('xs')]: {
            height: shapeHeight('xs'),
          }
        },
        '& .shape-fill': {
          fill: color || (dark ? palette.primary.main : palette.secondary.main)
        },
      }
    })
    )

  const classes = useStyles();
  
  return (    
    <div className={classes.shapeDivider}>
      {
        children || //@children => custom svg shape divider
        <svg data-name="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
         {SHAPES[variant]()}
        </svg>
      }            
    </div>
  )
}

ShapeDivider.defaultProps = DEFAULT_SHAPE_CONFIG;
ShapeDivider.propTypes = {
  variant: PropTypes.oneOf(Object.keys(SHAPES)),
}