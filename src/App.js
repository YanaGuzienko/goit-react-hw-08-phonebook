import { connect } from 'react-redux';
import { operations, contactsSelector } from './redux/form-contacts';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { userSelector } from './redux/auth';

import Container from './Components/Container';
import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';
import AppBar from './Components/AppBar';
import scss from './Components/Container/Container.module.scss';
import Registration from './Pages/Registration/';
import Login from './Pages/Login';
import ForLoginUser from './Components/ForLoginUser';

const App = ({ userLogin }) => {
  return (
    <BrowserRouter>
      <Container>
        {userLogin ? (
          <>
            <ForLoginUser />
            <h1 className={scss.title}>Phonebook</h1>
            <Form />
            <h2 className={scss.title}>Contacts</h2>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <>
            <AppBar />
            <Switch>
              <Route exact path='/registration' component={Registration} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </>
        )}
      </Container>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector.getContacts(state),
    userLogin: userSelector.getToken(state),
  };
};

export default connect(mapStateToProps)(App);
