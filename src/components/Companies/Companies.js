import User from '../Elements/User/User';
import Badge from '../Elements/Badge/BadgeItem';
import './Companies.scss';

const Companies = () => {
  return (
    <div className="main_companies">
      <div className="companies_container">
        <User />
        <div className="container_item__header">
          <h3>Companies</h3>
          <Badge />
        </div>
      </div>
    </div>
  );
}

export default Companies;