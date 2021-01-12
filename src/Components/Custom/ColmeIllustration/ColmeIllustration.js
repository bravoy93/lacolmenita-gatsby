import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import {
  kidAsking
} from './KidAsking';
import {
  beeReading,
  beeDramaMask,
  beeJourney,
  beeQuality,
  beeSinging,
  beeWriting,
  beeNature,
} from './bees';

const ILLUSTRATIONS = {
  kidAsking,
  beeReading,
  beeDramaMask,
  beeJourney,
  beeQuality,
  beeSinging,
  beeWriting,
  beeNature,
}

function ColmeIllustration({illustration, size, styleProps}) {
  const useStyles = makeStyles(()=>
    ({
      colmeIllustration: {
        width: size,
        ...styleProps
      },
    })
  );
  const classes = useStyles();

  return <div className={classes.colmeIllustration}>{ILLUSTRATIONS[illustration]}</div>
}

ColmeIllustration.defaultProps = {
  illustration: 'kidAsking',
  styleProps: {}
};

ColmeIllustration.propTypes = {
  illustration: PropTypes.oneOf(Object.keys(ILLUSTRATIONS)),
  size: PropTypes.number,
  styleProps: PropTypes.object
}

export default ColmeIllustration