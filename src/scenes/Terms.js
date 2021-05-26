import React from 'react'
import { Link } from 'react-router-dom'

export default class Terms extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.load()
  }

  render () {
    return (
      <>
        <div className="tpl-terms">
          Terms
        </div>
      </>
    )
  }
}