import { useStaticQuery, graphql } from 'gatsby'

export const useNavigation = () => {
  return useStaticQuery(
    graphql`
      query allNav {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "//pages//" }
            frontmatter: { navigationLabel: { ne: "dummy" } }
          }
        ) {
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
    `
  )
}
