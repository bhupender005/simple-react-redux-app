import React, {Component} from 'react';

class Body extends Component {

  state = {
    headerText : 'Bhupender'
  };

  handleChange = (e) => {
    console.log(e, e.target.name, e.target.value);
    let {name, value} = e.target;
    this.setState({name: value});
  };

  submitHeading = () => {
    alert(this.state.headerText);
  }

  render () {
    return (
      <div>
        <input name="headerText" type="text" value={this.state.headerText} onChange={(e) => this.handleChange(e)} />
        <input type="button" onClick={this.submitHeading} value="Submit" />
      </div>
    );
  }
}

export default Body;
