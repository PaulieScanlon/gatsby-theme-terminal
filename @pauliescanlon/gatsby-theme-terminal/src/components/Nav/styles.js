import * as theme from '../../gatsby-plugin-theme-ui'

export const nav = {
  height: '100%',
  p: 4,
}

export const ul = {
  ...theme.default.styles.ul,
  listStyle: 'none',
  mt: 2,
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
