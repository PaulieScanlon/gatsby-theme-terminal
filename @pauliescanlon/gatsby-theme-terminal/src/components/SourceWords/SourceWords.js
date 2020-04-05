import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

export const SourceWords = ({ filter, children }) => {
  const mdx = useAllMdx(filter)

  const wordCountTotal = mdx.reduce((a, b) => a + b.node.wordCount.words, 0)

  const wordCountAverage = Math.round(wordCountTotal / mdx.length)

  const timeToReadTotal = mdx.reduce((a, b) => a + b.node.timeToRead, 0)

  const timeToReadAverage = Math.round(timeToReadTotal / mdx.length)

  const wordCountHighest = Math.max(
    ...mdx.map(item => item.node.wordCount.words)
  )

  const wordCountLowest = Math.min(
    ...mdx.map(item => item.node.wordCount.words)
  )

  return (
    <Fragment>
      {children({
        wordCountTotal: wordCountTotal,
        wordCountAverage: wordCountAverage,
        wordCountHighest: wordCountHighest,
        wordCountLowest: wordCountLowest,
        timeToReadTotal: timeToReadTotal,
        timeToReadAverage: timeToReadAverage,
        sourceTotal: mdx.length,
      })}
    </Fragment>
  )
}

SourceWords.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
