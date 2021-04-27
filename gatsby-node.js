exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = require.resolve(`./src/templates/blogPost.js`)
    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('There was an error on attempting to complete your request. Please try again...')
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}