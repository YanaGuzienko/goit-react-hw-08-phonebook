import { Component } from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';
import scss from './Form.module.scss';
import { operations, contactsSelector } from '../../redux/form-contacts';

class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: shortid.generate(),
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleOnSubmit} className={scss.form}>
          <label className={scss.lable}>
            Name
            <input
              className={scss.input}
              type='text'
              name='name'
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title='Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan и т.п.'
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={scss.lable}>
            Number
            <input
              className={scss.input}
              type='tel'
              name='number'
              value={this.state.number}
              pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
              title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
              required
              onChange={this.handleChange}
            />
          </label>
          <button type='submit' className={scss.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector.getContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(operations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
