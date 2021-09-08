import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './RangeSlider.scss';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const valuetext = (value) => {
  return `${value}°C`;
}

const RangeSlider = ({ setArrayVacancies, arrayVacancies }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setArrayVacancies(newValue)
  };

  return (
    <div className="item_rangeSlider">
      <Slider
        value={arrayVacancies}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

export default RangeSlider;