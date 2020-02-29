import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { useAllMdx } from '../../data'

const dayNames = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]
const dayInitial = ['m', 't', 'w', 't', 'f', 's', 's']

const createDayObject = date => {
  return {
    name: dayNames[date],
    initial: dayInitial[date],
    count: -1,
    percent: 0,
  }
}

export const SourceDays = ({ filter, children }) => {
  const count = Object.values(
    useAllMdx(filter)
      .reduce(
        (items, item) => {
          let date = new Date(item.node.frontmatter.date).getDay()
          items.push(createDayObject(date))

          return items
        },
        [
          createDayObject(0),
          createDayObject(1),
          createDayObject(2),
          createDayObject(3),
          createDayObject(4),
          createDayObject(5),
          createDayObject(6),
        ]
      )
      .reduce((items, item) => {
        const { name, initial, count, percent } = item
        items[name] = items[name] || { name, initial, count, percent }
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
