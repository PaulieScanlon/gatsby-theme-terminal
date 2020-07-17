import React, { Fragment } from 'react'
import { Location } from '@reach/router'
import { graphql } from 'gatsby'

import { ContextProvider } from '../context'

import { Seo } from '../components/Seo'
import { SourceArticle } from '../components/SourceArticle'

import { useConfig } from '../data'

const IMAGE_KEY = 'image'

const SourceLayout = ({
  data: {
    mdx: { body, excerpt, frontmatter, timeToRead, wordCount },
  },
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
              <SourceArticle
                title={title}
                tags={tags}
                date={date}
                dateModified={dateModified}
                author={author}
                isPrivate={isPrivate}
                featuredImage={featuredImage}
                embedded={embedded}
                body={body}
                timeToRead={timeToRead}
                wordCount={wordCount}
              />
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
        url
        misc
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
