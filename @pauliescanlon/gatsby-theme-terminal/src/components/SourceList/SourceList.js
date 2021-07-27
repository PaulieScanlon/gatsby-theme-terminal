import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useSource } from '../../data'

export const SourceList = ({ filter, children }) => {
  return <Fragment>{children(useSource(filter))}</Fragment>
}

SourceList.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
