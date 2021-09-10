import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../../source/images/filter.svg'
import './FilterButton.scss';

const FilterButton = ({ setOpenFilterPanel }) => {
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filters.filtersArray);

  const handleDrawerOpen = () => {
    dispatch({type:'ADD_ARRAY', payload: filterArray});
    setOpenFilterPanel(true);
  };

  return (
    <span className="item_filterButton" onClick={() => handleDrawerOpen()}>
      <img src={Filter}/>
      Filter
    </span>
  );
}

export default FilterButton;