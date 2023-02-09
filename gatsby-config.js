/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Velocidad de Escape`,
    author: {
      name: `Andrés Bedoya`,
      summary: `Andrés Bedoya is a JavaScript software engineer, internet enthusiast and blogger from an early age. He strongly believes in the free culture.`,
    },
    description: `Personal blog by Andrés Bedoya. I just want to share some personal things and others related to the headaches that programming produces.`,
    siteUrl: `https://velocidadescape.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "÷",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=2]": "font-bold font-header text-2xl",
                "heading[depth=3]": "font-bold font-header text-xl",
                "list[ordered=true]": "list-decimal pl-8 mb-6",
                "list[ordered=false]": "list-disc pl-8 mb-6",
                "blockquote paragraph":
                  "bg-gray-100 border-gray-900 border-l-4 italic mx-8 my-6 pl-4",
                link: "hover:no-underline text-blue underline",
                paragraph: "mb-6",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt(pruneLength: 250)
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    description
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title:
              "Andrés Bedoya - Velocidad de Escape RSS FeedGatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Velocidad de Escape`,
        short_name: `VE`,
        start_url: `/`,
        background_color: `#e8eaef`,
        theme_color: `#3273dc`,
        display: `minimal-ui`,
        icon: `src/images/ve-icon.png`,
      },
    },
    "gatsby-plugin-netlify",
  ],
}
