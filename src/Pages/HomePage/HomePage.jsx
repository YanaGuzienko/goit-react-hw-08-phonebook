import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userSelector } from '../../redux/auth';
import ForLoginUser from '../../Components/ForLoginUser';

const HomePage = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <ForLoginUser />
      ) : (
        <p>
          Что бы просмотреть свою книгу контактов <NavLink to={{ pathname: '/login' }}>Войдите</NavLink> или{' '}
          <NavLink to={{ pathname: '/registration' }}>Зарегестрируйтесь</NavLink>
        </p>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: userSelector.getToken(state),
  };
};

export default connect(mapStateToProps)(HomePage);
