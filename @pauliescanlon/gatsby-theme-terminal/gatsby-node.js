const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

const path = require('path')

// String used to differenciate between .mdx sources from pages and .mdx souced from "source"
const OWNER_NAME = 'source'

// https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
exports.createSchemaCustomization = async ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImageUrl: FeaturedImageUrl
      embeddedImageUrls: [EmbeddedImageUrls]
    }

    type Frontmatter @dontInfer {
        title: String
        navigationLabel: String
        tags: [String]
        date: String
        dateModified: String
        author: String
        status: String
        isPrivate: Boolean
        url: String
        misc: String
        pinned: Boolean
        featuredImage: File @fileByRelativePath
        featuredImageUrl: String
        embeddedImages: [File] @fileByRelativePath
        embeddedImageUrls: [String]
    }

    type FeaturedImageUrl  {
      url: File @link(by: "url")
    }

    type EmbeddedImageUrls  {
      url: [File] @link(by: "url")
    }
  `)

  // Logs out all typeDefs
  // actions.printTypeDefinitions({ path: './typeDefs.txt' })
}

exports.onCreateNode = async (
  {
    node,
    actions: { createNodeField, createNode },
    getNode,
    store,
    cache,
    createNodeId,
  },
  themeOptions
) => {
  const { source } = themeOptions

  if (node.internal.type === 'Mdx' && !node.internal.fieldOwners) {
    // console.log('node.frontmatter: ', node.frontmatter)

    let path = source
    const value = createFilePath({ node, getNode })

    if (Array.isArray(source)) {
      path = node.fileAbsolutePath
        .split('/')
        .filter(str => source.includes(str))
        .toString()
    }
    createNodeField({
      node,
      name: `slug`,
      value: path ? `/${path}${value}` : value,
    })
    // a owner and parent node fields to the .mdx sourced from "source"
    createNodeField({
      node,
      name: `owner`,
      value: OWNER_NAME,
    })
    // used as a back link to URL, path is the "source" name
    createNodeField({
      node,
      name: `parent`,
      value: path,
    })

    if (node.frontmatter.featuredImageUrl) {
      node.featuredImageUrl = await createRemoteFileNode({
        url: node.frontmatter.featuredImageUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      }).catch(error => {
        console.error(error)
      })
    }

    if (node.frontmatter.embeddedImageUrls) {
      node.embeddedImageUrls = await Promise.all(
        node.frontmatter.embeddedImageUrls.map(url => {
          try {
            return createRemoteFileNode({
              url,
              parentNodeId: node.id,
              createNode,
              createNodeId,
              cache,
              store,
            })
          } catch (error) {
            console.error(error)
          }
        })
      )
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { source } = themeOptions
  const { createPage } = actions

  if (!source) return

  const result = await graphql(`
    query {
      allMdx(
        filter: {
          frontmatter: {
            title: { ne: "dummy" }
            navigationLabel: { ne: "dummy" }
            status: { ne: "draft" }
          }
          fields: { owner: { eq: "source" } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              navigationLabel
            }
            fields {
              slug
              owner
              parent
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const data = result.data.allMdx.edges

  data.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, `src/layouts/SourceLayout.js`),
      context: {
        id: node.id,
        // used as back link in SourceLayout
        parent: node.fields.parent,
      },
    })
  })
}
