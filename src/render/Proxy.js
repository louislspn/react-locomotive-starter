import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)

export default function setProxy(container) {
  const locomotive = new LocomotiveScroll({
    el: document.querySelector(container),
    smooth: true
  })

  locomotive.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy(container, {
    scrollTop(value) {
      return arguments.length ? locomotive.scrollTo(value, 0, 0) : locomotive.scroll.instance.scroll.y
    },

    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
    },
    
    pinType: document.querySelector(container).style.transform ? 'transform' : 'fixed'
  })

  ScrollTrigger.addEventListener('refresh', () => locomotive.update())
  ScrollTrigger.refresh()

  return locomotive
}