import { useStaticQuery, graphql } from 'gatsby'

export const useConfig = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            keywords
            siteURL
            siteImage
            lang
            config {
              sidebarWidth
            }
          }
        }
      }
    `
  )
}
