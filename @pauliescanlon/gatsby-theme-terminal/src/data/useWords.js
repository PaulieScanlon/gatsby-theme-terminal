import { useStaticQuery, graphql } from 'gatsby'

export const useWords = (filter) => {
  const query = useStaticQuery(graphql`
    query words {
      allMdx(
        filter: { frontmatter: { status: { ne: "draft" }, navigationLabel: { eq: null } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            timeToRead
            wordCount {
              words
            }
            frontmatter {
              date
              status
              isPrivate
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (!filter) return query.allMdx.edges.filter((edge) => edge.node.frontmatter.isPrivate !== true)

  return query.allMdx.edges
    .map((edge) => edge)
    .filter((edge) => edge.node.fields.slug.includes(filter) && edge.node.frontmatter.isPrivate !== true)
}
