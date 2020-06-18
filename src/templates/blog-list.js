import PropTypes from "prop-types";
import React from 'react';
import Bio from '../components/Bio';
import Layout  from '../components/layout';
import Pagination from '../components/Pagination';
import SEO from '../components/seo';
import { graphql, Link } from 'gatsby';

const BlogIndex = ({ 
  pageContext: { currentPage, limit, numPages, numPosts },
  data: { allMarkdownRemark: { edges }, site: { siteMetadata: { title } }},
  location
}) => {

  return (
    <Layout location={ location }>
      <SEO title={ title } />
      <div className="container">
        <div className="flex flex-wrap pt-4 my-8">
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
