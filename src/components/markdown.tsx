import React from "react"

import Layout from "./layout"
import Seo from "./seo"

const Markdown = ({
  title,
  description,
  date,
  index,
  backUrl,
  children,
}: {
  title: string
  description: string
  date: string
  index: boolean
  backUrl: string
  children: any
}) => {
  let meta
  if (!index) {
    meta = [
      {
        name: `robots`,
        content: `noindex`,
      },
    ]
  }

  return (
    <Layout backUrl={backUrl}>
      <Seo title={title} description={description} meta={meta} />
      <div className="content">
        <h1>{title}</h1>
        <div className="date">{date}</div>
        {children}
      </div>
    </Layout>
  )
}

export default Markdown
