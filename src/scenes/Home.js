import React from 'react'

export default class Home extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillUnmount () {
    this.props.load()
  }

  render () {
    return (
      <>
        <div className="tpl-home">
          Home
        </div>
      </>
    )
  }
}