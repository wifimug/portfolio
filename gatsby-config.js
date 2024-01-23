/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `portfolio`,
    author: `yaxin ding`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        linke: '/about'
      }

    ],
  },
  plugins: ["gatsby-plugin-catch-links", "gatsby-plugin-react-helmet" ,"gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blogposts",
      "path": "./src/blogposts/"
    }, 
    __key: "blogposts"
  },
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 100,
          }
        }
      ]
    }
  }]
};