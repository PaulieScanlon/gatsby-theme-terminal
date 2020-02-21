/** @jsx jsx */
import { Fragment, useContext } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import * as themeUiComponents from '@theme-ui/components'
import { Image } from '@theme-ui/components'

import { Context } from '../../context'
import { Nav } from '../Nav'
import { useConfig } from '../../data'

// components
import { Intro } from '../Intro'
import { SourceList } from '../SourceList'
import { TagList } from '../TagList'

import * as styles from './styles'

const components = {
  Intro,
  SourceList,
  TagList,
  EmbeddedImage: props => <Image src={props.src.fluid.src} />,
  ...themeUiComponents,
}

export const Main = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth },
      },
    },
  } = useConfig()

  const {
    state: { isNavOpen },
    dispatch,
  } = useContext(Context)

  return (
    <div sx={styles.site}>
      <div sx={styles.sidebar({ sidebarWidth, isNavOpen })}>
        <div sx={styles.navbar({ sidebarWidth, isNavOpen })}>
          <Nav />
        </div>
      </div>
      <div
        sx={styles.lightbox({ isNavOpen })}
        onClick={() => dispatch({ type: 'closeNav' })}
      />
      <MDXProvider components={components}>
        <main sx={styles.main({ sidebarWidth })}>
          <Fragment>
            <button onClick={() => dispatch({ type: 'openNav' })}>
              OpenNav
            </button>
            {children}
          </Fragment>
        </main>
      </MDXProvider>
    </div>
  )
}

Main.propTypes = {
  /** React children */
  children: PropTypes.any,
}
