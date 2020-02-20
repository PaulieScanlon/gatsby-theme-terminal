/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

// import { useSingleMdx } from "../data/useSingleMdx"
import { useAllMdx } from "../data/useAllMdx"

import { Main } from "../components/Main"

import { Heading, Link } from "@theme-ui/components"

const SourceLayout = ({
  data: {
    mdx: { id },
  },
  pageContext,
}) => {
  // TODO
  // this might not be the best way to do this but using a graphQL query with an id of just this `.mdx` file means creating another set of frontmatter querys in the query below in addition to the ones defined in useAllMdx

  const data = useAllMdx()
    .map(edge => edge)
    .filter(edge => edge.node.id === id)[0].node

  const {
    frontmatter: {
      title,
      tags,
      date,
      dateModified,
      status,
      featuredImage,
      embeddedImages,
    },
    body,
  } = data

  const { next, prev, parent } = pageContext

  // console.log("parent: ", pageContext.parent)
  // console.log("next: ", next.fields.slug)
  // console.log("prev: ", prev.fields.slug)

  return (
    <Main>
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <div>tags {JSON.stringify(tags, null, 2)}</div>
      <div>date {JSON.stringify(date, null, 2)}</div>
      <div>dateModified {JSON.stringify(dateModified, null, 2)}</div>
      <div>status {JSON.stringify(status, null, 2)}</div>
      <div>
        featuredImage
        <pre>
          <code>{JSON.stringify(featuredImage, null, 2)}</code>
        </pre>
      </div>
      <div>embeddedImages {JSON.stringify(embeddedImages, null, 2)}</div>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>

      <div
        sx={{
          display: "flex",
        }}
      >
        {prev && prev.fields.slug.includes(parent) && (
          <div>
            {" "}
            <Link href={prev.fields.slug}>prev</Link>
          </div>
        )}

        {next && next.fields.slug.includes(parent) && (
          <div
            sx={{
              display: "flex",
              flex: "1 1 auto",
              justifyContent: "flex-end",
            }}
          >
            <Link href={next.fields.slug}>next</Link>
          </div>
        )}
      </div>
    </Main>
  )
}

// export const sourceQuery = useSingleMdx()

export const sourceQuery = graphql`
  query sourceQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
    }
  }
`

export default SourceLayout
