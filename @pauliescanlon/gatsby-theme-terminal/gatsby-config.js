const path = require("path")

module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `@pauliescanlon/gatsby-mdx-routes`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inconsolata\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`./src/layouts/DefaultLayout.js`),
        },
      },
    },
    // Theme pages
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.resolve(__dirname, `src/pages`),
      },
    },
    // Demo pages
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.resolve(`src/pages`),
      },
    },
  ],
}
