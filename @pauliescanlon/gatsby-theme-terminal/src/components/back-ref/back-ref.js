import React, { Fragment } from 'react'

export const BackRef = ({ inboundReferences }) => {
  let uniqueInboundReferences = [
    ...new Map(
      inboundReferences
        // show only references from note type
        // .filter((ref) => ref.referrer.frontmatter.isNote)
        .map((item) => [JSON.stringify(item), item]),
    ).values(),
  ]

  return (
    <Fragment>
      {inboundReferences.length > 0 ? (
        <Fragment>
          <h1>{inboundReferences.length} Back References</h1>
          {uniqueInboundReferences &&
            uniqueInboundReferences.map((ref, index) => {
              let data = ref.referrer
              return (
                <h4 key={index}>
                  {data.frontmatter.title}({data.fields.slug})
                </h4>
              )
            })}
        </Fragment>
      ) : null}
    </Fragment>
  )
}
