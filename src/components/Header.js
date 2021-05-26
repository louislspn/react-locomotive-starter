import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/terms">Terms & conditions</Link>
        </header>
      </>
    )
  }
}