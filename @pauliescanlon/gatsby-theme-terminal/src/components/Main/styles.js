export const site = {
  margin: '0 auto',
  maxWidth: 1200,
}

export const sidebar = ({ sidebarWidth, isNavOpen }) => ({
  height: '100%',
  pointerEvents: [
    isNavOpen ? 'auto' : 'none',
    isNavOpen ? 'auto' : 'none',
    isNavOpen ? 'auto' : 'none',
    'auto',
  ],
  position: 'fixed',
  width: sidebarWidth,
  zIndex: 999,
})

export const navbar = ({ sidebarWidth, isNavOpen }) => ({
  boxShadow: `3px 0 0 0 rgba(0,0,0,0.07)`,
  backgroundColor: 'background',
  height: '100%',
  left: [
    `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
    `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
    `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
    0,
  ],
  transition: '.3s ease-in-out left',
  position: 'relative',
})

export const lightbox = ({ isNavOpen }) => ({
  backgroundColor: 'black',
  display: [
    isNavOpen ? 'block' : 'none',
    isNavOpen ? 'block' : 'none',
    isNavOpen ? 'block' : 'none',
    'none',
  ],
  height: '100%',
  position: 'fixed',
  opacity: 0.8,
  width: '100%',
  zIndex: 998,
})

export const main = ({ sidebarWidth }) => ({
  ml: [0, 0, 0, sidebarWidth],
  p: theme => [`${theme.space[3]}px`, `${theme.space[4]}px`],
  transition: '.3s ease-in-out margin-left',
})

export const iconButton = ({ isNavOpen }) => ({
  backgroundColor: 'background',
  boxShadow: 0,
  cursor: 'pointer',
  display: [
    isNavOpen ? 'none' : 'block',
    isNavOpen ? 'none' : 'block',
    isNavOpen ? 'none' : 'block',
    'none',
  ],
  position: 'fixed',
  top: theme => `${theme.space[1]}px`,
  right: theme => `${theme.space[2]}px`,
})
