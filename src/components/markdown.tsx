import React from "react"

// import Layout from "./layout"
import Seo from "./seo"

// import "../styles/style.sass"

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
    <>
      <Seo title={title} description={description} meta={meta} />

      <header className="py-3"></header>

      <div className="md:w-700 w-4/5 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold my-6">{title}</h1>
        <div className="date">{date}</div>
        <div className="markdown">{children}</div>
      </div>

      <footer className="py-5"></footer>
    </>
  )
}

export default Markdown
