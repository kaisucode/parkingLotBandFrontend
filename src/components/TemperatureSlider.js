import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const foo = 20;
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: foo,
  },
  thumb: {
    height: foo * 1,
    width: foo * 1,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: (-1),
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 18,
      width: 36,
      // backgroundColor: 'currentColor',
      backgroundColor: 'transparent',
      border: 'red 2px solid', 
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: foo,
    // borderRadius: foo / 2,
  },
  rail: {
    height: foo,
    // borderRadius: foo / 2,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
    </span>
  );
}

export default function TemperatureSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography gutterBottom>Temperature / Chaoticness</Typography>
      <PrettoSlider 
        // ThumbComponent={AirbnbThumbComponent}
        valueLabelDisplay="auto" 
        aria-label="pretto slider"
        defaultValue={20} 
        marks

        step={10}
        min={0}
        max={100}

        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
      />

    </div>
  );
}
