import React from "react"
import Seo from "./seo"

const Markdown = ({
  title,
  description,
  index,
  children,
}: {
  title: string
  description: string
  index: boolean
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
        <div className="markdown">{children}</div>
      </div>

      <footer className="py-5"></footer>
    </>
  )
}

export default Markdown
