import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useConfig } from '../../data'

export const SiteMetaData = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useConfig()

  return <Fragment>{children(siteMetadata)}</Fragment>
}

SiteMetaData.propTypes = {
  /** React children */
  children: PropTypes.func,
}
