import * as theme from "../../gatsby-plugin-theme-ui"

export const nav = {
  p: theme => [`${theme.space[3]}px`, `${theme.space[4]}px`],
}

export const ul = {
  ...theme.default.styles.ul,
  listStyle: "none",
  p: 0,
}

export const li = {
  ...theme.default.styles.li,
  ".active-link": {
    textDecoration: "none",
    color: "text",
    cursor: "default",
    ":focus": {
      boxShadow: "none",
    },
  },
}

export const link = {
  ...theme.default.styles.a,
}
