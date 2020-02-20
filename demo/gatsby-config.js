module.exports = {
  siteMetadata: {
    title: `gatsby-theme-terminal`,
    description: `A Gatsby theme that looks like a terminal!`,
    config: {
      sidebarWidth: 160,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        // source: "posts",
        source: [`posts`, `projects`],
      },
    },
  ],
}
