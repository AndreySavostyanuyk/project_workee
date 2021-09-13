import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../../../source/images/filter.svg'
import './FilterButtonCandidates.scss';

const FilterButtonCandidates = ({ setOpenFilterPanelCandidates }) => {

  const handleDrawerOpen = () => {
    setOpenFilterPanelCandidates(true);
  };

  return (
    <span className="item_filterButtonCandidates" onClick={() => handleDrawerOpen()}>
      <img src={Filter}/>
      Filter
    </span>
  );
}

export default FilterButtonCandidates;