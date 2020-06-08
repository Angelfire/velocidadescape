const siteMetadata = {
  author: `Andrés Bedoya`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  siteUrl: `https://gecken.co`,
  title: `Gecken`,
};

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
          resolve: 'gatsby-remark-prismjs',
          options: {
            inlineCodeMarker: '÷',
          },
        },
      ],
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gecken`,
      short_name: `Gecken`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`,
    },
  },
];

module.exports = {
  siteMetadata,
  plugins
};
