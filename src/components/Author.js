/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Author = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="mb-16 flex border-t border-gray-200 pt-2">
      <div className="mr-4 w-1/5 sm:mr-0 sm:w-[15%]">
        <StaticImage
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={99}
          height={99}
          quality={95}
          alt="Andrés Bedoya Profile picture"
        />
      </div>
      <div className="w-4/5 sm:w-[85%]">
        <p>
          Written by <strong>{author?.name}</strong>
        </p>
        <p>{author?.summary}</p>
      </div>
    </div>
  )
}

export default Author
