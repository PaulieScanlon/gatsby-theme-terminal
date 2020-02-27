const path = require('path')

module.exports = themeOptions => {
  const { source } = themeOptions

  let filesystemSources = []

  if (source) {
    const sourceFilesystemOption = name => {
      if (source) {
        return {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `${name}`,
            path: path.resolve(`src/${name}`),
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
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-theme-ui`,
      `@pauliescanlon/gatsby-mdx-routes`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`inconsolata\:400,700`],
          display: 'swap',
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          defaultLayouts: {
            default: require.resolve(`./src/layouts/PageLayout.js`),
          },
        },
      },

      // Theme pages (Dummy page)
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve(__dirname, `src/pages`),
        },
      },
      // Theme posts (Dummy post)
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve(__dirname, `src/posts`),
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
