// REACT CORE IMPORT
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// LOCOMOTIVE PROXY
import setProxy from './Proxy'

// UI RENDER COMPONENT
import Header from './../components/Header'
import Home from './../scenes/Home'
import Terms from './../scenes/Terms'

export default class Router extends React.Component {

  constructor (props) {
    super(props)
    this.locomotive = null
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.locomotive = setProxy('[data-scroll-container]')
  }

  componentDidUpdate () {
    if(!this.state.loading) this.locomotive.update()
  }
  
  render () {

    return (
      <>
        <BrowserRouter>
          <div className='site-content'>
            { !this.state.loading && <Header /> }
            <div data-scroll-container>
              { !this.state.loading && 
                <Switch>
                  <Route
                    exact path='/'
                    component={() => <Home load={ this.props.load } />}
                  />
                  <Route
                    exact path='/terms'
                    component={() => <Terms load={ this.props.load } />}
                  />
                </Switch>
              }
            </div>
          </div>
        </BrowserRouter>
      </>
    )
  }

}