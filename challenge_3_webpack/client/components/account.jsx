import App from './app.jsx';
import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
  }


  handleSubmit() {
    let url = 'http://127.0.0.1:3000/account';
    let options = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((value) => this.props.updateUserId(value))
      .then(() => this.props.nextPage())
      .catch((err) => console.log('failed to save account details', err));
  }

  render() {
    const fields = ['name', 'email', 'password'];
    return (
      <div className="forms">
        {fields.map(field => {
          return (
            <div>
              <label>{field}: </label>
              <input name={field}
                type={field === 'password' ? 'password' : 'text'}
                onChange={this.handleChange} />
              <br />
            </div>
          );
        })}
        <button type="submit"
          value="submit"
          onClick={this.handleSubmit}>
          next
          </button>
      </div>
    );
  }
};

export default Account;