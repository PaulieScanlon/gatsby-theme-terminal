export const site = {
  margin: "0px auto",
  maxWidth: 1200,
}

export const sidebar = ({ sidebarWidth }) => ({
  position: "fixed",
  width: sidebarWidth,
})

export const main = ({ sidebarWidth }) => ({
  ml: sidebarWidth,
  p: theme => [`${theme.space[3]}px`, `${theme.space[4]}px`],
})
