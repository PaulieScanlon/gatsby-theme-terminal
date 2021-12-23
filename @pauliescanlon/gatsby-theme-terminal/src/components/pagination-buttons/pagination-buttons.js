import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Flex, Button, Box } from 'theme-ui'
import { useSource } from '../../data'
import { useConfig } from '../../data'
import { Link as GatsbyLink } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

export const PaginationButtons = ({ filter }) => {
  const {
    site: {
      siteMetadata: {
        config: { postPerPage },
      },
    },
  } = useConfig()

  const location = useLocation()
  const pageParams = queryString.parse(location.search).page

  const currentPage = parseInt(pageParams || 1)

  const arr = useSource(filter)
  const lastPage = Math.ceil(arr.length / postPerPage)
  var nextUrl = ''
  var prevUrl = ''

  // newer post
  nextUrl = '?page=' + (currentPage - 1)
  // older post
  prevUrl = '?page=' + (currentPage + 1)

  if (currentPage === 1 || arr.length <= postPerPage) nextUrl = '/'
  if (currentPage === lastPage || arr.length <= postPerPage) prevUrl = '/'

  return (
    <Fragment>
      <Flex>
        <Box
          sx={{
            p: 3,
            mb: 3,
            maxWidth: ['100%'],
            width: ['100%'],
            flex: '1 1 auto',
          }}
        >
          <center>
            {nextUrl !== '/' && (
              <Button as={GatsbyLink} to={nextUrl} variant="secondary">
                {'< Next'}
              </Button>
            )}
          </center>
        </Box>
        <Box
          sx={{
            p: 3,
            mb: 3,
            maxWidth: ['100%'],
            width: ['100%'],
            flex: '1 1 auto',
          }}
        >
          <center>
            {prevUrl !== '/' && (
              <Button as={GatsbyLink} to={prevUrl} variant="secondary">
                {'Prev >'}
              </Button>
            )}
          </center>
        </Box>
      </Flex>
    </Fragment>
  )
}

PaginationButtons.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
}
