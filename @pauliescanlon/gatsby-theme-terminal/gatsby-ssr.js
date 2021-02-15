const React = require('react')
const { PageElement } = require('./src/components/PageElement')

exports.wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>
}
