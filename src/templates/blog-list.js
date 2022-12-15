import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Bio from '../components/Bio'
import Layout  from '../components/layout'
import Pagination from '../components/Pagination'
import Seo from '../components/Seo'

const BlogIndex = ({ 
  pageContext: { currentPage, limit, numPages, numPosts },
  data: { allMarkdownRemark: { edges }, site},
  location
}) => (
  <Layout location={ location } title={site.siteMetadata?.title}>
    <div className="container mx-auto px-4 md:px-0 mb-16">
      <div className="flex flex-wrap pt-4">
        <Bio />
        <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-12">
          <section>
            {edges.map(({ node }) => {
              const { date,  title } = node.frontmatter;
              const { slug } = node.fields;

              return (
                <article key={ node.id } className="mb-8">
                  <header className="mb-4">
                    <h2 className="font-black font-header text-3xl">
                      <Link to={ slug }>{ title }</Link>
                    </h2>
                    <time className="font-text text-xs">{ date }</time>
                  </header>
                  <p className="font-text">{ node.excerpt }</p>
                </article>
              );
            })}
          </section>
          <Pagination
            currentPage={ currentPage }
            limit={ limit }
            numPages={ numPages }
            numPosts={ numPosts }
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
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
