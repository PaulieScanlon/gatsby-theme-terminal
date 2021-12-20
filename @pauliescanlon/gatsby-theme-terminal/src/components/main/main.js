import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism'
import { Link as GatsbyLink } from 'gatsby'

import { Context } from '../../context'
import { Nav } from '../nav'
import { HeaderNav } from '../header-nav'
import { useConfig } from '../../data'

// Mdx components
import * as themeUiComponents from 'theme-ui'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Container, Box, Close, Image, MenuButton, Link } from 'theme-ui'
import { transparentize } from '@theme-ui/color'

// Theme specific components
import { Logo } from '../logo'
import { Footer } from '../footer'
import { SiteMetaData } from '../site-metadata'
import { SourceList } from '../source-list'
import { SourceListPagination } from '../source-list-pagination'
import { PaginationButtons } from '../pagination-buttons'
import { SourceDays } from '../source-days'
import { SourceMonths } from '../source-months'
import { SourceWords } from '../source-words'
import { SourceTags } from '../source-tags'

const components = {
  a: ({ href, children }) => {
    // If it's an external url use Link and target _blank
    if (href.match(/^(http|https):/g)) {
      return (
        <Link href={href} target="_blank" rel="noopener">
          {children}
        </Link>
      )
    }
    // if it's a # use Link which will fires an anchorScroll in gatsby-browser
    if (href.match(/#/gi)) {
      return <Link href={href}>{children}</Link>
    }
    // if it's anything else use GatsbyLink
    return (
      <Link as={GatsbyLink} to={href}>
        {children}
      </Link>
    )
  },
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  Fragment,
  SiteMetaData,
  SourceList,
  SourceListPagination,
  PaginationButtons,
  SourceDays,
  SourceMonths,
  SourceWords,
  SourceTags,
  GatsbyImage: (props) => <GatsbyImage alt={props.alt} image={getImage(props.image)} />,
  ...themeUiComponents,
}

export const Main = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        config: { sidebarWidth, postPerPage },
      },
    },
  } = useConfig()

  const {
    state: { isNavOpen },
    dispatch,
  } = useContext(Context)

  return (
    <Fragment>
      {/* Header bar */}
      <Box
        as="header"
        sx={{
          alignItems: 'center',
          backgroundColor: 'background',
          borderBottom: (theme) => `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
          display: 'flex',
          justifyContent: 'space-between',
          height: (theme) => `64px`,
          ml: 0,
          overflow: 'hidden',
          position: ['fixed', 'static'],
          px: [3, 4],
          width: '100%',
          zIndex: 997,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: ['flex', 'flex', 'flex', 'none'],
            flexBasis: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <MenuButton aria-label="Toggle Menu" onClick={() => dispatch({ type: 'openNav' })} />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: ['none', 'none', 'none', 'flex'],
            flexBasis: '100%',
            justifyContent: 'flex-end',
          }}
        >
          <HeaderNav />
        </Box>
      </Box>

      {/* Page Body */}
      <Container
        sx={{
          margin: '0 auto',
          maxWidth: 1400,
        }}
      >
        {/* Nav Bar section (box) */}
        <Box
          sx={{
            backgroundColor: 'background',
            height: '100%',
            left: [
              `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
              `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
              `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
              `${isNavOpen ? `-${sidebarWidth}px` : `-${sidebarWidth}px`}`,
            ],
            top: 0,
            position: 'fixed',
            transition: '.3s ease-in-out left',
            width: sidebarWidth,
            zIndex: 999,
          }}
        >
          {/* Nav bar content box */}
          <Box
            sx={{
              borderRight: (theme) => `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
              height: '100%',
              left: [
                `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
                `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
                `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
                `${isNavOpen ? `-${sidebarWidth}px` : `-${sidebarWidth}px`}`,
              ],
              transition: '.3s ease-in-out left',
              position: 'relative',
            }}
          >
            {/* vertical nav link */}
            <Nav />
          </Box>
        </Box>
        {/* End of nav bar section */}

        {/* Nav Bar close button, and its bg for small devices */}
        <Box
          role="button"
          tabIndex="0"
          sx={{
            backgroundColor: transparentize('black', 0.2),
            display: [isNavOpen ? 'flex' : 'none', isNavOpen ? 'flex' : 'none', isNavOpen ? 'flex' : 'none', 'none'],
            height: '100%',
            justifyContent: 'flex-end',
            px: [3, 4],
            py: 2,
            position: 'fixed',
            transition: '.2s linear background-color',
            width: '100%',
            top: 0,
            zIndex: 998,
            ':focus': {
              outline: 'none',
              backgroundColor: transparentize('black', 0.4),
            },
          }}
          onClick={() => dispatch({ type: 'closeNav' })}
          onKeyDown={(event) => (event.key === 'Enter' ? dispatch({ type: 'closeNav' }) : {})}
        >
          {/* <Close /> */}
        </Box>

        {/* Page MDX content */}
        <MDXProvider components={components}>
          <Box
            as="main"
            sx={{
              display: 'block',
              ml: 0,
              px: [3, 4],
              pt: ['var(--space-2xl)', 'var(--space-m)'],
              transition: '.3s ease-in-out margin-left',
            }}
          >
            {children}
          </Box>
        </MDXProvider>
        {/* End of MDX content */}
      </Container>
      {/* End of page body */}

      {/* Footer Box */}
      <Footer />
    </Fragment>
  )
}

Main.propTypes = {
  /** React children */
  children: PropTypes.any,
}
