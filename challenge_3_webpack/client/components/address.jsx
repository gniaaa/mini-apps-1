import App from './app.jsx';
import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.userId,
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNumber: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
  }

  handleSubmit() {
    let url = 'http://127.0.0.1:3000/address';
    let options = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(url, options)
      .then(() => (this.props.nextPage()))
      .catch((err) => console.log('failed to save address details', err));
  }

  render() {
    const fields = ['line1', 'line2', 'city', 'state', 'zipcode'];
    return (
      <div className="forms">
        {fields.map(field => {
          return (
            <div>
              <label>{field}: </label>
              <input name={field} type="text" onChange={this.handleChange} />
              <br />
            </div>
          );
        })}
        <label>phone number: </label>
        <input name="phoneNumber" type="text" onChange={this.handleChange} />
        <br />
        <button type="submit" value="submit" onClick={this.handleSubmit}>next</button>
      </div>
    );
  }
};

export default Address;