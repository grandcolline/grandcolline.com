import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const Seo = ({
  description,
  lang,
  meta,
  title,
}: {
  title: string
  description: string
  lang: string
  meta: any
}) => {
  // メタタグのタイトルの作成
  let metaTitle = title
  if (useLocation().pathname != "/") {
    metaTitle += " | grandcolline"
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `grandcolline`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `theme-color`,
          media: `(prefers-color-scheme: light)`,
          content: `#FFFEFC`,
        },
        {
          name: `theme-color`,
          media: `(prefers-color-scheme: dark)`,
          content: `#15202B`,
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`,
        },
        {
          name: `apple-mobile-web-app-title`,
          content: `gc`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
