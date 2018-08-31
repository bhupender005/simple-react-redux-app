import React, { Component } from 'react';

export default class Header extends Component{

  componentDidMount() {
    console.log("I mounted !");
  }

  render () {
    return (
      <h1>Hello {this.props.children}!</h1>
    )
  }
}
