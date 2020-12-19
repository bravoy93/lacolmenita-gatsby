import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"

const SHAPES = {
  triangle: () => <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>,
  tilt: () => <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>,
  arrow: () => <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>,
  split: () => <path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" className="shape-fill"></path>,
  book: () => <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>,
  sky: () => <path d="" className="shape-fill"></path>,
  waves: () => <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>,
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