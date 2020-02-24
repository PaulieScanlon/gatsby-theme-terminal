import { useStaticQuery, graphql } from 'gatsby'

const DRAFT = 'draft'

export const useAllMdx = filter => {
  // This query is a duplicate of singleMdx so if you update this one update that one too! in layouts/SourceLayout

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
            excerpt
            frontmatter {
              title
              tags
              date
              dateModified
              author
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
      }
    }
  `)

  if (!filter)
    return query.allMdx.edges.filter(
      edge => edge.node.frontmatter.status !== DRAFT
    )

  return query.allMdx.edges
    .map(edge => edge)
    .filter(
      edge =>
        edge.node.fields.slug.includes(filter) &&
        edge.node.frontmatter.status !== DRAFT
    )
}
