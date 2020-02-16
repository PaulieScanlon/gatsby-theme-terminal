/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import * as themeUiComponents from "@theme-ui/components"

import { Intro } from "../Intro"
import * as styles from "./styles"

const components = {
  Intro,
  ...themeUiComponents,
}

export const Main = ({ children }) => (
  <MDXProvider components={components}>
    <main sx={styles.main}>{children}</main>
  </MDXProvider>
)

Main.propTypes = {
  /** React children */
  children: PropTypes.any,
}
