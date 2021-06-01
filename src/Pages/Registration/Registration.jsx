import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import scss from './Registration.module.scss';

class Registration extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <Form onSubmit={this.handleOnSubmit}>
          <div className={scss.form}>
            <Form.Group className={scss.lable} controlId='validationCustom01'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type='text'
                placeholder='First name'
                name='name'
                value={name}
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Form.Group className={scss.lable} controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={this.handleOnChange}
              />
              <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className={scss.lable} controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            {/* <Form.Group className={scss.lable} controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group> */}
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Registration);
