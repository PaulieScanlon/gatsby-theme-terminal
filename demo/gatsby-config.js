module.exports = {
  siteMetadata: {
    name: `FearTheOldBlood.dev`,
    description: `A blog owned by 0xWoidW`,
    keywords: [`gatsby`, `tech`, `cloud`, `programming`, `revies`],
    siteUrl: `https://feartheoldblood.dev`,
    siteImage: `./static/images/kratos.jpeg`,
    profileImage: `./static/images/kratos.jpeg`,
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
