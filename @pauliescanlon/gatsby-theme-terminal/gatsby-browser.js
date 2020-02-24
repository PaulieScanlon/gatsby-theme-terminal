const anchorScroll = location => {
  const anchor = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  if (location && location.hash && anchor) {
    const item = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
      .offsetTop
    const mainNavHeight = document.querySelector(`header`).offsetHeight

    setTimeout(() => {
      window.scrollTo({
        top: item - mainNavHeight,
        behavior: 'smooth',
      })
    }, 50)
  }
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.action === 'PUSH') {
    setTimeout(() => window.scrollTo({ top: 0 }), 250)
  }

  anchorScroll(location)
  return false
}

exports.onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}
