module.exports = {
  siteMetadata: {
    title: `grandcolline`,
    description: "",
    siteUrl: `https://grandcolline.com`,
    author: `grandcolline`,
    social: {
      twitter: `grandcolline`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdowns`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `grandcolline`,
        short_name: `gc`,
        start_url: "/",
        display: `standalone`,
        icon: `static/img/icons/grandcolline_512.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
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
                return Object.assign({}, node, {
                  title: node.frontmatter.title,
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { slug: { regex: "/^/blogs.*/" } } },
                ) {
                  nodes {
                    frontmatter {
                      title
                      slug
                      description
                      date
                    }
                  }
                }
              }
            `,
            output: "/blogs/rss.xml",
            title: "grandcolline Blog's RSS Feed",
          },
        ],
      },
    },
  ],
}
