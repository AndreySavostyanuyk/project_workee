import { useEffect, useState } from 'react';
import User from '../Elements/User/User';
import Badge from '../Elements/Badge/BadgeItem';
import InputSearch from '../Elements/InputSearch/InputSearch';
import FilterButton from '../Elements/FilterButton/FilterButton';
import FilterPanel from '../Elements/FilterPanel/FilterPanel';
import './Companies.scss';

const Companies = ({ open, setOpen }) => {

  return (
    <div className="main_companies">
      <div className="companies_container">
        <User />
        <div className="container_item__header">
          <h3>Companies</h3>
          <Badge />
        </div>
        <div className="item_search">
          <InputSearch />
          <FilterButton setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

export default Companies;