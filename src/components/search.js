import React, { Component } from 'react'
import '../App.css'

class Search extends Component {
  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return(
      <form onSubmit={onSubmit}>
        { children }<input
          type="text"
          value={value}
          onChange={onChange} />
          <button type="submit">
            {children}
          </button>
      </form>
      );
  }
}

export default Search