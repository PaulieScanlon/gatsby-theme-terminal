import { transparentize } from '@theme-ui/color'

export const site = {
  margin: '0 auto',
  maxWidth: 1200,
}

export const header = ({ sidebarWidth }) => ({
  alignItems: 'center',
  backgroundColor: 'background',
  borderBottom: theme =>
    `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
  display: 'flex',
  justifyContent: 'space-between',
  height: theme => `${theme.space[5]}px`,
  ml: [0, 0, 0, sidebarWidth],
  overflow: 'hidden',
  position: 'fixed',
  p: theme => [`0px ${theme.space[3]}px`, `0px ${theme.space[4]}px`],
  width: ['100%', '100%', '100%', `calc(100% - ${sidebarWidth}px)`],
  zIndex: 997,
})

export const left = {
  alignItems: 'center',
  display: ['flex', 'flex', 'flex', 'none'],
}
export const right = {
  alignItems: 'center',
  display: ['flex', 'flex', 'flex', 'none'],
  flexBasis: '100%',
  justifyContent: 'flex-end',
}

export const sidebar = ({ sidebarWidth, isNavOpen }) => ({
  backgroundColor: 'background',
  height: '100%',
  left: [
    isNavOpen ? '0px' : `-${sidebarWidth}px`,
    isNavOpen ? '0px' : `-${sidebarWidth}px`,
    isNavOpen ? '0px' : `-${sidebarWidth}px`,
    '0px',
  ],
  position: 'fixed',
  transition: '.3s ease-in-out left',
  width: sidebarWidth,
  zIndex: 999,
})

export const sidebarChild = ({ sidebarWidth, isNavOpen }) => ({
  borderRight: theme =>
    `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
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
  backgroundColor: transparentize('black', 0.2),
  display: [
    isNavOpen ? 'flex' : 'none',
    isNavOpen ? 'flex' : 'none',
    isNavOpen ? 'flex' : 'none',
    'none',
  ],
  height: '100%',
  justifyContent: 'flex-end',
  p: theme => [
    `${theme.space[2]}px ${theme.space[3]}px`,
    `${theme.space[2]}px ${theme.space[4]}px`,
  ],
  position: 'fixed',
  transition: '.2s linear background-color',
  width: '100%',
  zIndex: 998,
  ':focus': {
    backgroundColor: transparentize('black', 0.4),
  },
})

export const main = ({ sidebarWidth }) => ({
  display: 'block',
  ml: [0, 0, 0, sidebarWidth],
  p: theme => [
    `${theme.space[6]}px ${theme.space[3]}px`,
    `${theme.space[6]}px ${theme.space[4]}px`,
  ],
  transition: '.3s ease-in-out margin-left',
})
