import { useStaticQuery, graphql } from 'gatsby'

export const useNavigation = () => {
  return useStaticQuery(
    graphql`
      query navigation {
        allMdx(filter: { frontmatter: { navigationLabel: { ne: null } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                navigationLabel
              }
            }
          }
        }
      }
    `,
  )
}
