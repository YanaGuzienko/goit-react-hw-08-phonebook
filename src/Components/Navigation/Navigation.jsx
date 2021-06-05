import { NavLink } from 'react-router-dom';

import scss from './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavLink exact to={{ pathname: '/registration' }}>
          <li>Registration</li>
        </NavLink>
        <NavLink exact to={{ pathname: '/login' }}>
          <li>Login</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
