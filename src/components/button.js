import React, { Component } from 'react'
import '../App.css'

class Button extends Component {
  render() {
    const { onClick, className = '', children } = this.props;

    return(
      <button
        onClick={onClick}
        className={className}
        type="button"
       >
        {children}
       </ button>
      );
  }
}

export default Button