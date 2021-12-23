const path = require('path')

module.exports = (themeOptions) => {
  const { source } = themeOptions

  let filesystemSources = []

  if (source) {
    const sourceFilesystemOption = (item) => {
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
        postPerPage: 50,
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
            quality: 80,
            formats: ['auto', 'jpg', 'png', 'webp', 'avif'],
            placeholder: 'blurred',
          },
        },
      },
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-katex`,
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: ['.md', '.mdx'],
          defaultLayouts: {
            default: require.resolve(`./src/layouts/page-layout.js`),
          },
          gatsbyRemarkPlugins: [
            {
              // doesn't work
              resolve: `gatsby-remark-katex`,
            },
            {
              // fix this first
              resolve: 'gatsby-remark-wiki-link',
              options: {
                stripBrackets: true,
                stripDefinitionExts: ['.md', '.mdx'],
              },
            },
          ],
          // error
          // remarkPlugins: [require('remark-html-katex')],
        },
      },
      {
        resolve: `@gatsby-project-kb/transformer-wiki-references`,
        options: {
          types: ['Mdx'], // or ["MarkdownRemark"] (or both)
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
