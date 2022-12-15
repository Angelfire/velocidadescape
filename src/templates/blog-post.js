import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Author from '../components/Author'

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: { frontmatter, html } },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title
  const { date, title } = frontmatter

  return (
    <Layout location={ location } title={siteTitle}>
      <article className="container mx-auto px-4 lg:px-64 mb-16" itemScope itemType="http://schema.org/Article">
        <div className="mb-8">
          <header className="mb-8">
            <h1 className="border-b border-gray-200 font-black font-header pb-2 text-4xl" itemProp="headline">{ title }</h1>
            <div className="flex justify-between pt-4">
              <time className="font-text text-xs">{ date }</time>
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} itemProp="articleBody" />
        </div>
        <Author />
        <ul className="flex justify-between">
          <li>
            {previous && (
              <Link className="bg-blue p-1 text-white" to={ previous.fields.slug } rel="prev">
                ← { previous.frontmatter.title }
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className="bg-blue p-1 text-white" to={ next.fields.slug } rel="next">
                { next.frontmatter.title } →
              </Link>
            )}
          </li>
        </ul>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter?.title}
      description={post.frontmatter?.description || post.excerpt}
      keywords={post.frontmatter?.tags}
    >
      {post.frontmatter?.tags && <meta name="keywords" content={post.frontmatter?.tags.join(', ')} />}
    </Seo>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
