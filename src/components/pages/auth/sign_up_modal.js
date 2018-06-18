import React from 'react'
import clientAuth from './client_auth'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { name: '', email: '', password: '', confirm_password: ''}
    }
  };
  
  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    })
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    clientAuth.signUp(this.state.fields).then(user => {
      this.setState({ fields: { name: '', email: '', password: '' } })
      if(user) {
        this.props.setUser(user);
      }
    })
  }
  
  render() {
    const { name, email, password, confirm_password } = this.state.fields;
    return (
      <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
        <div className="modal-body">
            <div className="form-group">
              <label htmlFor="name">User name</label>
              <input value={name} name="name" className="form-control" id="name" 
                      type="text" aria-describedby="name" placeholder="Pls enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">User email</label>
              <input value={email} name="email" className="form-control" id="email" 
                      type="text" aria-describedby="name" placeholder="Pls enter your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">User password</label>
              <input value={password} name="password" className="form-control" id="password" 
                      type="password" aria-describedby="password" placeholder="Pls enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">confirm password</label>
              <input value={confirm_password} name="confirm_password" className="form-control" id="confirm_password" 
                      type="password" aria-describedby="password" placeholder="Pls enter your password" />
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">SignUp</button>
        </div>
      </form>
  )}
}

export default SignUpModal