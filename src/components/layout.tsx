import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Seo from "./seo"

// mdx内で使えるcomponentsの定義
const shortcodes = { Seo }

const Layout = ({
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
    <>
      <div className="markdown">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </>
  )
}
export default Layout
