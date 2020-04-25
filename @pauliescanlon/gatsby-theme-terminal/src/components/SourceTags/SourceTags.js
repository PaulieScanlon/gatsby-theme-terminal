import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

export const SourceTags = ({ filter, children }) => {
  const count = Object.values(
    useAllMdx(filter)
      .filter(edge => edge.node.frontmatter.tags)
      .reduce((items, item) => {
        const { tags } = item.node.frontmatter
        tags.forEach(tag => {
          items.push({
            name: tag,
            count: 1,
            percent: 1,
          })
        })
        return items
      }, [])
      .reduce((items, item) => {
        const { count, name } = item
        items[name] = items[name] || { count: 0, name }
        items[name].count += count

        return items
      }, [])
  )

  const total = count.reduce((a, b) => a + b.count, 0)

  const tags = count.map(item => {
    return {
      ...item,
      percent: Math.round((item.count / total) * 100),
    }
  })

  return <Fragment>{tags.length ? children(tags) : null}</Fragment>
}

SourceTags.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
