const React = require('react')
const { PageElement } = require('./src/components/page-element')

require(`katex/dist/katex.min.css`)

const anchorScroll = (location) => {
  const anchor = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  if (location && location.hash && anchor) {
    const item = document.querySelectorAll(`a[href="${location.hash}"]`)[0].offsetTop
    const mainNavHeight = document.querySelector(`header`).offsetHeight

    setTimeout(() => {
      window.scrollTo({
        top: item - mainNavHeight,
        behavior: 'smooth',
      })
    }, 50)
  }
}

exports.onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}

exports.wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>
}
