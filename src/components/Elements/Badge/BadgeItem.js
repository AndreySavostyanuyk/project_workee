import { useEffect, useState } from 'react';
import './BadgeItem.scss';

const BadgeItem = () => {
  const [active, setActive] = useState(0);

  const array = [
    {filterName:'All', size:80},
    {filterName:'Active', size:80},
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