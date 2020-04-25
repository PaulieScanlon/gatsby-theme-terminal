import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

const name = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

const abbreviation = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
]

const initial = ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd']

const createMonthObject = (month, year, words) => {
  return {
    year: year,
    name: name[month],
    abbreviation: abbreviation[month],
    initial: initial[month],
    words: words,
  }
}

export const SourceWords = ({ filter, children }) => {
  const defaultValues = name.map((_, index) => createMonthObject(index, 0, 0))

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

  const wordCountByMonth = mdx
    .reduce((items, item) => {
      let month = new Date(item.node.frontmatter.date).getMonth()
      let year = new Date(item.node.frontmatter.date).getFullYear()
      let words = item.node.wordCount.words
      items[year] = items[year] || [...defaultValues]
      items[year].push(createMonthObject(month, year, words))

      return items
    }, [])
    .map(year => {
      let yearValue = year.reduce((a, b) =>
        b.year !== 0 ? (a = b.year) : null
      )

      return Object.values(
        year.reduce((items, item) => {
          const { name, words } = item
          items[name] = items[name] || {
            ...item,
            year: yearValue,
          }
          items[name].words += words
          return items
        }, {})
      )
    })

  return (
    <Fragment>
      {mdx.length
        ? children({
            wordCountTotal: wordCountTotal,
            wordCountAverage: wordCountAverage,
            wordCountHighest: wordCountHighest,
            wordCountLowest: wordCountLowest,
            timeToReadTotal: timeToReadTotal,
            timeToReadAverage: timeToReadAverage,
            sourceTotal: mdx.length,
            wordCountByMonth: wordCountByMonth,
          })
        : null}
    </Fragment>
  )
}

SourceWords.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
