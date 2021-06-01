import { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import scss from './Login.module.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    const { value, type } = e.target;
    this.setState({ [type]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Form onSubmit={this.handleOnSubmit}>
          <div className={scss.form}>
            <Form.Group className={scss.lable} controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' value={email} onChange={this.handleOnChange} />
              <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className={scss.lable} controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' value={password} onChange={this.handleOnChange} />
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
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
