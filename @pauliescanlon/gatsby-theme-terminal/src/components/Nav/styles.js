import * as theme from '../../gatsby-plugin-theme-ui'

export const logo = {
  alignItems: 'center',
  display: 'flex',
  height: theme => `${theme.space[5]}px`,
  justifyContent: ['flex-start', 'flex-start', 'flex-start', 'flex-end'],
  overFlow: 'hidden',
  p: theme => `0px ${theme.space[4]}px`,
}

export const nav = {
  height: '100%',
  p: theme => `${theme.space[3]}px ${theme.space[4]}px`,
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
    ':before': {
      pr: [2, 2, 2, 0],
      content: [`"-"`, `"-"`, `"-"`, `""`],
    },
    ':after': {
      pl: [0, 0, 0, 2],
      content: [`""`, `""`, `""`, `"-"`],
    },
    ':focus': {
      boxShadow: 'none',
    },
  },
}

export const link = {
  ...theme.default.styles.a,
}
