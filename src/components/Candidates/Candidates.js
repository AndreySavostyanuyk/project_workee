import { useEffect, useState } from 'react';
import User from '../Elements/User/User';
import Badge from '../Elements/Badge/BadgeItem';
import InputSearch from '../Elements/InputSearch/InputSearch';
import FilterButtonCandidates from '../Elements/FilterButton/FilterButtonCandidates/FilterButtonCandidates';
import TableCandidates from '../Elements/Table/TableCandidates/TableCandidates';
import './Candidates.scss';

const Candidates = ({ setOpenFilterPanelCandidates }) => {

  return (
    <div className="main_companies">
      <div className="companies_container">
        <User />
        <div className="container_item__header">
          <h3>Candidates</h3>
        </div>
        <div className="item_search">
          <InputSearch />
          <FilterButtonCandidates setOpenFilterPanelCandidates={setOpenFilterPanelCandidates} />
        </div>
        <div className="item_table">
          <TableCandidates />
        </div>
      </div>
    </div>
  );
}

export default Candidates;