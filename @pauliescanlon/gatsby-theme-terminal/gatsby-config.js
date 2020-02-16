const path = require("path")

module.exports = {
  siteMetadata: {
    title: ``,
  },
  plugins: [
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
