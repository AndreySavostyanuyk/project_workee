import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../Elements/User/User';
import Badge from '../Elements/Badge/BadgeItem';
import InputSearch from '../Elements/InputSearch/InputSearch';
import FilterButtonJobs from '../Elements/FilterButton/FilterButtonJobs/FilterButtonJobs';
import TableJobs from '../Elements/Table/TableJobs/TableJobs';
import DateSort from '../Elements/DateSort/DateSort';
import Download from '../../source/images/download.svg';
import './Jobs.scss';

const Jobs = ({ setOpenFilterPanelJobs }) => {
  const dispatch = useDispatch()
  const arrayJobs = useSelector(state => state.filterJobs.filtersArrayJobs);

  return (
    <div className="main_companies">
      <div className="companies_container">
        <User />
        <div className="container_item__header">
          <div className="item_heading">
            <h3>All Jobs </h3>
            <p>({arrayJobs.length})</p>
          </div>
          <Badge />
        </div>
        <div className="item_search">
          <div className="item_filter">
            <InputSearch />
            <FilterButtonJobs setOpenFilterPanelJobs={setOpenFilterPanelJobs} />
            <DateSort />
          </div>
          <div className='item_download'>
            <img src={Download} />
            <p>Download CSV</p>
          </div>
        </div>
        <div className="item_table">
          <TableJobs />
        </div>
      </div>
    </div>
  );
}

export default Jobs;