/** @jsx jsx */
import { Fragment, useContext } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import { Context } from '../../context'
import { Nav } from '../Nav'
import { useConfig } from '../../data'

// Mdx components
import * as themeUiComponents from '@theme-ui/components'
import { Image, IconButton } from '@theme-ui/components'

import { SiteMetaData } from '../SiteMetaData'
import { SourceList } from '../SourceList'
import { TagList } from '../TagList'

import * as styles from './styles'

const components = {
  Fragment,
  SiteMetaData,
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
    <Fragment>
      <header sx={styles.header({ sidebarWidth })}>
        <div sx={styles.left}></div>
        <div sx={styles.right}>
          <IconButton
            aria-label="toggle menu"
            sx={styles.iconButton({ isNavOpen })}
            onClick={() => dispatch({ type: 'openNav' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentcolor"
            >
              <rect width="100%" height={2} y={2} fill="currentcolor" />
              <rect width="100%" height={2} y={11} fill="currentcolor" />
              <rect width="100%" height={2} y={20} fill="currentcolor" />
            </svg>
          </IconButton>
        </div>
      </header>
      <div sx={styles.site}>
        <div sx={styles.sidebar({ sidebarWidth, isNavOpen })}>
          <div sx={styles.sidebarChild({ sidebarWidth, isNavOpen })}>
            <Nav />
          </div>
        </div>
        <div
          sx={styles.lightbox({ isNavOpen })}
          onClick={() => dispatch({ type: 'closeNav' })}
        />
        <MDXProvider components={components}>
          <main sx={styles.main({ sidebarWidth })}>{children}</main>
        </MDXProvider>
      </div>
    </Fragment>
  )
}

Main.propTypes = {
  /** React children */
  children: PropTypes.any,
}
