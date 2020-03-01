import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

const name = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

const abbreviation = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const initial = ['m', 't', 'w', 't', 'f', 's', 's']

const createDayObject = date => {
  return {
    name: name[date],
    abbreviation: abbreviation[date],
    initial: initial[date],
    count: -1,
    percent: 0,
  }
}

export const SourceDays = ({ filter, children }) => {
  const defaultValues = name.map((_, index) => createDayObject(index))
  const count = Object.values(
    useAllMdx(filter)
      .reduce(
        (items, item) => {
          let date = new Date(item.node.frontmatter.date).getDay()
          items.push(createDayObject(date))
          return items
        },
        [...defaultValues]
      )
      .reduce((items, item) => {
        const { name, abbreviation, initial, count, percent } = item
        items[name] = items[name] || {
          name,
          abbreviation,
          initial,
          count,
          percent,
        }
        items[name].count += 1

        return items
      }, [])
  )

  const days = count.map(item => {
    return {
      ...item,
      percent: Math.round((item.count / 6) * 100),
    }
  })

  return <Fragment>{children(days)}</Fragment>
}

SourceDays.propTypes = {
  /** A string used as a filter for the allMdx GraphQL query */
  filter: PropTypes.string,
  /** React children */
  children: PropTypes.func,
}
