import * as theme from '../../gatsby-plugin-theme-ui'

export const nav = {
  height: '100%',
  p: theme => [
    `${theme.space[4]}px ${theme.space[4]}px`,
    `${theme.space[4]}px ${theme.space[4]}px`,
    `${theme.space[4]}px ${theme.space[4]}px`,
    `${theme.space[4]}px ${theme.space[3]}px`,
  ],
}

export const ul = {
  ...theme.default.styles.ul,
  listStyle: 'none',
  p: 0,
}

export const li = {
  ...theme.default.styles.li,
  textAlign: ['left', 'left', 'left', 'right'],
  '.active-link': {
    textDecoration: 'none',
    color: 'text',
    cursor: 'default',
    ':focus': {
      boxShadow: 'none',
    },
  },
}

export const link = {
  ...theme.default.styles.a,
}
