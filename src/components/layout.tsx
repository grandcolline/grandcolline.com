import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import "../styles/style.sass"

const Layout = ({ backUrl, children }: { backUrl: string; children: any }) => {
  let header
  if (backUrl) {
    header = (
      <Link to={backUrl}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    )
  }

  return (
    <>
      <header>{header}</header>
      {children}
      <footer></footer>
    </>
  )
}

export default Layout
