import { useEffect, useState } from 'react';
import './BadgeItem.scss';

const BadgeItem = () => {
  const [active, setActive] = useState(0);

  const array = [
    {text:'All', size:80},
    {text:'Active', size:80},
    {text:'Blocked', size:0}
  ]
  
  const toggle = (index) => {
    setActive(index)
  }
  
  return (
    <div className="main_badge">
      { array.map((value, index) =>
        <div 
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
            {value.text}
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