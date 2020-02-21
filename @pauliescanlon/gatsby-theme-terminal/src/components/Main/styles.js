export const site = {
  margin: '0 auto',
  maxWidth: 1200,
}

export const sidebar = ({ sidebarWidth, isNavOpen }) => ({
  height: '100%',
  pointerEvents: isNavOpen ? 'auto' : 'none',
  position: ['absolute', 'absolute', 'absolute', 'fixed'],
  width: sidebarWidth,
  zIndex: 999,
})

export const navbar = ({ sidebarWidth, isNavOpen }) => ({
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
    `${isNavOpen ? 'block' : 'none'}`,
    `${isNavOpen ? 'block' : 'none'}`,
    `${isNavOpen ? 'block' : 'none'}`,
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
})
