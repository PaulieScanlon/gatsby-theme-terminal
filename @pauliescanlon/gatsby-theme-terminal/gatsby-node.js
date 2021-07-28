const {
  createFilePath,
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

const path = require('path')

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

  if (node.internal.type === 'Mdx') {
    let basePath = ''

    if (Array.isArray(source)) {
      source.map(item => {
        const { name, dir } = item
        if (node.fileAbsolutePath.includes(name)) {
          basePath = `/${dir}`
        }
      })
    } else {
      if (node.fileAbsolutePath.includes(source.name)) {
        basePath = `/${source.dir}`
      }
    }

    const value = createFilePath({ node, getNode })

    await createNodeField({
      node,
      name: 'slug',
      value: value,
      value: node.frontmatter.navigationLabel ? value : `${basePath}${value}`,
    })

    // await console.log(node.fields)

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
            status: { ne: "draft" }
            navigationLabel: { eq: null }
          }
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

  data.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, `src/layouts/SourceLayout.js`),
      context: {
        id: node.id,
      },
    })
  })
}
