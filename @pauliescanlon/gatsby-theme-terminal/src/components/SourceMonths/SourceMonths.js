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

const createMonthObject = (month, year) => {
  return {
    year: year,
    name: name[month],
    abbreviation: abbreviation[month],
    initial: initial[month],
    count: -1,
    percent: 0,
  }
}

export const SourceMonths = ({ filter, children }) => {
  const defaultValues = name.map((_, index) => createMonthObject(index, 0))

  const count = useAllMdx(filter)
    .reduce((items, item) => {
      let month = new Date(item.node.frontmatter.date).getMonth()
      let year = new Date(item.node.frontmatter.date).getFullYear()
      items[year] = items[year] || [...defaultValues]
      items[year].push(createMonthObject(month, year))

      return items
    }, [])
    .map(year => {
      let yearValue = year.reduce((a, b) =>
        b.year !== 0 ? (a = b.year) : null
      )

      return Object.values(
        year.reduce((items, item) => {
          const { name } = item
          items[name] = items[name] || {
            ...item,
            year: yearValue,
          }
          items[name].count += 1
          return items
        }, {})
      )
    })

  const months = Object.values(
    count.map(year => {
      let total = year.reduce((a, b) => ({ count: a.count + b.count }))
      return year.map(month => {
        return {
          ...month,
          percent: Math.round((month.count / total.count) * 100),
        }
      })
    })
  )

  return <Fragment>{months.length ? children(months) : null}</Fragment>
}

SourceMonths.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
