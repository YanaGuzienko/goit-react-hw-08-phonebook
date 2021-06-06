import { connect } from 'react-redux';
import { userSelector, authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';

import ContactsBook from '../ContactsBook';

import scss from './ForLoginUser.module.scss';

const ForLoginUser = ({ name, logOut }) => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to={{ pathname: '/contacts' }}>
            <li>Контакты</li>
          </NavLink>
        </ul>
      </nav>
      <div className={scss.container}>
        <h1>Welcome {name}</h1>
        <button type='button' className={scss.button} onClick={logOut}>
          LogOut
        </button>
      </div>

      <ContactsBook />
    </>
  );
};

const mapStateToProps = (state) => ({
  name: userSelector.getName(state),
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForLoginUser);
