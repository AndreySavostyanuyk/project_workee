import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../../../source/images/greenFilter.svg'
import './FilterButtonJobs.scss';

const FilterButtonJobs = ({ setOpenFilterPanelJobs }) => {
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filterJobs.filtersArrayJobs);

  const handleDrawerOpen = () => {
    dispatch({type:'ADD_ARRAY_JOBS', payload: filterArray});
    setOpenFilterPanelJobs(true);
  };

  return (
    <span className="item_filterButtonJobs" onClick={() => handleDrawerOpen()}>
      <img src={Filter}/>
      Filter
    </span>
  );
}

export default FilterButtonJobs;