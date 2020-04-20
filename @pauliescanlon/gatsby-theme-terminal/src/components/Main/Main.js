/** @jsx jsx */
import { Fragment, useContext } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism'

import { Context } from '../../context'
import { Nav } from '../Nav'
import { useConfig } from '../../data'

// Mdx components
import * as themeUiComponents from '@theme-ui/components'
import Img from 'gatsby-image'

// Either used by Main component or components prop
import { Close, Image, MenuButton } from '@theme-ui/components'

// Theme specific componenbts
import { Logo } from '../Logo'
import { SiteMetaData } from '../SiteMetaData'
import { SourceList } from '../SourceList'
import { SourceDays } from '../SourceDays'
import { SourceMonths } from '../SourceMonths'
import { SourceWords } from '../SourceWords'
import { SourceTags } from '../SourceTags'

import * as styles from './styles'

const components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  Fragment,
  SiteMetaData,
  SourceList,
  SourceDays,
  SourceMonths,
  SourceWords,
  SourceTags,
  EmbeddedImage: props => <Image src={props.src.fluid.src} />,
  Img,
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
        <div sx={styles.left}>
          <Logo />
        </div>
        <div sx={styles.right}>
          <MenuButton
            aria-label="Toggle Menu"
            onClick={() => dispatch({ type: 'openNav' })}
          />
        </div>
      </header>
      <div sx={styles.site}>
        <div sx={styles.sidebar({ sidebarWidth, isNavOpen })}>
          <div sx={styles.sidebarChild({ sidebarWidth, isNavOpen })}>
            <Nav />
          </div>
        </div>
        <div
          role="button"
          tabIndex="0"
          sx={styles.lightbox({ isNavOpen })}
          onClick={() => dispatch({ type: 'closeNav' })}
          onKeyDown={event =>
            event.key === 'Enter' ? dispatch({ type: 'closeNav' }) : {}
          }
        >
          <Close />
        </div>
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
