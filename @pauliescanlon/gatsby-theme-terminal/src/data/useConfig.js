import { useStaticQuery, graphql } from 'gatsby'

export const useConfig = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            config {
              sidebarWidth
            }
          }
        }
      }
    `
  )
}
