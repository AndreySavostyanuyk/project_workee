import { Avatar } from '@material-ui/core'
import avatar from '../../../source/images/avatar.jpg'
import Arrow from '../../../source/images/arrow.svg'
import './User.scss';

const User = () => {
  return (
    <div className="item_user">
      <Avatar alt="Andry Baker" src={avatar} />
      <span>example@gmail.com</span>
      <img src={Arrow} />
    </div>
  );
}

export default User;