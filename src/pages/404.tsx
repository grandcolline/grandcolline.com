import React from "react"
import Seo from "../components/seo"

const IndexPage = () => {
  const meta = [
    {
      name: `robots`,
      content: `noindex`,
    },
  ]

  return (
    <>
      <Seo title="Not Found" description="" meta={meta} />
      <h1 className="font-gilmer font-semibold text-center my-10 text-3xl">
        404 Not Found
      </h1>
    </>
  )
}
export default IndexPage
