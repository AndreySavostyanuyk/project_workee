import arrow from '../../../source/images/arrow.svg'
import SortIcon from '../../../source/images/Sort.svg'
import './DateSort.scss';

const DateSort = () => {

  return (
    <span className="item_sortedButtonJobs">
      <img src={SortIcon}/>
      Date Sort
      <img src={arrow}/>
    </span>
  );
}

export default DateSort;