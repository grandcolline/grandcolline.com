module.exports = {
  siteMetadata: {
    title: `grandcolline`,
    description: "",
    siteUrl: `https://grandcolline.com`,
    author: `grandcolline`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grandcolline`,
        short_name: `gc`,
        start_url: "/",
        display: `standalone`,
        icon: `static/img/icons/grandcolline_512.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
