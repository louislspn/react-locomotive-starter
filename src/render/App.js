import React, { createRef } from 'react'
import Loader from './../components/Loader'
import Router from './Router'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.router = createRef()
    this.loader = createRef()
    this.refresh = this.refresh.bind(this)
    this.load = this.load.bind(this)
  }

  refresh () {
    this.router.current.setState({loading: false})
  }

  load () {
    if(!this.router.current.state.loading) {
      this.router.current.setState({loading: true})
      this.loader.current.tl.pagechange.restart()
    }
  }

  render () {

    return (
      <>
        <Loader ref={ this.loader } refresh={ this.refresh } />
        <Router ref={ this.router } load={ this.load } />
      </>
    )
  }
}