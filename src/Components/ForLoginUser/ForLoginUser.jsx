import { connect } from 'react-redux';
import { userSelector, authOperations } from '../../redux/auth';

import scss from './ForLoginUser.module.scss';

const ForLoginUser = ({ name, logOut }) => {
  return (
    <>
      <div className={scss.container}>
        <h1>Welcome {name}</h1>
        <button type='button' className={scss.button} onClick={logOut}>
          LogOut
        </button>
      </div>
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
