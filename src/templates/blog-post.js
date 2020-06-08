import Layout  from '../components/layout';
import PropTypes from "prop-types";
import React from 'react';
import SEO from '../components/seo';
import { Link } from "gatsby";

const BlogPostTemplate = ({ pageContext: { frontmatter, html, next, previous } }) => {
  const { date, description, title } = frontmatter;
  const postDate = new Date(date).toDateString();

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div className="blog-post">
        <h1 className="blog-post__title">{ title }</h1>
        <time>{ postDate }</time>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="pagination">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.object
};

export default BlogPostTemplate;
