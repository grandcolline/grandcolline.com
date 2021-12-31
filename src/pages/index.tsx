import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout backUrl="">
      <Seo description="I'm Software developer in Tokyo🗼. Lover of Movie 🎬 & Music 🎸" />

      <div className="info">
        <div>
          <img
            alt="icon"
            src="/img/icons/grandcolline_maskable_192.png"
            className="icon"
          ></img>
        </div>
        <div>
          <h1 style={{ "font-weight": "normal" }}>@grandcolline</h1>
          <a
            className="sns_link"
            title="twitter"
            href="https://twitter.com/grandcolline/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="sns_link"
            title="instagram"
            href="https://www.instagram.com/grandcolline/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className="sns_link"
            title="github"
            href="https://github.com/grandcolline/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="info">
        <p>
          I'm Software developer in Tokyo🗼
          <br />
          Lover of Movie 🎬 & Music 🎸
        </p>
      </div>
    </Layout>
  )
}
export default IndexPage
