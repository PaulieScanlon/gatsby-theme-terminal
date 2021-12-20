const { createFilePath, createRemoteFileNode } = require('gatsby-source-filesystem')

const path = require('path')

exports.createSchemaCustomization = async ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImageUrl: File @link(from: "fields.featuredImageUrl")
      embeddedImageUrls: [File] @link(from: "fields.embeddedImageUrls")
    }

    type Frontmatter @dontInfer {
        title: String
        navigationLabel: String
        tags: [String]
        aliases: [String]
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
  `)

  // Logs out all typeDefs
  // actions.printTypeDefinitions({ path: './typeDefs.txt' })
}

exports.onCreateNode = async (
  { node, actions: { createNodeField, createNode }, getNode, store, cache, createNodeId },
  themeOptions,
) => {
  const { source } = themeOptions

  if (node.internal.type === 'Mdx') {
    let basePath = ''

    if (Array.isArray(source)) {
      source.map((item) => {
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
      value: node.frontmatter.navigationLabel ? value : `${basePath}${value}`,
    })

    if (node.frontmatter.featuredImageUrl) {
      let featuredImageUrl = await createRemoteFileNode({
        url: node.frontmatter.featuredImageUrl,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      })

      if (featuredImageUrl) {
        createNodeField({ node, name: 'featuredImageUrl', value: featuredImageUrl.id })
      }
    }

    if (node.frontmatter.embeddedImageUrls) {
      let embeddedImageUrls = await Promise.all(
        node.frontmatter.embeddedImageUrls.map((url) => {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          })
        }),
      )
      if (embeddedImageUrls) {
        createNodeField({
          node,
          name: 'embeddedImageUrls',
          value: embeddedImageUrls.map((embeddedImageUrl) => {
            return embeddedImageUrl.id
          }),
        })
      }
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
        filter: { frontmatter: { status: { ne: "draft" }, navigationLabel: { eq: null } } }
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
      component: path.join(__dirname, `src/layouts/source-layout.js`),
      context: {
        id: node.id,
      },
    })
  })
}
