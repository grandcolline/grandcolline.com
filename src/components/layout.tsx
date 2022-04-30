import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Seo from "./seo"

// mdx内で使えるcomponentsの定義
const shortcodes = { Seo }

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <header className="py-3"></header>
      <div className="content">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
      <footer className="py-3"></footer>
    </>
  )
}
export default Layout
