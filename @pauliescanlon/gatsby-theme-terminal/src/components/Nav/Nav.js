import React, { Fragment } from 'react'
import { Box } from 'theme-ui'
import { MdxRoutes } from '@pauliescanlon/gatsby-mdx-routes'
import { Link as GatsbyLink } from 'gatsby'

import { Logo } from '../Logo'
import * as theme from '../../gatsby-plugin-theme-ui'

const DUMMY = 'dummy'

export const Nav = () => (
  <Fragment>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: theme => `${theme.space[5]}px`,
        justifyContent: ['flex-start', 'flex-start', 'flex-start', 'flex-end'],
        overFlow: 'hidden',
        px: 4,
      }}
    >
      <Logo />
    </Box>
    <Box
      as="nav"
      sx={{
        height: '100%',
        py: 3,
        px: 4,
      }}
    >
      <MdxRoutes>
        {(routes, _) => (
          <Box
            as="ul"
            sx={{
              listStyle: 'none',
              mt: 2,
              p: 0,
            }}
          >
            {routes
              .filter(
                route =>
                  route.navigationLabel && route.navigationLabel !== DUMMY
              )
              .map((route, index) => (
                <Box
                  as="li"
                  sx={{
                    textAlign: ['left', 'left', 'left', 'right'],
                    a: {
                      ...theme.default.styles.a,
                    },
                    '.active-link': {
                      textDecoration: 'none',
                      color: 'text',
                      cursor: 'default',
                      ':before': {
                        pr: [2, 2, 2, 0],
                        content: [`"-"`, `"-"`, `"-"`, `""`],
                      },
                      ':after': {
                        pl: [0, 0, 0, 2],
                        content: [`""`, `""`, `""`, `"-"`],
                      },
                      ':focus': {
                        boxShadow: 'none',
                      },
                    },
                  }}
                  key={index}
                >
                  <GatsbyLink activeClassName="active-link" to={route.slug}>
                    {route.navigationLabel}
                  </GatsbyLink>
                </Box>
              ))}
          </Box>
        )}
      </MdxRoutes>
    </Box>
  </Fragment>
)
