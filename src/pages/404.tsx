import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const meta = [
    {
      name: `robots`,
      content: `noindex`,
    },
  ]

  return (
    <Layout backUrl="/">
      <Seo title="Not Found" description="" meta={meta} />

      <div className="content">
        <h1 style={{ "font-weight": "normal" }}>404 Not Found 😿</h1>
      </div>
    </Layout>
  )
}
export default IndexPage
