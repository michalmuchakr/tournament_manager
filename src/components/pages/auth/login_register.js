import React, { Component } from 'react';
import clientAuth from './client_auth';

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class LogInRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { 
        name: '', 
        email: '', 
        password: '',
        confirm_password: ''
      },
      loginView: true
    }
  };
  
  onInputChange(e) {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.register()
  }
  
  register() {
    clientAuth.signUp(this.state.fields).then(user => {
      this.setState({ fields: { name: '', email: '', password: '' } })
      user &&
        this.props.setUser(user)
    })
  }

  login() {
    clientAuth.logIn(this.state.fields).then(user => {
      this.setState({ fields: { email: '', password: '' } })
      user &&
        this.props.setUser(user)
    })
  }

  render() {
    return (
      <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
        {/* Nav tabs 
          <ul className='nav nav-pills nav-fill mb-4' role='tablist'>
            <li className='nav-item'>
              <a className='nav-link active' data-toggle='tab' role='tab'
                  href='#login'name='register'> Login </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' data-toggle='tab' role='tab'
                  href='#register' name='register'> Register </a>
            </li>
          </ul>
        */}

        {/* Tab panes */}
        <div className='tab-content'>
            {/* Login form */}
            <div className='form-group'>
              <h3 className='h5 mb-3'>Welcome back, player</h3>
              <label htmlFor='email-log sr-only'>User email</label>
              <input value={this.state.email} name='email' className='form-control' id='email-log' 
                      type='text' aria-describedby='name' placeholder='Pls enter your Email' />
            </div>
            <div className='form-group'>
              <label htmlFor='passwordpassword-login sr-only'>User password</label>
              <input value={this.state.password} name='password' className='form-control' id='password-login' 
                      type='password' aria-describedby='password' placeholder='Pls enter your password' />
              <button type='submit' className='btn btn-primary btn-block mt-4'>Log in</button>
            </div>

            {/* Reg form */}
            {/* <div className='tab-pane col-11 m-auto active' id='register' role='tabpanel'>
              <h3 className='h5 mb-3'>Welcome, new user</h3>

              <div className="form-group">
                <label htmlFor="name">User name</label>
                <input value={this.state.name} name="name" className="form-control" id="name" 
                        type="text" aria-describedby="name" placeholder="Pls enter your name" />
              </div>
              <div className='form-group'>
                <label htmlFor='email-reg'>User email</label>
                <input value={this.state.email} name='email' className='form-control' id='email-reg'
                       type='text' aria-describedby='name' placeholder='Pls enter your Email' />
              </div>
              <div className='form-group'>
                <label htmlFor='pass-reg'>User password</label>
                <input value={this.state.password} name='password' className='form-control' id='pass-reg' 
                       type='password' aria-describedby='password' placeholder='Pls enter your password' />
                <button type='submit' className='btn btn-primary mt-4 btn-block'>SignUp</button>
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">confirm password</label>
                <input value={this.state.confirm_password} name="confirm_password" className="form-control" id="confirm_password" 
                        type="password" aria-describedby="password" placeholder="Pls enter your password" />
              </div>
            </div> */}
         
        </div>
      </form>
  )}
}

export default LogInRegister;