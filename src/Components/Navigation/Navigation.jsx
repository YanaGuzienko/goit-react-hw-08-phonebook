import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSelector } from '../../redux/auth';

import scss from './Navigation.scss';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul>
        <NavLink exact to={{ pathname: '/' }}>
          <li>Главная</li>
        </NavLink>
        {isAuthenticated && (
          <NavLink exact to={{ pathname: '/contactsbook' }}>
            <li>Контакты</li>
          </NavLink>
        )}

        {/* <NavLink exact to={{ pathname: '/registration' }}>
          <li>Registration</li>
        </NavLink>
        <NavLink exact to={{ pathname: '/login' }}>
          <li>Login</li>
        </NavLink> */}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: userSelector.getToken(state),
  };
};

export default connect(mapStateToProps)(Navigation);
