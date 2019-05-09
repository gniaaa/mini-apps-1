import React from "react";
import ReactDOM from "react-dom";
import Account from './account.jsx';
import Address from './address.jsx';
import Payment from './payment.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0,
      userId: null
    }

    this.nextPage = this.nextPage.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
  }

  nextPage() {
    var newStatus = (this.state.status + 1) % 4;
    this.setState({
      status: newStatus
    });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  updateUserId(id) {
    this.setState({
      userId: id
    });
  }

  render() {
    return (
      <div>
        <h1>multi-step checkout</h1>
        {this.state.status === 0 && <button className="checkout-btn" onClick={this.nextPage}>CHECKOUT</button>}
        {this.state.status > 0 && <div>Please fill out your details:</div>}
        {this.state.status === 1 && <Account handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          nextPage={this.nextPage} updateUserId={this.updateUserId} />}
        {this.state.status === 2 && <Address handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          nextPage={this.nextPage} userId={this.state.userId} />}
        {this.state.status === 3 && <Payment handleChange={this.handleChange} handleSubmit={this.handleSubmit}
          nextPage={this.nextPage} userId={this.state.userId} />}
      </div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));

export default App;