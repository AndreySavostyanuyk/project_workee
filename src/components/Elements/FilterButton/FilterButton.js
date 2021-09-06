import { useEffect, useState } from 'react';
import Filter from '../../../source/images/filter.svg'
import './FilterButton.scss';

const FilterButton = ({ setOpen }) => {
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <span className="item_filterButton" onClick={() => handleDrawerOpen()}>
      <img src={Filter}/>
      Filter
    </span>
  );
}

export default FilterButton;