/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdxRoutes } from "@pauliescanlon/gatsby-mdx-routes"
import { Link } from "gatsby"
import { Location } from "@reach/router"

import { Main } from "../components/Main"

import * as styles from "./styles"
import { Intro } from "../components/Intro"

const DUMMY_NAVIGATION_LABEL = "dummy"

const DefaultLayout = ({ children }) => (
  <Main>
    <MdxRoutes>
      {(routes, _) => (
        <ul sx={styles.ul}>
          {routes
            .filter(route => route.navigationLabel !== DUMMY_NAVIGATION_LABEL)
            .map((route, index) => (
              <li sx={styles.li} key={index}>
                <Link
                  sx={styles.link}
                  activeClassName="active-link"
                  to={route.slug}
                >
                  {route.navigationLabel}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </MdxRoutes>
    <Location>
      {({ location }) => {
        const { pathname } = location
        return pathname === "/" ? <Intro /> : null
      }}
    </Location>
    {children}
  </Main>
)

export default DefaultLayout
