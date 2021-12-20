import { useStaticQuery, graphql } from 'gatsby'

export const useSource = (filter) => {
  const query = useStaticQuery(graphql`
    query source {
      allMdx(
        filter: { frontmatter: { status: { ne: "draft" }, navigationLabel: { eq: null } } }
        sort: { order: [DESC, DESC], fields: [frontmatter___dateModified, frontmatter___date] }
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
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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
    return query.allMdx.edges.filter((edge) => {
      return edge.node.frontmatter.isPrivate !== true
    })

  return query.allMdx.edges
    .map((edge) => edge)
    .filter((edge) => {
      return edge.node.fields.slug.includes(filter) && edge.node.frontmatter.isPrivate !== true
    })
}
