import App from './app.jsx';
import React from 'react';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.userId,
      creditCardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      billingZipcode: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
  }

  handleSubmit() {
    let url = 'http://127.0.0.1:3000/payment';
    let options = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(url, options)
      .then(() => (this.props.nextPage()))
      .catch((err) => console.log('failed to save payment details', err));
  }

  render() {
    return (
      <div className="forms">
        <div>
          <label>credit card #: </label>
          <input name="creditCardNumber" type="text" onChange={this.handleChange} />
          <br />
          <label>expiry (mm/yy): </label>
          <input name="expiryMonth" type="text" onChange={this.handleChange} size="2" /> /
          <input name="expiryYear" type="text" onChange={this.handleChange} size="2" />
          <br />
          <label>cvv: </label>
          <input name="cvv" type="text" onChange={this.handleChange} />
          <br />
          <label>billing zipcode: </label>
          <input name="billingZipcode" type="text" onChange={this.handleChange} />
          <br />
        </div>
        <button type="submit" value="submit" onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
};

export default Payment;