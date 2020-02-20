/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import { Main } from "../components/Main"

import {
  Heading,
  Link,
  Image,
  Badge,
  Text,
  Flex,
  Box,
  Divider,
} from "@theme-ui/components"

import * as styles from "./styles"

const SourceLayout = ({
  data: {
    mdx: { body, frontmatter },
  },
  pageContext,
}) => {
  const {
    title,
    tags,
    date,
    dateModified,
    featuredImage,
    embeddedImages,
  } = frontmatter

  const embedded = {}

  if (embeddedImages) {
    embeddedImages.forEach((image, index) => {
      if (image && image.childImageSharp.fluid) {
        embedded[`image${index + 1}`] = {
          fluid: image.childImageSharp.fluid || null,
        }
      }
    })
  }

  const { next, prev, parent } = pageContext

  return (
    <Main>
      {featuredImage && featuredImage.childImageSharp && (
        <Image
          src={featuredImage.childImageSharp.fluid.src}
          alt={featuredImage.childImageSharp.fluid.originalName}
        />
      )}
      <Heading as="h1" sx={styles.title}>
        {title}
      </Heading>

      <Flex sx={styles.dates}>
        <Box sx={styles.dateBox}>
          {date && <Text>Date published: {date}</Text>}
        </Box>
        <Box sx={styles.dateBox}>
          {dateModified && (
            <Text sx={styles.dateModified}>Date modified: {dateModified}</Text>
          )}
        </Box>
      </Flex>

      {tags &&
        tags.map((tag, index) => (
          <Badge key={index} variant="success" sx={styles.tag}>
            {tag}
          </Badge>
        ))}
      {/* <div>
        featuredImage
        <pre>
          <code>{JSON.stringify(featuredImage, null, 2)}</code>
        </pre>
      </div> */}
      {/* <div>tags {JSON.stringify(tags, null, 2)}</div> */}
      {/* <div>date {JSON.stringify(date, null, 2)}</div> */}
      {/* <div>dateModified {JSON.stringify(dateModified, null, 2)}</div> */}
      {/* <div>status {JSON.stringify(status, null, 2)}</div> */}
      {/* <div>embeddedImages {JSON.stringify(embeddedImages, null, 2)}</div> */}
      <Divider />
      <MDXProvider>
        <MDXRenderer embedded={embedded}>{body}</MDXRenderer>
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

// This query is a duplicate of useAllMdx so if you update this one update that one too! in data/useAllMdx
// test id: c147b696-2ac9-58b3-a3e6-17d8402289e0

export const singleMdx = graphql`
  query singleMdx($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        tags
        date
        dateModified
        status
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
            id
          }
        }
        embeddedImages {
          childImageSharp {
            fluid(maxWidth: 1200) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
            id
          }
        }
      }
      fields {
        slug
      }
    }
  }
`

export default SourceLayout
