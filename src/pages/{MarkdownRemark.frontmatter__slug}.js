import React from "react"
import { graphql } from "gatsby"

import Markdown from "../components/markdown"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Markdown
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      backUrl={frontmatter.backUrl}
      index={frontmatter.index}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Markdown>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
        date(formatString: "yyyy年MM月DD日")
        backUrl
        index
      }
    }
  }
`
