import React, { Fragment } from 'react'
import { Location } from '@reach/router'
import { graphql } from 'gatsby'

import { ContextProvider } from '../context'

import { Seo } from '../components/seo'
import { SourceArticle } from '../components/source-article'

import { useConfig } from '../data'

import { transformImages } from '../utils'

const IMAGE_KEY = 'image'

const SourceLayout = ({
  data: {
    mdx: {
      body,
      excerpt,
      frontmatter,
      featuredImageUrl,
      embeddedImageUrls,
      fields: { slug },
      timeToRead,
      wordCount,
      outboundReferences,
      inboundReferences,
    },
  },
}) => {
  const {
    site: {
      siteMetadata: { name, siteUrl, siteImage, lang },
    },
  } = useConfig()

  const { title, tags, date, dateModified, author, isPrivate, featuredImage, embeddedImages } = frontmatter

  const getSeoImage = () => {
    if (featuredImage) {
      return `${siteUrl}${featuredImage.childImageSharp.gatsbyImageData.images.fallback.src}`
    }

    if (featuredImageUrl) {
      return `${siteUrl}${featuredImageUrl.childImageSharp.gatsbyImageData.images.fallback.src}`
    }

    return siteImage
  }

  const combinedEmbedded = [...(embeddedImages || []), ...(embeddedImageUrls || [])].filter((n) => n)

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
                featuredImageUrl={featuredImageUrl}
                embedded={transformImages(combinedEmbedded)}
                body={body}
                timeToRead={timeToRead}
                wordCount={wordCount}
                slug={slug}
                outboundReferences={outboundReferences}
                inboundReferences={inboundReferences}
              />
            </Fragment>
          )
        }}
      </Location>
    </ContextProvider>
  )
}

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
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      featuredImageUrl {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      embeddedImageUrls {
        childImageSharp {
          gatsbyImageData
        }
      }
      fields {
        slug
      }
      outboundReferences {
        contextLine
        targetAnchor
        refWord
        target {
          ... on Mdx {
            body
            fields {
              slug
            }
            frontmatter {
              title
              aliases
            }
          }
        }
      }
      inboundReferences {
        referrer {
          ... on Mdx {
            id
            slug
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
        contextLine
      }
    }
  }
`

export default SourceLayout
