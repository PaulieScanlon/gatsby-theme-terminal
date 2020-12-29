module.exports = {
  siteMetadata: {
    name: `gatsby-theme-terminal`,
    description: `A zero component Gatsby theme for developers`,
    keywords: [`gatsby`, `gatsbyjs`, `gatsby-theme`],
    siteUrl: `https://gatsby-theme-terminal.netlify.com`,
    siteImage: `https://gatsby-theme-terminal.netlify.com/images/terminal-open-graph-image.jpg`,
    profileImage: `https://gatsby-theme-terminal.netlify.com/images/terminal-profile-image.jpg`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [`posts`, `projects`],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-8",
      },
    },
  ],
}
