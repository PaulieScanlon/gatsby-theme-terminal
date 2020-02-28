module.exports = {
  siteMetadata: {
    name: `gatsby-theme-terminal`,
    description: `A zero component Gatsby theme for developers`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-theme`],
    siteUrl: `https://gatsby-theme-terminal.netlify.com`,
    siteImage: `images/terminal-open-graph-image.jpg`,
    profileImage: `images/terminal-profile-image.jpg`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [`posts`, `projects`],
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
