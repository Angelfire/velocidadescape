import Layout  from '../components/layout';
import PropTypes from "prop-types";
import React from 'react';
import SEO from '../components/seo';
import ViewCounter from "../hooks/ViewCounter";
import { graphql, Link } from "gatsby";

const BlogPostTemplate = ({
  data: { markdownRemark: { frontmatter, html }},
  pageContext: { next, previous, slug }, location 
}) => {
  const { date, description, title } = frontmatter;

  return (
    <Layout location={ location }>
      <SEO title={ title } description={ description } />
      <article className="container mx-auto px-4 lg:px-64">
        <div className="mb-24">
          <header className="mb-4">
            <h1 className="font-black font-header text-4xl">{ title }</h1>
            <div className="flex justify-between">
              <time className="font-text text-xs">{ date }</time>
              <ViewCounter id={ slug } />
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="my-8">
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
        </div>
      </article>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.object
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
