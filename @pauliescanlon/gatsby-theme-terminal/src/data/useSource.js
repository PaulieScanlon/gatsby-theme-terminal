import { useStaticQuery, graphql } from 'gatsby'

const DRAFT = 'draft'

export const useSource = filter => {
  const query = useStaticQuery(graphql`
    query source {
      allMdx(
        filter: {
          frontmatter: {
            title: { ne: "dummy" }
            navigationLabel: { ne: "dummy" }
            status: { ne: "draft" }
          }
          fields: { parent: { ne: "" } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
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
              pinned
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
            featuredImageUrl {
              url {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
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
      edge =>
        edge.node.frontmatter.status !== DRAFT &&
        edge.node.frontmatter.isPrivate !== true
    )

  return query.allMdx.edges
    .map(edge => edge)
    .filter(
      edge =>
        edge.node.fields.slug.includes(filter) &&
        edge.node.frontmatter.status !== DRAFT &&
        edge.node.frontmatter.isPrivate !== true
    )
}
