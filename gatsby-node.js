const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve(`./src/templates/blog-list.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const posts = result.data.allMarkdownRemark.edges
  let blogPostsCount = 0

  posts.forEach((post, index) => {
    const id = post.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    })

    // Count blog posts.
    if (post.node.frontmatter.template === "blog-post") {
      blogPostsCount++
    }
  })

  // Create blog-list pages
  const postsPerPage = 9
  const numPages = Math.ceil(blogPostsCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  const caseList = path.resolve(`./src/templates/case-list.js`)

  const caseResult = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (caseResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  const casePosts = caseResult.data.allMarkdownRemark.edges
  let casePostsCount = 0

  casePosts.forEach((postCase, indexCase) => {
    const id = postCase.node.id
    const previous = indexCase === casePosts.length - 1 ? null : casePosts[indexCase + 1].node
    const next = indexCase === 0 ? null : casePosts[indexCase - 1].node

    createPage({
      path: postCase.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(postCase.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    })

    // Count case posts.
    if (postCase.node.frontmatter.template === "case-post") {
      casePostsCount++
    }
  })

  // Create case-list pages
  const casePostsPerPage = 9
  const caseNumPages = Math.ceil(casePostsCount / casePostsPerPage)

  Array.from({ length: caseNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/case` : `/case/${i + 1}`,
      component: caseList,
      context: {
        limit: casePostsPerPage,
        skip: i * casePostsPerPage,
        caseNumPages,
        currentPage: i + 1,
      },
    })
  })
}


//case



exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
