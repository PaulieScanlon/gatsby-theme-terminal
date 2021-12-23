import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Heading, Badge, Text, Flex, Box, Divider, Alert } from '@theme-ui/components'
import { mix } from '@theme-ui/color'
import { format } from 'date-fns'

import { Main } from '../main'
import { GatsbyImage } from 'gatsby-plugin-image'

import { AnchorTag } from '../anchor-tag'
import { BackRef } from '../back-ref'

const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd')

export const SourceArticle = ({
  title,
  tags,
  date,
  dateModified,
  author,
  isPrivate,
  featuredImage,
  featuredImageUrl,
  embedded,
  body,
  timeToRead,
  wordCount,
  slug,
  outboundReferences,
  inboundReferences,
}) => {
  const ProvidedAnchorTag = (anchorProps) => {
    return <AnchorTag {...anchorProps} references={outboundReferences}></AnchorTag>
  }

  const MDXProviderComponents = {
    a: ProvidedAnchorTag,
  }

  return (
    <Main>
      <Box sx={{ px: [0, 0, 0, 'calc(var(--space-2xl) * 1.618)'] }}>
        {title ? (
          <Fragment>
            {isPrivate && (
              <Fragment>
                <Alert variant="error" sx={{ mb: 4 }}>
                  This is a private post
                </Alert>
              </Fragment>
            )}

            <Box sx={{ mb: 4 }}>
              {featuredImage && featuredImage.childImageSharp && (
                <GatsbyImage alt={`${title}-image`} image={featuredImage.childImageSharp.gatsbyImageData} />
              )}
              {featuredImageUrl && featuredImageUrl.childImageSharp && (
                <GatsbyImage alt={`${title}-image`} image={featuredImageUrl.childImageSharp.gatsbyImageData} />
              )}
            </Box>

            <Heading as="h1" variant="styles.h1" sx={{ mb: 4 }}>
              {title}
            </Heading>
            <Flex sx={{ flexWrap: 'wrap', mb: 1 }}>
              <Box
                sx={{
                  width: ['100%', '50%'],
                }}
              >
                {date && (
                  <Text as="div" sx={{ color: 'muted' }}>
                    Date published: {formatDate(date)}
                  </Text>
                )}
              </Box>
              <Box
                sx={{
                  width: ['100%', '50%'],
                }}
              >
                {dateModified && (
                  <Text
                    as="div"
                    sx={{
                      color: 'muted',
                      textAlign: ['left', 'right'],
                    }}
                  >
                    Date modified: {formatDate(dateModified)}
                  </Text>
                )}
              </Box>
            </Flex>

            <Flex sx={{ flexWrap: 'wrap', mb: 3 }}>
              <Box
                sx={{
                  width: ['100%', '50%'],
                }}
              >
                <Text as="div" sx={{ color: 'muted' }}>{`${timeToRead} min read / ${wordCount.words} words`}</Text>
              </Box>
              {author && (
                <Box
                  sx={{
                    width: ['100%', '50%'],
                  }}
                >
                  <Text as="div" sx={{ color: 'muted', textAlign: ['left', 'right'] }}>
                    Author: {author}
                  </Text>
                </Box>
              )}
            </Flex>
          </Fragment>
        ) : null}

        {tags ? (
          <Box sx={{ mb: 3 }}>
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="primary"
                sx={{
                  mb: 2,
                  mr: 2,
                  color: mix('muted', 'primary', `${index / tags.length}`),
                  borderColor: mix('muted', 'primary', `${index / tags.length}`),
                }}
              >
                {tag}
              </Badge>
            ))}
          </Box>
        ) : null}

        <MDXProvider components={MDXProviderComponents}>
          <MDXRenderer embedded={embedded}>{body}</MDXRenderer>
        </MDXProvider>

        <BackRef inboundReferences={inboundReferences} />
      </Box>
    </Main>
  )
}

SourceArticle.propTypes = {
  /** Title frommatter" */
  title: PropTypes.string,
  /** Tags from frontmatter */
  tags: PropTypes.arrayOf(PropTypes.string),
  /** Date from frontmatter */
  date: PropTypes.string,
  /** DateModified from frontmatter */
  dateModified: PropTypes.string,
  /** Author from frontmatter */
  author: PropTypes.string,
  /** isPrivate from frontMatter */
  isPrivate: PropTypes.bool,
  /** FeaturedImage from frontmatter */
  featuredImage: PropTypes.any,
  /** featuredImageUrl from frontmatter */
  featuredImageUrl: PropTypes.any,
  /** embeddedImage array from SourceLayout */
  embedded: PropTypes.any,
  /** body from SourceLayout */
  body: PropTypes.any,
  /** timeToRead from SourceLayout */
  timeToRead: PropTypes.number,
  /** wordCount from SourceLayout */
  wordCount: PropTypes.shape({
    words: PropTypes.number,
  }),
  /** slug from SourceLayout */
  slug: PropTypes.string,
}
