const React = require('react')
const { PageElement } = require('./src/components/page-element')

exports.wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>
}
