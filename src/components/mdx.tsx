import React from "react"
import { MDXProvider } from "@mdx-js/react"

// import Seo from "./seo"

const Mdx = ({
  // title,
  // description,
  // index,
  children,
}: {
  // title: string
  // description: string
  // index: boolean
  children: any
}) => {
  return (
    <MDXProvider><div className="markdown">{children}</div></MDXProvider>
  )
}
export default Mdx
