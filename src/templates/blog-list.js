import Layout  from '../components/layout';
import Pagination from '../components/Pagination/Pagination';
import PropTypes from "prop-types";
import React from 'react';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const BlogIndex = ({ 
  pageContext: { currentPage, numPages },
  data: { allMarkdownRemark: { edges }, site: { siteMetadata: { title } }}
}) => {

  return (
    <Layout>
      <SEO title={ title }></SEO>
      <section className="posts">
        {edges.map(({ node }) => {
          const { date,  title } = node.frontmatter;
          const { slug } = node.fields;

          return (
            <article key={ node.id }>
              <header>
                <h2>
                  <Link to={ slug }>{ title }</Link>
                </h2>
                <time>{ date }</time>
              </header>
              <p>{ node.excerpt }</p>
            </article>
          );
        })}
      </section>
      <Pagination
        currentPage={ currentPage }
        numPages={ numPages }
      />
    </Layout>
  );
};

BlogIndex.propTypes = {
  pageContext: PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
`;
