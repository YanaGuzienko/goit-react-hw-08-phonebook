import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsSelector } from './redux/form-contacts';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { userSelector, authOperations } from './redux/auth';

import Container from './Components/Container';
import AppBar from './Components/AppBar';
// import scss from './Components/Container/Container.module.scss';
import Registration from './Pages/Registration/';
import Login from './Pages/Login';
// import ContactsBook from './Components/ContactsBook';
import ForLoginUser from '../src/Components/ForLoginUser';
import PrivateRoute from '../src/Routes/PrivateRoutes.jsx';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    console.log(this.props.onGetCurrentUser());
    return (
      <BrowserRouter>
        <Container>
          {/* <AppBar />
          {this.props.isAuthenticated ? (
            <ContactsBook />
          ) : (
            <Switch>
              <Route exact path='/registration' component={Registration} />
              <Route exact path='/login' component={Login} />

              <PrivateRoute path='/contactsbook' component={ContactsBook} />
            </Switch>
          )} */}
          <AppBar />
          <Switch>
            <Route exact path='/registration' component={Registration} />
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/contactsbook' component={ContactsBook} /> */}

            <PrivateRoute path='/contactsbook' component={ForLoginUser} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector.getContacts(state),
    isAuthenticated: userSelector.getToken(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
