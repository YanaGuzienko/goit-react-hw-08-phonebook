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

const App = ({ addContacts, contacts }) => {
  const formSubmitHandler = (data) => {
    const newName = contacts.some((contact) => contact.name.toLowerCase().includes(data.name.toLowerCase()));

    if (newName) {
      return alert(`${data.name} is already in contacts`);
    } else {
      addContacts(data);
    }
  };

  return (
    <BrowserRouter>
      <Container>
        <AppBar />

        <Switch>
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/login' component={Login} />
        </Switch>

        <h1 className={scss.title}>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2 className={scss.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return { contacts: contactsSelector.getContacts(state) };
};

const mapDispatchToProps = (dispath) => {
  return {
    addContacts: (data) => dispath(operations.addToContacts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
