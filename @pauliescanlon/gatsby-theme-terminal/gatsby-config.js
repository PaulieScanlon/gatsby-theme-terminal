const path = require('path')

module.exports = themeOptions => {
  const { source } = themeOptions

  let filesystemSources = []

  if (source) {
    const sourceFilesystemOption = item => {
      if (source) {
        return {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `${item.name}`,
            path: path.resolve(`src/${item.dir}`),
          },
        }
      }
    }

    if (Array.isArray(source)) {
      for (let item of source) {
        filesystemSources.push(sourceFilesystemOption(item))
      }
    } else {
      filesystemSources.push(sourceFilesystemOption(source))
    }
  }

  return {
    siteMetadata: {
      name: ``,
      description: ``,
      keywords: [],
      siteUrl: ``,
      siteImage: ``,
      profileImage: ``,
      lang: ``,
      config: {
        sidebarWidth: 260,
      },
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            quality: 70,
            formats: ['auto', 'webp', 'avif'],
            placeholder: 'blurred',
          },
        },
      },
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve(`./src/layouts/PageLayout.js`),
          },
        },
      },

      // Demo pages
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve(`src/pages`),
        },
      },
      // Demo 'src/whatever' the user has defined in options.source
      ...filesystemSources,
    ],
  }
}
