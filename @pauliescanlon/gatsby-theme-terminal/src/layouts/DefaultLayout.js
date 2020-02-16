import React from "react"

import { MDXProvider } from "@mdx-js/react"

const DefaultLayout = ({ children }) => (
  <MDXProvider>
    <div style={{ border: "1px solid red" }}>{children}</div>
  </MDXProvider>
)

export default DefaultLayout
