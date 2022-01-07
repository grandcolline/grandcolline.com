import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }: { data: any }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout backUrl="">
      <Seo title="Blog" description="all blogposts." />

      <div className="content">
        <h1>Blog</h1>
        <p>思ったことや勉強メモなど。日々の散文。</p>

        <h2>Blogposts</h2>
        <ul>
          {posts.map(post => {
            return (
              <li>
                <small>{post.frontmatter.date}:&nbsp;</small>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { frontmatter: { slug: { regex: "/^/blog.*/" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "yyyy/MM/DD")
          slug
          title
        }
      }
    }
  }
`
