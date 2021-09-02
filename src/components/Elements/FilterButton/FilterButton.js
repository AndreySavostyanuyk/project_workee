import Filter from '../../../source/images/filter.svg'
import './FilterButton.scss';

const FilterButton = () => {
  return (
    <span className="item_filterButton">
      <img src={Filter}/>
      Filter
    </span>
  );
}

export default FilterButton;