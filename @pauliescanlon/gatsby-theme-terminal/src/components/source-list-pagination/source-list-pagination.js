import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useSource } from '../../data'
import { useConfig } from '../../data'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

export const SourceListPagination = ({ filter, children }) => {
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
  const startInd = (currentPage - 1) * postPerPage

  return <Fragment>{children(useSource(filter).splice(startInd, postPerPage))}</Fragment>
}

SourceListPagination.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
