import React, { createRef } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)
CustomEase.create('bezier', '0.36, 0.33, 0, 1')

export default class Loader extends React.Component {

  constructor (props) {
    super(props)
    this.ref = createRef()
    this.tl = {
      load: gsap.timeline(),
      pagechange: gsap.timeline({paused: true}),
    }
  }

  componentDidMount () {
    this.tl.load
      .to(this.ref.current, {
        scaleX: 0,
        delay: .5,
        duration: 1,
        ease: 'bezier',
        onComplete: () => this.ref.current.style.display = 'none'
      })
      .add(this.props.refresh)

    this.tl.pagechange
      .to(this.ref.current, {display: 'block'})
      .to(this.ref.current, {
        scaleX: 1,
        duration: 1,
      }, 0)
      .add(() => this.tl.load.restart())
  }

  render () {
    return (
      <>
        <div ref={ this.ref } className="site-loader"></div>
      </>
    )
  }

}