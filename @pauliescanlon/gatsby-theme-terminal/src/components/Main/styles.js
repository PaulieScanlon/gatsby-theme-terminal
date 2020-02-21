export const site = {
  margin: '0px auto',
  maxWidth: 1200,
}

export const sidebar = ({ sidebarWidth }) => ({
  backgroundColor: 'background',
  height: '100%',
  left: [`-${sidebarWidth}px`, `-${sidebarWidth}px`, `-${sidebarWidth}px`, 0],
  position: ['absolute', 'absolute', 'absolute', 'fixed'],
  width: sidebarWidth,
})

export const lightbox = {
  backgroundColor: 'black',
  display: [''],
  height: '100%',
  position: 'absolute',
  opacity: 0.8,
  width: '100%',
}

export const main = ({ sidebarWidth }) => ({
  ml: [0, 0, 0, sidebarWidth],
  p: theme => [`${theme.space[3]}px`, `${theme.space[4]}px`],
})
