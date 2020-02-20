import { useStaticQuery, graphql } from "gatsby"

export const useAllMdx = filter => {
  const query = useStaticQuery(graphql`
    query allMdx {
      allMdx(
        filter: {
          frontmatter: {
            title: { ne: "dummy" }
            navigationLabel: { ne: "dummy" }
          }
          fields: { owner: { eq: "source" } }
        }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              title
              tags
              date
              dataModified
              status
              featuredImage {
                childImageSharp {
                  fluid {
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
                sourceInstanceName
                absolutePath
                relativePath
                extension
                size
                prettySize
                modifiedTime
                accessTime
                changeTime
                birthTime
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (!filter) return query.allMdx.edges

  return query.allMdx.edges
    .map(edge => edge)
    .filter(edge => edge.node.fields.slug.includes(filter))
}
