import * as React from "react"
import { graphql, Link } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/layout"
import Pagination from "../components/Pagination"
import Seo from "../components/seo"

const BlogIndex = ({
  pageContext: { currentPage, limit, numPages, numPosts },
  data: {
    allMarkdownRemark: { edges },
    site,
  },
  location,
}) => (
  <Layout location={location} title={site.siteMetadata?.title}>
    <div className="container mx-auto mb-16 px-4 md:px-0">
      <div className="flex flex-wrap pt-4">
        <Bio />
        <div className="w-full lg:w-3/4 lg:pl-8 xl:pl-12">
          <section>
            {edges.map(({ node }) => {
              const { date, title, tags } = node.frontmatter
              const { slug } = node.fields

              return (
                <article key={node.id} className="mb-12">
                  <header className="mb-4 flex items-end gap-6 border-b border-dashed border-black pb-1">
                    <time className="font-text pb-1 text-xs" dateTime={date}>
                      {date}
                    </time>
                    <h2 className="font-header text-3xl font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:to-sky-600 hover:bg-clip-text hover:text-transparent">
                      <Link to={slug}>{title}</Link>
                    </h2>
                  </header>
                  <p className="font-text mb-4">{node.excerpt}</p>
                  <div className="flex justify-end gap-4">
                    {tags.map(tag => (
                      <p className="bg-black px-2 py-1 text-sm text-white">
                        {tag}
                      </p>
                    ))}
                  </div>
                </article>
              )
            })}
          </section>
          <Pagination
            currentPage={currentPage}
            limit={limit}
            numPages={numPages}
            numPosts={numPosts}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 210)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
