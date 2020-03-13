module.exports = {
  siteMetadata: {
    title: "Software Developer Website",
    author: "Rodrigo Guzmán",
  },

  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-playground`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
  ],
}
