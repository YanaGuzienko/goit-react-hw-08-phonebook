import axios from 'axios';
import {
  addToContactsRequest,
  addToContactsSuccess,
  addToContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './form-contacts-actions';

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get(`http://localhost:3001/contacts/`);
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addToContacts = ({ name, number }) => async (dispatch) => {
  const contact = {
    name: name,
    number: number,
  };
  dispatch(addToContactsRequest());

  try {
    const { data } = await axios.post('http://localhost:3001/contacts', contact);

    dispatch(addToContactsSuccess(data));
  } catch (error) {
    dispatch(addToContactsError(error));
  }
};

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`http://localhost:3001/contacts/${contactId}`);

    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addToContacts, deleteContact, fetchContacts };
