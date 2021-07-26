import { useStaticQuery, graphql } from 'gatsby'

const DRAFT = 'draft'

export const useWords = filter => {
  const query = useStaticQuery(graphql`
    query words {
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
            timeToRead
            wordCount {
              words
            }
            frontmatter {
              date
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
