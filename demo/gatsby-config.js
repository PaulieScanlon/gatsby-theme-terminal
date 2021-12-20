module.exports = {
  siteMetadata: {
    name: `gatsby-theme-terminal`,
    description: `A zero component Gatsby theme for developers`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-theme`],
    siteUrl: `https://gatsbythemeterminal.gatsbyjs.io`,
    siteImage: `https://gatsbythemeterminal.gatsbyjs.io/images/terminal-open-graph-image.jpg`,
    profileImage: `https://gatsbythemeterminal.gatsbyjs.io/images/terminal-profile-image.jpg`,
    lang: `en`,
    config: {
      sidebarWidth: 240,
      postPerPage: 50,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [
          {
            name: 'posts',
            dir: 'posts',
          },
          {
            name: 'projects',
            dir: 'projects',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-8',
      },
    },
  ],
}
