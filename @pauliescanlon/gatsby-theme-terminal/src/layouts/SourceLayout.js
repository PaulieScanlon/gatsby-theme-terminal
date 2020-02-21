/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { ContextProvider } from '../context'

import { Seo } from '../components/Seo'
import { Main } from '../components/Main'
import { useConfig } from '../data'

import {
  Heading,
  Link,
  Image,
  Badge,
  Text,
  Flex,
  Box,
  Divider,
} from '@theme-ui/components'

import * as styles from './styles'

const SourceLayout = ({
  data: {
    mdx: { body, excerpt, frontmatter },
  },
  pageContext,
}) => {
  const {
    site: {
      siteMetadata: { name, siteURL, siteImage, lang },
    },
  } = useConfig()

  const {
    title,
    tags,
    date,
    dateModified,
    featuredImage,
    embeddedImages,
  } = frontmatter

  // console.log('name: ', name)
  // console.log('excerpt: ', excerpt)
  // console.log('tags: ', tags)
  // console.log('siteURL: ', siteURL)
  // console.log('siteImage: ', siteImage)
  // console.log('lang: ', lang)

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
    <ContextProvider>
      <Location>
        {({ location }) => {
          const { pathname } = location
          // console.log('pathName: ', pathname)
          return (
            <Fragment>
              <Seo
                type="article"
                title={name}
                titleTemplate={title}
                description={excerpt}
                siteURL={siteURL}
                image={
                  featuredImage && featuredImage.childImageSharp
                    ? featuredImage.childImageSharp.fluid.src
                    : siteImage
                }
                path={pathname}
                keywords={tags}
                lang={lang}
              />
              <Main>
                {featuredImage && featuredImage.childImageSharp && (
                  <Image
                    sx={{ mb: 3 }}
                    src={featuredImage.childImageSharp.fluid.src}
                    alt={featuredImage.childImageSharp.fluid.originalName}
                  />
                )}
                <Heading as="h1" variant="styles.h1" sx={styles.title}>
                  {title}
                </Heading>

                <Flex sx={styles.dates}>
                  <Box sx={styles.dateBox}>
                    {date && <Text>Date published: {date}</Text>}
                  </Box>
                  <Box sx={styles.dateBox}>
                    {dateModified && (
                      <Text sx={styles.dateModified}>
                        Date modified: {dateModified}
                      </Text>
                    )}
                  </Box>
                </Flex>

                {tags &&
                  tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="primary"
                      sx={styles.tag({ index, tags })}
                    >
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
                    display: 'flex',
                  }}
                >
                  {prev && prev.fields.slug.includes(parent) && (
                    <div>
                      {' '}
                      <Link href={prev.fields.slug}>prev</Link>
                    </div>
                  )}

                  {next && next.fields.slug.includes(parent) && (
                    <div
                      sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Link href={next.fields.slug}>next</Link>
                    </div>
                  )}
                </div>
              </Main>
            </Fragment>
          )
        }}
      </Location>
    </ContextProvider>
  )
}

// This query is a duplicate of useAllMdx so if you update this one update that one too! in data/useAllMdx
// test id: c147b696-2ac9-58b3-a3e6-17d8402289e0

export const singleMdx = graphql`
  query singleMdx($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
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
