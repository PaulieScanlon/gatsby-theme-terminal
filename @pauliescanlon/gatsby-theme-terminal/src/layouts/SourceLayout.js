import React, { Fragment } from 'react'
import { Location } from '@reach/router'
import { graphql } from 'gatsby'

import { ContextProvider } from '../context'

import { Seo } from '../components/Seo'
import { SourceArticle } from '../components/SourceArticle'

import { useConfig } from '../data'

import { transformImages } from '../utils'

const IMAGE_KEY = 'image'

const SourceLayout = ({
  data: {
    mdx: {
      body,
      excerpt,
      frontmatter,
      fields: { slug },
      timeToRead,
      wordCount,
      featuredImageUrlSharp,
    },
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
    embeddedImageUrls,
  } = frontmatter

  const getSeoImage = () => {
    if (featuredImage) {
      return `${siteUrl}${featuredImage.childImageSharp.gatsbyImageData.images.fallback.src}`
    }

    if (featuredImageUrlSharp) {
      return `${siteUrl}${featuredImageUrlSharp.childImageSharp.gatsbyImageData.images.fallback.src}`
    }

    return siteImage
  }

  const combinedEmbedded = [
    ...(embeddedImages || []),
    ...(embeddedImageUrls || []),
  ].filter(n => n)

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
                canonical={slug}
                image=""
                image={getSeoImage()}
                path={pathname}
                keywords={tags || ['']}
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
                featuredImageUrlSharp={featuredImageUrlSharp}
                embedded={transformImages(combinedEmbedded)}
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

// {
//   mdx(id: {eq: "ff24e77a-aa63-564b-a244-24e2298aa659"}) {
//     frontmatter {
//       url
//     }
//   }
// }

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
      featuredImageUrlSharp {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
          id
        }
      }
      slug
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
        pinned
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
            id
          }
        }
        featuredImageUrl
        embeddedImages {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
            id
          }
        }
        embeddedImageUrls
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
