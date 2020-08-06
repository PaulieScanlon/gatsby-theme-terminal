import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

export const SourceList = ({ filter, children }) => {
  return <Fragment>{children(useAllMdx(filter))}</Fragment>
}

SourceList.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
