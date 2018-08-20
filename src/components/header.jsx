import React, { Component } from 'react';

export default class Header extends React.Component{
  state = {
    user: 'Bhupender'
  }

  componentDidMount() {
    console.log("I mounted !");
  }

  render () {
    return (
      <h1>Hello {this.state.user}!</h1>
    )
  }
}
