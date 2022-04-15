module.exports = {
  siteMetadata: {
    name: `FearTheOldBlood.dev`,
    description: `A blog owned by Dillon Watts`,
    keywords: [`gatsby`, `tech`, `cloud`, `programming`, `revies`],
    siteUrl: `https://feartheoldblood.dev`,
    siteImage: `https://feartheoldblood.dev/images/terminal-open-graph-image.jpg`,
    profileImage: `https://gatsbythemeterminal.gatsbyjs.io/images/terminal-profile-image.jpg`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
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
          {
            name: 'resume',
            dir: 'resume',
          }
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
