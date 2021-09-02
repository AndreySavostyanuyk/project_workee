import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../source/images/Logo.svg'
import Companies from '../../source/images/Companies.svg'
import Candidates from '../../source/images/Candidates.svg'
import Reports from '../../source/images/Reports.svg'
import Jobs from '../../source/images/Jobs.svg'
import './SidePanel.scss';

const SidePanel = () => {
  const [active, setActive] = useState(1);
  const array = [
    {src: Companies, text:'Jobs', link:'/jobs'},
    {src: Companies, text:'Companies', link:'/companies'},
    {src: Candidates, text:'Candidates', link:'/candidates'},
    {src: Reports, text:'Reports', link:'/problemReports'},
    {src: Jobs, text:'Settings', link:'/settings'},
  ]

  const toggle = (index) => {
    setActive(index)
  }

  return (
    <div className="main_SidePanel">
      <img 
        src={Logo}
        className="item_img"
      />
      <ul className="menu">
        { array.map((value, index) => 
          <Link to={value.link}>
            <li 
            key={index}
            className={active === index ? 
              `menu_item${index} focus` : `menu_item${index}`
            }
            onClick={() => toggle(index)}
            >
              <img 
                src={value.src}
              />
                <span>
                  {value.text}
                </span>
            </li>
          </Link>
          )
        }
      </ul>
    </div>
  );
}

export default SidePanel;
