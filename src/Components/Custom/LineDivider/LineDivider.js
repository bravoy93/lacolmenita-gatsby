import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function LineDivider({width, color, spacing}) {
  const useStyles = makeStyles(({spacing: _spacing}) =>
  ({
    lineDivider: {
      width,
      backgroundColor: color,
      height: 2,
      margin: `${_spacing(spacing)}px auto`,
    }})
  );

  const classes = useStyles();

  return <div className={classes.lineDivider} />
}

LineDivider.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  spacing: PropTypes.number
};

LineDivider.defaultProps = {
  width: 66,
  color: '#F7A81F',
  spacing: 2
};

export default LineDivider