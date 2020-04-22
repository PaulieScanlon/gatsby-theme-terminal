/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { Location } from '@reach/router'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { format } from 'date-fns'
import { ContextProvider } from '../context'

import { Seo } from '../components/Seo'
import { Main } from '../components/Main'
import { useConfig } from '../data'

import {
  Heading,
  Badge,
  Text,
  Flex,
  Box,
  Divider,
  Alert,
} from '@theme-ui/components'

import Img from 'gatsby-image'

import * as styles from './styles'

const formatDate = date => format(new Date(date), 'd-MMM-u')

const IMAGE_KEY = 'image'

const SourceLayout = ({
  data: {
    mdx: { id, body, excerpt, frontmatter, timeToRead, wordCount, fields },
  },
  pageContext,
}) => {
  const {
    site: {
      siteMetadata: { name, siteUrl, siteImage, lang },
    },
  } = useConfig()

  const {
    title,
    tags,
    date,
    dateModified,
    author,
    isPrivate,
    featuredImage,
    embeddedImages,
  } = frontmatter

  console.log(isPrivate)

  const embedded =
    embeddedImages &&
    embeddedImages.reduce((images, image, index) => {
      images[`${IMAGE_KEY}${index + 1}`] = images[
        `${IMAGE_KEY}${index + 1}`
      ] || {
        ...image.childImageSharp,
      }
      return images
    }, {})

  return (
    <ContextProvider>
      <Location>
        {({ location }) => {
          const { pathname } = location
          return (
            <Fragment>
              <Seo
                type="article"
                title={name}
                titleTemplate={title}
                description={excerpt}
                siteUrl={siteUrl}
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
                {isPrivate && (
                  <Alert variant="error">This is a private post</Alert>
                )}
                <Box sx={styles.featuredImage}>
                  {featuredImage && featuredImage.childImageSharp && (
                    <Img
                      fluid={featuredImage.childImageSharp.fluid}
                      alt={featuredImage.childImageSharp.fluid.originalName}
                    />
                  )}
                </Box>
                <Heading as="h1" variant="styles.h1" sx={styles.title}>
                  {title}
                </Heading>
                <Flex sx={styles.flex}>
                  <Box sx={styles.box}>
                    {date && (
                      <Text sx={styles.text}>
                        Date published: {formatDate(date)}
                      </Text>
                    )}
                  </Box>
                  <Box sx={styles.box}>
                    {dateModified && (
                      <Text sx={styles.rightText}>
                        Date modified: {formatDate(dateModified)}
                      </Text>
                    )}
                  </Box>
                </Flex>

                <Flex sx={styles.flex}>
                  <Box sx={styles.box}>
                    <Text
                      sx={styles.text}
                    >{`${timeToRead} min read / ${wordCount.words} words`}</Text>
                  </Box>
                  {author && (
                    <Box sx={styles.box}>
                      <Text sx={styles.rightText}>Author: {author}</Text>
                    </Box>
                  )}
                </Flex>

                <Divider />

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

                <Divider />
                <MDXProvider>
                  <MDXRenderer embedded={embedded}>{body}</MDXRenderer>
                </MDXProvider>
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
// draft id: c2a66bb2-6fc4-5b03-94f1-e31abea07a59

export const singleMdx = graphql`
  query singleMdx($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        title
        tags
        date
        dateModified
        author
        status
        isPrivate
        featuredImage {
          childImageSharp {
            original {
              width
              height
              src
            }
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid
            }
            fixed(quality: 90) {
              ...GatsbyImageSharpFixed
            }
            id
          }
        }
        embeddedImages {
          childImageSharp {
            original {
              width
              height
              src
            }
            fluid(maxWidth: 1200, quality: 90) {
              ...GatsbyImageSharpFluid
            }
            fixed(quality: 90) {
              ...GatsbyImageSharpFixed
            }
            id
          }
        }
      }
      fields {
        slug
        owner
        parent
      }
    }
  }
`

export default SourceLayout
