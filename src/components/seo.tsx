import React from "react"
import PropTypes from "prop-types"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"
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
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  // const defaultTitle = site.siteMetadata?.title
  const location = useLocation()

  // メタタグのタイトルの作成
  let metaTitle = title
  if (location.pathname != "/") {
    metaTitle += " | " + site.siteMetadata.title
  }

  return (
    <HelmetProvider>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={metaTitle}
        // titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
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
            content: site.siteMetadata?.social?.twitter || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
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
    </HelmetProvider>
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
