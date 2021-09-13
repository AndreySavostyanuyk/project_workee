import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BadgeItem.scss';

const BadgeItem = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const clonefilterArray = useSelector(state => state.filters.cloneFiltersArray)
  const filters = useSelector(state => state.filters.filtersArray)
  console.log(filters)

  const array = [
    {filterName:'All', size:filters.length},
    {filterName:'Active', size:filters.length},
    {filterName:'Blocked', size:0}
  ]
  
  const toggle = (index) => {
    setActive(index)
  }
  
  return (
    <div className="main_badge">
      { array.map((value, index) =>
        <div 
          key={index}
          className={active === index ? 
            `badge${index} focus_badge` : `badge${index}`
          } 
          onClick={() => toggle(index)}
        >
          <span 
            className={active === index ? 
              `badge_text${index} focus_text` : `badge_text${index}`
            }
          >
            {value.filterName}
          </span>
          <span 
          className={active === index ? 
            `badge_size${index} focus` : `badge_size${index}`
          }
          >
            {value.size}
          </span>
        </div>
      )
      }
    </div>
  );
}

export default BadgeItem;