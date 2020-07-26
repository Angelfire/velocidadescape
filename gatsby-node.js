const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode ,actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const blogList = path.resolve(`./src/templates/blog-list.js`);

  const { errors, data } = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              description
              author
              tags
            }
            html
            excerpt
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  };

  const posts = data.allMarkdownRemark.edges;
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPost,
      context: {
        id: post.node.id,
        previous,
        next,
        slug: post.node.fields.slug,
      },
    });
  });

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: blogList,
      context: {
        currentPage: i + 1,
        limit: postsPerPage,
        numPages,
        numPosts: posts.length,
        skip: i * postsPerPage,
      },
    });
  });
};
