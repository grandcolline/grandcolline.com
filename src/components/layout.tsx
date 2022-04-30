import React from "react"
import { MDXProvider } from "@mdx-js/react"

import Seo from "./seo"
// import { Chart, Pullquote } from "./ui"
// import { Message } from "theme-ui"

const shortcodes = { Seo }

export default function Layout({ children }: { children: any }) {
  return (
    <MDXProvider components={shortcodes}> aaaa {children}</MDXProvider>
  )
}
