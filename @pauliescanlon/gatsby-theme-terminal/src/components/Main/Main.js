import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism'
import { Link as GatsbyLink } from 'gatsby'

import { Context } from '../../context'
import { Nav } from '../Nav'
import { useConfig } from '../../data'

// Mdx components
import * as themeUiComponents from 'theme-ui'
import Img from 'gatsby-image'

import { Container, Box, Close, Image, MenuButton, Link } from 'theme-ui'
import { transparentize } from '@theme-ui/color'

// Theme specific componenbts
import { Logo } from '../Logo'
import { SiteMetaData } from '../SiteMetaData'
import { SourceList } from '../SourceList'
import { SourceDays } from '../SourceDays'
import { SourceMonths } from '../SourceMonths'
import { SourceWords } from '../SourceWords'
import { SourceTags } from '../SourceTags'

const components = {
  a: ({ href, children }) => {
    return Boolean(href.indexOf('/')) ? (
      <Link href={href} target="_blank">
        {children}
      </Link>
    ) : (
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
      <Box
        as="header"
        sx={{
          alignItems: 'center',
          backgroundColor: 'background',
          borderBottom: theme =>
            `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
          display: 'flex',
          justifyContent: 'space-between',
          height: theme => `${theme.space[5]}px`,
          ml: [0, 0, 0, sidebarWidth],
          overflow: 'hidden',
          position: 'fixed',
          px: [3, 4],
          width: ['100%', '100%', '100%', `calc(100% - ${sidebarWidth}px)`],
          zIndex: 997,
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: ['flex', 'flex', 'flex', 'none'],
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
          <MenuButton
            aria-label="Toggle Menu"
            onClick={() => dispatch({ type: 'openNav' })}
          />
        </Box>
      </Box>
      <Container
        sx={{
          margin: '0 auto',
          maxWidth: 1200,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background',
            height: '100%',
            left: [
              isNavOpen ? '0px' : `-${sidebarWidth}px`,
              isNavOpen ? '0px' : `-${sidebarWidth}px`,
              isNavOpen ? '0px' : `-${sidebarWidth}px`,
              '0px',
            ],
            position: 'fixed',
            transition: '.3s ease-in-out left',
            width: sidebarWidth,
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              borderRight: theme =>
                `${theme.borderWidths[1]}px solid ${theme.colors.surface}`,
              height: '100%',
              left: [
                `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
                `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
                `${isNavOpen ? 0 : `-${sidebarWidth}px`}`,
                0,
              ],
              transition: '.3s ease-in-out left',
              position: 'relative',
            }}
          >
            <Nav />
          </Box>
        </Box>
        <Box
          role="button"
          tabIndex="0"
          sx={{
            backgroundColor: transparentize('black', 0.2),
            display: [
              isNavOpen ? 'flex' : 'none',
              isNavOpen ? 'flex' : 'none',
              isNavOpen ? 'flex' : 'none',
              'none',
            ],
            height: '100%',
            justifyContent: 'flex-end',
            px: [3, 4],
            py: 2,
            position: 'fixed',
            transition: '.2s linear background-color',
            width: '100%',
            zIndex: 998,
            ':focus': {
              outline: 'none',
              backgroundColor: transparentize('black', 0.4),
            },
          }}
          onClick={() => dispatch({ type: 'closeNav' })}
          onKeyDown={event =>
            event.key === 'Enter' ? dispatch({ type: 'closeNav' }) : {}
          }
        >
          <Close />
        </Box>
        <MDXProvider components={components}>
          <Box
            as="main"
            sx={{
              display: 'block',
              ml: [0, 0, 0, sidebarWidth],
              px: [3, 4],
              py: 6,
              transition: '.3s ease-in-out margin-left',
            }}
          >
            {children}
          </Box>
        </MDXProvider>
      </Container>
    </Fragment>
  )
}

Main.propTypes = {
  /** React children */
  children: PropTypes.any,
}
