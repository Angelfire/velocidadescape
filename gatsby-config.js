require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  author: `Andrés Bedoya`,
  description: `Personal blog by Andrés Bedoya. I just want to share some personal things and others related to the headaches that programming produces.`,
  siteUrl: `https://velocidadescape.com`,
  title: `Velocidad de Escape`,
};

const pathPrefix = '/'; 

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-firebase`,
    options: {
      credentials: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            inlineCodeMarker: '÷',
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
              "heading[depth=2]": "font-black font-header text-3xl",
              "heading[depth=3]": "font-black font-header text-2xl",
              "list[ordered=true]": "list-decimal pl-8 mb-6",
              "list[ordered=false]": "list-disc pl-8 mb-6",
              "blockquote paragraph": "bg-gray-100 border-gray-900 border-l-4 italic mx-8 my-6 pl-4",
              link: "hover:no-underline text-blue underline",
              paragraph: "font-text mb-6",
            }
          },
        },
      ],
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `UA-169741674-1`,
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
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Velocidad de Escape`,
      short_name: `VE`,
      start_url: `/`,
      background_color: `#e8eaef`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/ve-icon.png`,
    },
  },
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
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
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
              }
            }
          `,
          output: "/rss.xml",
          title: "Andrés Bedoya - Velocidad de Escape RSS Feed",
        },
      ],
    },
  },
];

module.exports = {
  siteMetadata,
  pathPrefix,
  plugins
};
